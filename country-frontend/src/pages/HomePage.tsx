import { useState, useEffect } from 'react';
import { fetchAllCountries } from '../services/api';
import { CountriesGrid } from '../components/CountriesGrid';
import { LoadingAndError } from '../components/LoadingAndError';

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

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Countries</h1>
      
      <LoadingAndError 
        loading={loading} 
        error={error} 
        loadingMessage="Loading countries..." 
      />
      
      {!loading && !error && <CountriesGrid countries={countries} />}
    </div>
  );
}