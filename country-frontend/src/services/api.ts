import axios from 'axios'

export interface Country {
  name: string;
  flagUrl: string;
}
/*const REST_COUNTRIES_API = 'https://restcountries.com/v3.1'

export const fetchAllCountries = async () => {
  const response = await axios.get(`${REST_COUNTRIES_API}/all`)
  return response.data
}

export const fetchCountryByName = async (name: string) => {
  const response = await axios.get(`${REST_COUNTRIES_API}/name/${name}`)
  return response.data[0] // Return first match
}*/


export const fetchAllCountries = async () => {
  const response = await axios.get('/api/Countries') // Will be proxied to C# API
  return response.data
}
export const fetchCountryByName = async (name: string) => {
  const response = await axios.get(`/api/Countries/${name}`)
  return response.data // first match
}
