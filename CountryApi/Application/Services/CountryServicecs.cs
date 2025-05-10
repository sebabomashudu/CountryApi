using CountryApi.Application.DTOs;
using CountryApi.Application.Interfaces;
using CountryApi.Infrastructure.Clients.Models;

namespace CountryApi.Application.Services;

public sealed class CountryService(
    ICountryApiClient apiClient,
    ILogger<CountryService> logger) : ICountryService
{
    public async Task<IEnumerable<CountryDto>> GetAllCountriesAsync()
    {
 
        try
        {
            var countries = await apiClient.GetAllCountriesAsync();
            return countries.Select(ToDto);
        }
        catch (Exception ex)  
        {
            logger.LogError(ex, "Failed to fetch countries");
            throw;  
        }

    }

    private static CountryDto ToDto(RestCountry country)
    {
        return new(
        Name: country.Name.Common,
        FlagUrl: country.Flags.Png,
        Population: country.Population,
        Capital: country.Capital.FirstOrDefault() ?? "N/A");
    }

    public async Task<CountryDto?> GetCountryDetailsAsync(string name)
    {
        try
        {
            // Get all countries from the API
            var countries = await apiClient.GetAllCountriesAsync();

            // Find the specific country (case-insensitive)
            var country = countries.FirstOrDefault(c =>
                string.Equals(c.Name.Common, name, StringComparison.OrdinalIgnoreCase));

            if (country == null)
            {
                logger.LogWarning("Country {Name} not found", name);
                return null;
            }

            return ToDto(country);
        }
        catch (Exception ex)
        {
            logger.LogError(ex, "Error fetching details for country {Name}", name);
            throw; // Re-throw for proper error handling
        }
    }
}