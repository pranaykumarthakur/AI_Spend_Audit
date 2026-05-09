export type ToolName = 'Cursor' | 'GitHub Copilot' | 'Claude' | 'ChatGPT' | 'OpenAI API';

export interface ToolInput {
  id: string;
  name: ToolName;
  plan: string;
  monthlySpend: number;
  seats: number;
}

export interface AuditResult {
  toolName: string;
  currentSpend: number;
  recommendedAction: string;
  potentialSavings: number;
  reasoning: string;
}