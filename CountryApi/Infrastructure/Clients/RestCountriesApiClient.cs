using CountryApi.Application.Interfaces;
using CountryApi.Infrastructure.Clients.Models;

public class RestCountriesApiClient : ICountryApiClient
{
    private readonly HttpClient _httpClient;

    public RestCountriesApiClient(HttpClient httpClient)
    {
        _httpClient = httpClient;
        _httpClient.BaseAddress = new Uri("https://restcountries.com/v3.1/");
    }

    public async Task<List<RestCountry>> GetAllCountriesAsync()
    {
        var response = await _httpClient.GetFromJsonAsync<List<RestCountry>>("all");
        return response ?? new List<RestCountry>();
    }

    public async Task<RestCountry?> GetCountryByNameAsync(string name)
    {
        var countries = await GetAllCountriesAsync();
        return countries.FirstOrDefault(c =>
            c.Name.Common.Equals(name, StringComparison.OrdinalIgnoreCase));
    }
}