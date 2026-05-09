import { ToolInput, AuditResult } from '../types';

export const calculateAudit = (tools: ToolInput[]): AuditResult[] => {
  return tools.map(tool => {
    let savings = 0;
    let recommendation = "Maintain current plan";
    let reason = "Your current spend is aligned with the best available retail rates.";

    // Logic: Seat Optimization [cite: 59]
    if (tool.name === 'ChatGPT' && tool.plan === 'Enterprise' && tool.seats < 20) {
      const teamPrice = 25 * tool.seats;
      savings = tool.monthlySpend - teamPrice;
      recommendation = "Downgrade to ChatGPT Team";
      reason = `Enterprise tier is overkill for ${tool.seats} seats. Team tier provides core collaboration at a lower cost.`;
    }

    // Logic: Alternative Tools [cite: 61]
    if (tool.name === 'GitHub Copilot' && tool.seats > 0) {
      recommendation = "Evaluate Cursor for advanced productivity";
      reason = "While pricing is similar, Cursor's IDE-level integration often provides better value for development teams.";
    }

    return {
      toolName: tool.name,
      currentSpend: tool.monthlySpend,
      recommendedAction: recommendation,
      potentialSavings: Math.max(0, savings),
      reasoning: reason
    };
  });
};