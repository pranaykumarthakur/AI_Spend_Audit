'use client';
import { useState } from 'react';
import { usePersistence } from '@/hooks/usePersistence';
import { calculateAudit } from '@/utils/engine';
import { ToolInput, AuditResult } from '@/types';
import AuditForm from '@/components/audit/AuditForm';
import ResultsDisplay from '@/components/audit/ResultsDisplay';

export default function AuditPage() {
  // Persistence ensures data stays if the user refreshes 
  const [tools, setTools] = usePersistence<ToolInput[]>('audit_tools', []);
  const [results, setResults] = useState<AuditResult[] | null>(null);

  const handleRunAudit = () => {
    const auditData = calculateAudit(tools);
    setResults(auditData);
  };

  return (
    <main className="max-w-4xl mx-auto p-6 space-y-12">
      <header className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">AI Spend Audit</h1>
        <p className="text-muted-foreground text-lg">
          Stop overpaying for AI. Get a defensible audit of your stack in 60 seconds.
        </p>
      </header>

      <section className="bg-card border rounded-xl p-6 shadow-sm">
        <h2 className="text-xl font-semibold mb-6">1. Your AI Stack</h2>
        <AuditForm tools={tools} setTools={setTools} />
        <button 
          onClick={handleRunAudit}
          className="w-full mt-8 bg-primary text-primary-foreground py-4 rounded-lg font-bold hover:opacity-90 transition-all"
        >
          Generate Instant Audit
        </button>
      </section>

      {results && (
        <section id="results-view" className="animate-in fade-in slide-in-from-bottom-4 duration-700">
          <ResultsDisplay results={results} />
        </section>
      )}
    </main>
  );
}