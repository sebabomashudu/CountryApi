// src/components/FlagCard.tsx
import React from 'react';

interface FlagCardProps {
  country: {
    name: string;        // Changed from object to string
    flagUrl: string;     // Changed from flags.png to flagUrl
    population?: number; // Optional if not used in this component
    capital?: string;    // Optional if not used in this component
  };
  onClick: () => void;
}

const FlagCard: React.FC<FlagCardProps> = ({ country, onClick }) => {
  return (
    <div 
      className="cursor-pointer hover:shadow-lg transition-shadow"
      onClick={onClick}
    >
      <img 
        src={country.flagUrl} 
        alt={`Flag of ${country.name}`}
        className="w-full h-auto border rounded"
      />
      <p className="text-center mt-2">{country.name}</p>
    </div>
  );
};

export default FlagCard;