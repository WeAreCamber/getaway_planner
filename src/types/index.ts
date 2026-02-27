export type Region = 'Europe' | 'Asia' | 'Americas' | 'Africa' | 'Oceania';
export type BudgetTier = 'Low' | 'Medium' | 'High';

export interface AffiliateLinks {
  flights: string;
  hotel: string;
  activity: string;
}

export interface Destination {
  id: string;
  name: string;
  country: string;
  region: Region;
  budgetTier: BudgetTier;
  description: string;
  highlights: string[];
  imageUrl: string;
  affiliateLinks: AffiliateLinks;
  estimatedCost: string; // e.g. "£300 - £500"
  flightPrice: number; // Approximate flight cost from UK
  hotelPricePerNight: number; // Approximate hotel cost per night
}

export interface AppState {
  originCountry: string;
  budget: number;
  selectedDestination: Destination | null;
  isRolling: boolean;
  
  setOriginCountry: (country: string) => void;
  setBudget: (budget: number) => void;
  rollDestination: () => void;
  reset: () => void;
}
