import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchCountryByName } from '../services/api';
import { CountryDetailCard } from '../components/CountryDetailCard';
import { CountryDetailLoader } from '../components/CountryDetailLoader';

interface Country {
  name: string;
  flagUrl: string;
  population: number;
  capital: string;
}

export default function DetailPage() {
  const { name } = useParams<{ name: string }>();
  const [country, setCountry] = useState<Country | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (name) {
      setLoading(true);
      fetchCountryByName(name)
        .then((data) => {
          setCountry(data);
          setError(null);
        })
        .catch(() => {
          setError('Country not found');
          setCountry(null);
        })
        .finally(() => setLoading(false));
    }
  }, [name]);

  return (
    <>
      <CountryDetailLoader 
        loading={loading} 
        error={error} 
        country={country} 
      />
      
      {country && <CountryDetailCard country={country} />}
    </>
  );
}