interface CountryDetailCardProps {
  country: {
    name: string;
    flagUrl: string;
    capital: string;
    population: number;
  };
}

export function CountryDetailCard({ country }: CountryDetailCardProps) {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">{country.name}</h1>
      <img 
        src={country.flagUrl} 
        alt={`${country.name} flag`} 
        className="w-64 h-auto mb-4" 
      />
      <p><strong>Capital:</strong> {country.capital}</p>
      <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
    </div>
  );
}