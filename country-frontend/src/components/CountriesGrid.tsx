import { CountryCard } from './CountryCard';

interface CountriesGridProps {
  countries: {
    name: string;
    flagUrl: string;
  }[];
  columns?: number;
}

export function CountriesGrid({ countries, columns = 5 }: CountriesGridProps) {
  if (countries.length === 0) {
  return null;
}
  return (
    <div className="w-full">
      <table className="w-full table-fixed">
        <tbody>
          {Array.from({ length: Math.ceil(countries.length / columns) }).map((_, rowIndex) => (
            <tr key={rowIndex}>
              {Array.from({ length: columns }).map((_, colIndex) => {
                const countryIndex = rowIndex * columns + colIndex;
                const country = countries[countryIndex];
                
                return (
                  <td key={colIndex} className="align-top p-2 border">
                    {country && <CountryCard country={country} />}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}