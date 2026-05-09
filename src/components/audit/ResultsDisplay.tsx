import { AuditResult } from '@/types';

export default function ResultsDisplay({ results }: { results: AuditResult[] }) {
  const totalMonthlySavings = results.reduce((acc, curr) => acc + curr.potentialSavings, 0);
  const totalAnnualSavings = totalMonthlySavings * 12;

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-green-50 border border-green-200 p-8 rounded-2xl text-center">
          <p className="text-green-700 font-medium">Total Monthly Savings</p>
          <h3 className="text-5xl font-black text-green-800">${totalMonthlySavings}</h3>
        </div>
        <div className="bg-primary text-primary-foreground p-8 rounded-2xl text-center">
          <p className="opacity-90 font-medium">Total Annual Savings</p>
          <h3 className="text-5xl font-black">${totalAnnualSavings}</h3>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-2xl font-bold">Breakdown</h3>
        {results.map((res, i) => (
          <div key={i} className="border-l-4 border-primary p-4 bg-muted/30 rounded-r-lg">
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-bold text-lg">{res.toolName}</h4>
                <p className="text-sm text-muted-foreground">{res.reasoning}</p>
              </div>
              <div className="text-right">
                <span className="text-sm font-bold text-green-600">Save ${res.potentialSavings}/mo</span>
                <p className="text-xs uppercase tracking-wider font-bold opacity-60">{res.recommendedAction}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Lead Capture Gate - Appears after the value [cite: 41] */}
      <div className="bg-muted p-8 rounded-xl text-center space-y-4 border-2 border-dashed">
        <h3 className="text-xl font-bold">Want the full PDF report?</h3>
        <input type="email" placeholder="Enter work email" className="max-w-xs w-full p-3 border rounded-lg" />
        <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-bold">Send Report</button>
      </div>
    </div>
  );
}