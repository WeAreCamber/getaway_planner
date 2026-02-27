import React from 'react';
import { useStore } from './store/useStore';
import { CountrySelector } from './components/CountrySelector';
import { BudgetControl } from './components/BudgetControl';
import { Button } from './components/ui/Button';
import { ResultCard } from './components/ResultCard';
import { Plane, Sparkles } from 'lucide-react';

function App() {
  const { selectedDestination, isRolling, rollDestination, reset } = useStore();

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-gray-100 py-4 px-6 sticky top-0 z-10">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div 
            className="flex items-center gap-2 text-blue-600 font-bold text-xl cursor-pointer" 
            onClick={reset}
          >
            <Plane className="w-6 h-6" />
            <span>Getaway Planner</span>
          </div>
          <div className="text-sm text-gray-500 hidden sm:block">
            Minimal Frictionless Travel Inspiration
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center p-6 w-full max-w-4xl mx-auto">
        
        {!selectedDestination && !isRolling && (
          <div className="w-full max-w-md space-y-8 animate-fade-in-up">
            <div className="text-center space-y-3">
              <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">
                Where to next?
              </h1>
              <p className="text-lg text-gray-600">
                Let chance decide your next adventure.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 space-y-8">
              <CountrySelector />
              <BudgetControl />
              
              <Button 
                onClick={rollDestination} 
                className="w-full py-4 text-lg shadow-lg shadow-blue-500/20"
                size="lg"
              >
                <Sparkles className="w-5 h-5 mr-2" />
                Surprise Me
              </Button>
            </div>
          </div>
        )}

        {isRolling && (
          <div className="text-center space-y-4 animate-pulse-slow">
            <div className="relative w-24 h-24 mx-auto">
              <div className="absolute inset-0 bg-blue-100 rounded-full animate-ping opacity-75"></div>
              <div className="relative bg-white p-6 rounded-full shadow-xl flex items-center justify-center">
                <Plane className="w-10 h-10 text-blue-600 animate-bounce" />
              </div>
            </div>
            <h2 className="text-2xl font-bold text-gray-800">Finding your perfect getaway...</h2>
            <p className="text-gray-500">Scanning the globe for hidden gems</p>
          </div>
        )}

        {selectedDestination && !isRolling && (
          <div className="w-full flex flex-col items-center space-y-6 animate-fade-in-up">
            <div className="text-center mb-2">
              <span className="inline-block px-4 py-1.5 bg-blue-50 text-blue-700 rounded-full text-sm font-medium mb-4">
                We found a match!
              </span>
              <h2 className="text-3xl font-bold text-gray-900">
                Pack your bags for {selectedDestination.name}
              </h2>
            </div>
            
            <ResultCard 
              destination={selectedDestination} 
              onRollAgain={rollDestination} 
            />
            
            <button 
              onClick={reset}
              className="text-gray-400 hover:text-gray-600 text-sm font-medium transition-colors mt-8"
            >
              Start Over
            </button>
          </div>
        )}

      </main>

      {/* Footer */}
      <footer className="py-6 text-center text-sm text-gray-400">
        <p>© {new Date().getFullYear()} Getaway Planner. Built with Cloudflare Pages + D1.</p>
      </footer>
    </div>
  );
}

export default App;
