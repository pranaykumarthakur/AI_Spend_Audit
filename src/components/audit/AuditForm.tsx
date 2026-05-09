import { ToolInput, ToolName } from '@/types';
import { Plus, Trash2 } from 'lucide-react';

export default function AuditForm({ tools, setTools }: { 
  tools: ToolInput[], 
  setTools: (t: ToolInput[]) => void 
}) {
  const addTool = () => {
    const newTool: ToolInput = {
      id: crypto.randomUUID(),
      name: 'ChatGPT',
      plan: 'Pro',
      monthlySpend: 20,
      seats: 1
    };
    setTools([...tools, newTool]);
  };

  const removeTool = (id: string) => setTools(tools.filter(t => t.id !== id));

  return (
    <div className="space-y-4">
      {tools.map((tool) => (
        <div key={tool.id} className="grid grid-cols-1 md:grid-cols-4 gap-4 p-4 border rounded-lg items-end">
          <div>
            <label className="text-sm font-medium">Tool</label>
            <select className="w-full border rounded p-2 bg-background">
              <option>ChatGPT</option>
              <option>Cursor</option>
              <option>Claude</option>
            </select>
          </div>
          <div>
            <label className="text-sm font-medium">Seats</label>
            <input type="number" className="w-full border rounded p-2" min="1" defaultValue={tool.seats} />
          </div>
          <div>
            <label className="text-sm font-medium">Monthly Spend ($)</label>
            <input type="number" className="w-full border rounded p-2" min="0" defaultValue={tool.monthlySpend} />
          </div>
          <button onClick={() => removeTool(tool.id)} className="text-destructive p-2 flex items-center justify-center">
            <Trash2 size={20} />
          </button>
        </div>
      ))}
      <button onClick={addTool} className="flex items-center gap-2 text-primary font-medium py-2">
        <Plus size={18} /> Add another tool
      </button>
    </div>
  );
}