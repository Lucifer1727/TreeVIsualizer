import { useCallback, useEffect, useState } from "react";
import ReactFlow, {
  Node,
  Edge,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  MarkerType,
} from "reactflow";
import "reactflow/dist/style.css";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { toast } from "sonner";

interface TreeVisualizationProps {
  data: any;
}

type NodeType = "object" | "array" | "primitive";

const getNodeColor = (type: NodeType, isHighlighted: boolean) => {
  if (isHighlighted) return "hsl(var(--accent))";
  switch (type) {
    case "object":
      return "hsl(var(--primary))";
    case "array":
      return "hsl(var(--success))";
    case "primitive":
      return "hsl(var(--warning))";
  }
};

const createNodesAndEdges = (data: any, path = "$") => {
  const nodes: Node[] = [];
  const edges: Edge[] = [];
  let nodeId = 0;

  const traverse = (obj: any, currentPath: string, parentId: string | null, level: number, siblingIndex: number) => {
    const id = `node-${nodeId++}`;
    const isArray = Array.isArray(obj);
    const isPrimitive = typeof obj !== "object" || obj === null;

    let nodeType: NodeType = "primitive";
    let label = currentPath.split(".").pop() || currentPath;

    if (!isPrimitive) {
      nodeType = isArray ? "array" : "object";
      label = currentPath.split(".").pop() || currentPath;
    } else {
      label = `${label}: ${JSON.stringify(obj)}`;
    }

    const xSpacing = 200;
    const ySpacing = 100;
    const xOffset = siblingIndex * xSpacing - (Object.keys(obj || {}).length * xSpacing) / 2;

    nodes.push({
      id,
      data: { 
        label, 
        path: currentPath,
        type: nodeType 
      },
      position: { x: xOffset, y: level * ySpacing },
      style: {
        background: getNodeColor(nodeType, false),
        color: "white",
        border: "2px solid transparent",
        borderRadius: "8px",
        padding: "10px 16px",
        fontSize: "13px",
        fontWeight: "500",
        boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
      },
    });

    if (parentId) {
      edges.push({
        id: `edge-${parentId}-${id}`,
        source: parentId,
        target: id,
        type: "smoothstep",
        markerEnd: {
          type: MarkerType.ArrowClosed,
          color: "hsl(var(--border))",
        },
        style: {
          stroke: "hsl(var(--border))",
          strokeWidth: 2,
        },
      });
    }

    if (!isPrimitive) {
      const keys = Object.keys(obj);
      keys.forEach((key, index) => {
        const newPath = isArray ? `${currentPath}[${key}]` : `${currentPath}.${key}`;
        traverse(obj[key], newPath, id, level + 1, index);
      });
    }
  };

  traverse(data, path, null, 0, 0);
  return { nodes, edges };
};

export const TreeVisualization = ({ data }: TreeVisualizationProps) => {
  const [searchPath, setSearchPath] = useState("");
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  useEffect(() => {
    const { nodes: newNodes, edges: newEdges } = createNodesAndEdges(data);
    setNodes(newNodes);
    setEdges(newEdges);
  }, [data, setNodes, setEdges]);

  const handleSearch = useCallback(() => {
    if (!searchPath) return;

    const matchingNode = nodes.find((node) => node.data.path === searchPath);

    if (matchingNode) {
      const updatedNodes = nodes.map((node) => ({
        ...node,
        style: {
          ...node.style,
          background: getNodeColor(node.data.type, node.id === matchingNode.id),
          border: node.id === matchingNode.id ? "2px solid white" : "2px solid transparent",
        },
      }));
      setNodes(updatedNodes);
      toast.success("Match found! 🎯");
    } else {
      toast.error("No match found, please check your path.");
    }
  }, [searchPath, nodes, setNodes]);

  return (
    <div className="h-full flex flex-col">
      <div className="p-4 border-b border-border bg-card">
        <div className="flex gap-2">
          <Input
            placeholder="$.user.address.city"
            value={searchPath}
            onChange={(e) => setSearchPath(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            className="flex-1"
          />
          <Button onClick={handleSearch} size="icon">
            <Search className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <div className="flex-1 bg-muted/30">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          fitView
          attributionPosition="bottom-left"
        >
          <Background />
          <Controls />
        </ReactFlow>
      </div>
    </div>
  );
};
