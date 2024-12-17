import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

interface ReportOutputProps {
  report?: string;
}

export function ReportOutput({ report }: ReportOutputProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Generated Report</CardTitle>
      </CardHeader>
      <CardContent>
        {report ? (
          <div className="prose prose-sm max-w-none">
            <p>{report}</p>
          </div>
        ) : (
          <div className="text-center text-muted-foreground py-8">
            Upload an image to generate a report
          </div>
        )}
      </CardContent>
    </Card>
  );
}