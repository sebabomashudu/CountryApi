import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchAllCountries } from '../services/api';

interface Country {
  name: string;
  flagUrl: string;
}

export default function HomePage() {
  const [countries, setCountries] = useState<Country[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchAllCountries()
      .then(data => {
        setCountries(data);
        setLoading(false);
      })
      .catch(err => {
        setError('Failed to load countries');
        setLoading(false);
        console.error(err);
      });
  }, []);

  if (loading) return <div className="p-4 text-center">Loading countries...</div>;
  if (error) return <div className="p-4 text-red-500 text-center">{error}</div>;

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Countries</h1>
      
      {/* 5-column table layout */}
      <div className="w-full">
        <table className="w-full table-fixed">
          <tbody>
            {/* Calculate number of rows needed (5 columns per row) */}
            {Array.from({ length: Math.ceil(countries.length / 5) }).map((_, rowIndex) => (
              <tr key={rowIndex}>
                {/* Render 5 cells for each row */}
                {Array.from({ length: 5 }).map((_, colIndex) => {
                  const countryIndex = rowIndex * 5 + colIndex;
                  const country = countries[countryIndex];
                  
                  return (
                    <td key={colIndex} className="align-top p-2 border">
                      {country ? (
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
                      ) : null}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}