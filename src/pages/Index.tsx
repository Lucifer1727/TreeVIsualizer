import { useState } from "react";
import { JSONInput } from "@/components/JSONInput";
import { TreeVisualization } from "@/components/TreeVisualization";
import { ThemeToggle } from "@/components/ThemeToggle";
import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from "@/components/ui/resizable";

const Index = () => {
  const [jsonData, setJsonData] = useState<any>(null);

  return (
    <div className="h-screen flex flex-col bg-background">
      <header className="border-b border-border bg-card px-6 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-foreground">JSON Tree Visualizer</h1>
        <ThemeToggle />
      </header>
      <ResizablePanelGroup
        direction="horizontal"
        className="flex-1"
      >
        <ResizablePanel defaultSize={50} minSize={30}>
          <div className="h-full overflow-auto">
            <JSONInput onJSONParsed={setJsonData} />
          </div>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={50} minSize={30}>
          <div className="h-full overflow-hidden">
            {jsonData ? (
              <TreeVisualization data={jsonData} />
            ) : (
              <div className="h-full flex items-center justify-center text-muted-foreground">
                <p>Enter JSON and click "Generate Tree" to visualize</p>
              </div>
            )}
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
};

export default Index;
