import React from 'react';
import { useStore } from '../store/useStore';
import { MapPin } from 'lucide-react';

const COUNTRIES = [
  'United Kingdom',
  'United States',
  'Germany',
  'France',
  'Canada',
  'Australia',
  'Other'
];

export const CountrySelector: React.FC = () => {
  const { originCountry, setOriginCountry } = useStore();

  return (
    <div className="w-full space-y-2">
      <label htmlFor="origin" className="text-sm font-medium text-gray-700 flex items-center gap-2">
        <MapPin className="w-4 h-4" />
        Departure Origin
      </label>
      <div className="relative">
        <select
          id="origin"
          value={originCountry}
          onChange={(e) => setOriginCountry(e.target.value)}
          className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700"
        >
          {COUNTRIES.map((country) => (
            <option key={country} value={country}>
              {country}
            </option>
          ))}
        </select>
        <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none">
          <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </div>
  );
};
