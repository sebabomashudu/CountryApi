import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { fetchCountryByName } from '../services/api'

interface Country {
  name: string
  flagUrl: string
  population: number
  capital: string
}

export default function DetailPage() {
  const { name } = useParams<{ name: string }>()
  const [country, setCountry] = useState<Country | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (name) {
      fetchCountryByName(name)
        .then(setCountry)
        .catch(() => setError('Country not found'))
    }
  }, [name])

  if (error) return <div className="p-4 text-red-500">{error}</div>
  if (!country) return <div className="p-4">Loading country details...</div>

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">{country.name}</h1>
      <img src={country.flagUrl} alt={`${country.name} flag`} className="w-64 h-auto mb-4" />
      <p><strong>Capital:</strong> {country.capital}</p>
      <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
    </div>
  )
}
