import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";

interface JSONInputProps {
  onJSONParsed: (data: any) => void;
}

const SAMPLE_JSON = `{
  "user": {
    "id": 1,
    "name": "John Doe",
    "address": {
      "city": "New York",
      "country": "USA"
    }
  },
  "items": [
    { "name": "item1" },
    { "name": "item2" }
  ]
}`;

export const JSONInput = ({ onJSONParsed }: JSONInputProps) => {
  const [jsonText, setJsonText] = useState(SAMPLE_JSON);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = () => {
    try {
      const parsed = JSON.parse(jsonText);
      setError(null);
      onJSONParsed(parsed);
    } catch (e) {
      setError("Invalid JSON: " + (e as Error).message);
    }
  };

  return (
    <div className="h-full flex flex-col gap-4 p-6">
      <div className="flex-1 flex flex-col gap-3">
        <label className="text-sm font-medium text-muted-foreground">
          Paste or type JSON data
        </label>
        <Textarea
          value={jsonText}
          onChange={(e) => setJsonText(e.target.value)}
          className="flex-1 font-mono text-sm resize-none"
          placeholder="Enter JSON here..."
        />
      </div>

      {error && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      <Button onClick={handleGenerate} className="w-full" size="lg">
        Generate Tree
      </Button>
    </div>
  );
};
