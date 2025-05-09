using CountryApi.Application.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace CountryApi.Controllers;
[ApiController]
[Route("api/[controller]")]
public class CountriesController : ControllerBase
{
    private readonly ICountryService _countryService;
    public CountriesController(ICountryService countryService)
        => _countryService = countryService;

    [HttpGet]
    public async Task<IActionResult> GetAll()
        => Ok(await _countryService.GetAllCountriesAsync());

    [HttpGet("{name}")]
    public async Task<IActionResult> GetDetails(string name)
    {
        var country = await _countryService.GetCountryDetailsAsync(name);
        return country == null ? NotFound() : Ok(country);
    }
}