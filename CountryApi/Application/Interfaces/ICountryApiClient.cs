using CountryApi.Infrastructure.Clients;
using CountryApi.Infrastructure.Clients.Models;

namespace CountryApi.Application.Interfaces;
public interface ICountryApiClient
{
    Task<List<RestCountry>> GetAllCountriesAsync();
    Task<RestCountry?> GetCountryByNameAsync(string name);
}