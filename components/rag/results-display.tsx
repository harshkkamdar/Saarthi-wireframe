import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';

interface ResultsDisplayProps {
  results?: Array<{
    title: string;
    content: string;
    relevance: number;
  }>;
}

export function ResultsDisplay({ results }: ResultsDisplayProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Search Results</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[400px]">
          {results ? (
            <div className="space-y-4">
              {results.map((result, index) => (
                <div key={index} className="p-4 bg-muted rounded-lg">
                  <h4 className="font-medium mb-2">{result.title}</h4>
                  <p className="text-sm text-muted-foreground">{result.content}</p>
                  <div className="mt-2 text-xs text-muted-foreground">
                    Relevance: {result.relevance}%
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center text-muted-foreground py-8">
              No results to display
            </div>
          )}
        </ScrollArea>
      </CardContent>
    </Card>
  );
}