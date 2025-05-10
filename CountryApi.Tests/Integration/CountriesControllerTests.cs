// CountryApi.IntegrationTests/CountriesEndpointTests.cs
using System.Net;
using FluentAssertions;
using CountryApi.Application.DTOs;
using Moq;
using Xunit;
using CountryApi.Application.Interfaces;
using CountryApi.Infrastructure.Clients.Models;
using Microsoft.Extensions.DependencyInjection;
using System.Net.Http.Json;

namespace CountryApi.Tests.Integration;

public class CountriesEndpointTests : IClassFixture<ApiFactory>
{
    private readonly HttpClient _client;
    private readonly Mock<ICountryApiClient> _mockApiClient;

    public CountriesEndpointTests(ApiFactory factory)
    {
        _client = factory.CreateClient();
        _mockApiClient = factory.Services.GetRequiredService<ICountryApiClient>() as Mock<ICountryApiClient>;
    }

    [Fact]
    public async Task GET_Countries_ReturnsSuccess()
    {
        // Arrange
        _mockApiClient.Setup(x => x.GetAllCountriesAsync())
            .ReturnsAsync(new List<RestCountry> { new() {
                Name = new() { Common = "Test" },
                Flags = new() { Png = "test.png" }
            }});

        // Act
        var response = await _client.GetAsync("/api/countries");

        // Assert
        response.StatusCode.Should().Be(HttpStatusCode.OK);
        var result = await response.Content.ReadFromJsonAsync<List<CountryDto>>();
        result.Should().ContainSingle().Which.Name.Should().Be("Test");
    }

    [Fact]
    public async Task GET_CountryByName_Returns404_WhenNotFound()
    {
        // Arrange
        _mockApiClient.Setup(x => x.GetCountryByNameAsync("Atlantis"))
            .ReturnsAsync((RestCountry?)null);

        // Act
        var response = await _client.GetAsync("/api/countries/Atlantis");

        // Assert
        response.StatusCode.Should().Be(HttpStatusCode.NotFound);
    }

}