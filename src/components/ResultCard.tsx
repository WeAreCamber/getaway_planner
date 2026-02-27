import React from 'react';
import { Destination } from '../types';
import { Button } from './ui/Button';
import { Plane, Hotel, Ticket, RefreshCw, ExternalLink } from 'lucide-react';

interface ResultCardProps {
  destination: Destination;
  onRollAgain: () => void;
}

export const ResultCard: React.FC<ResultCardProps> = ({ destination, onRollAgain }) => {
  return (
    <div className="w-full max-w-2xl bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all animate-fade-in-up">
      <div className="relative h-64 md:h-80">
        <img 
          src={destination.imageUrl} 
          alt={`${destination.name}, ${destination.country}`} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6">
          <h2 className="text-3xl font-bold text-white mb-1">{destination.name}</h2>
          <p className="text-lg text-white/90">{destination.country}</p>
        </div>
      </div>
      
      <div className="p-6 md:p-8 space-y-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">The Vibe</h3>
          <p className="text-gray-600 leading-relaxed">{destination.description}</p>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Highlights</h3>
          <div className="flex flex-wrap gap-2">
            {destination.highlights.map((highlight, index) => (
              <span 
                key={index} 
                className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium"
              >
                {highlight}
              </span>
            ))}
          </div>
        </div>
        
        <div className="border-t border-gray-100 pt-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Book Your Getaway</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <a 
              href={destination.affiliateLinks.flights} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 p-3 bg-sky-50 text-sky-700 rounded-lg hover:bg-sky-100 transition-colors font-medium group"
            >
              <Plane className="w-4 h-4 group-hover:scale-110 transition-transform" />
              Find Flights
              <ExternalLink className="w-3 h-3 ml-1 opacity-50" />
            </a>
            <a 
              href={destination.affiliateLinks.hotel} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 p-3 bg-indigo-50 text-indigo-700 rounded-lg hover:bg-indigo-100 transition-colors font-medium group"
            >
              <Hotel className="w-4 h-4 group-hover:scale-110 transition-transform" />
              Book Hotel
              <ExternalLink className="w-3 h-3 ml-1 opacity-50" />
            </a>
            <a 
              href={destination.affiliateLinks.activity} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 p-3 bg-emerald-50 text-emerald-700 rounded-lg hover:bg-emerald-100 transition-colors font-medium group"
            >
              <Ticket className="w-4 h-4 group-hover:scale-110 transition-transform" />
              Activities
              <ExternalLink className="w-3 h-3 ml-1 opacity-50" />
            </a>
          </div>
        </div>
        
        <div className="pt-4 flex justify-center">
          <Button 
            onClick={onRollAgain} 
            variant="outline" 
            className="w-full md:w-auto"
          >
            <RefreshCw className="w-4 h-4 mr-2" />
            Roll Again
          </Button>
        </div>
      </div>
    </div>
  );
};
