import { Link } from 'react-router-dom';

interface CountryCardProps {
  country: {
    name: string;
    flagUrl: string;
  };
}

export function CountryCard({ country }: CountryCardProps) {
  return (
    <Link 
      to={`/country/${country.name}`}
      className="block text-center hover:bg-gray-50 p-2"
    >
      <div className="font-medium mb-2">{country.name}</div>
      <img 
        src={country.flagUrl} 
        alt={`${country.name} flag`} 
        className="mx-auto w-16 h-auto border"
      />
    </Link>
  );
}