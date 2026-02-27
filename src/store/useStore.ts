import { create } from 'zustand';
import { AppState, Destination } from '../types';
import { destinations } from '../data/destinations';

const calculateTotalCost = (d: Destination) => {
  return d.flightPrice + (d.hotelPricePerNight * 2);
};

export const useStore = create<AppState>((set, get) => ({
  originCountry: 'United Kingdom',
  budget: 1000,
  selectedDestination: null,
  isRolling: false,

  setOriginCountry: (country: string) => set({ originCountry: country }),
  setBudget: (budget: number) => set({ budget }),
  
  rollDestination: () => {
    set({ isRolling: true });
    
    // Simulate API delay / rolling animation
    setTimeout(() => {
      const { budget, selectedDestination, originCountry } = get();
      
      // Filter by budget AND ensure we don't suggest the country we're starting from
      let candidates = destinations.filter(d => {
        const cost = calculateTotalCost(d);
        const isNotOrigin = d.country !== originCountry;
        return cost <= budget && isNotOrigin;
      });

      // If no candidates found (budget too low), fallback to cheapest destination that isn't the origin
      if (candidates.length === 0) {
        // Find cheapest that isn't origin
        const validDestinations = destinations.filter(d => d.country !== originCountry);
        const cheapest = [...validDestinations].sort((a, b) => calculateTotalCost(a) - calculateTotalCost(b))[0];
        
        // If somehow even that fails (e.g. only 1 country exists and it's the origin), handle gracefully
        if (cheapest) {
            candidates = [cheapest];
        }
      }
      
      // Filter out currently selected to avoid repeat if possible
      let pool = candidates.filter(d => d.id !== selectedDestination?.id);
      
      // If filtering out current leaves us with nothing, use candidates (allow repeat)
      if (pool.length === 0) {
        pool = candidates;
      }

      if (pool.length === 0) {
         // Absolute fallback if everything fails
         set({ isRolling: false, selectedDestination: null });
         return;
      }

      const randomIndex = Math.floor(Math.random() * pool.length);
      set({ isRolling: false, selectedDestination: pool[randomIndex] });
    }, 1500);
  },

  reset: () => set({ selectedDestination: null })
}));
