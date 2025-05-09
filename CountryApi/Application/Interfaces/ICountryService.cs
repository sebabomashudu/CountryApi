using CountryApi.Application.DTOs;

namespace CountryApi.Application.Interfaces;
public interface ICountryService
{
    Task<IEnumerable<CountryDto>> GetAllCountriesAsync();
    Task<CountryDto?> GetCountryDetailsAsync(string name);
}