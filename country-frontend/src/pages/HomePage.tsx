import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import FlagCard from '../components/FlagCard'
import { fetchAllCountries } from '../services/api'


interface Country {
  name: string;
  flagUrl: string;
  population: number;
  capital: string;
}

export default function HomePage() {
  const [countries, setCountries] = useState<Country[]>([])
  const navigate = useNavigate()

  useEffect(() => {
    fetchAllCountries().then(setCountries)
  }, [])

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Country Flags</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {countries.map((country) => (
          <FlagCard
            key={country.name}  // Using name directly as string
            country={country}
            onClick={() => navigate(`/country/${country.name}`)}
          />
        ))}
      </div>
    </div>
  )
}