import React from 'react';
import { useStore } from '../store/useStore';
import { PoundSterling } from 'lucide-react';

export const BudgetControl: React.FC = () => {
  const { budget, setBudget } = useStore();

  return (
    <div className="w-full space-y-4">
      <div className="flex items-center justify-between">
        <label htmlFor="budget" className="text-sm font-medium text-gray-700 flex items-center gap-2">
          <PoundSterling className="w-4 h-4" />
          Budget (per person)
        </label>
        <span className="text-lg font-bold text-blue-600">£{budget}</span>
      </div>
      
      <input
        type="range"
        id="budget"
        min="100"
        max="3000"
        step="100"
        value={budget}
        onChange={(e) => setBudget(parseInt(e.target.value))}
        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
      />
      
      <div className="flex justify-between text-xs text-gray-500">
        <span>£100</span>
        <span>£1500</span>
        <span>£3000+</span>
      </div>
    </div>
  );
};
