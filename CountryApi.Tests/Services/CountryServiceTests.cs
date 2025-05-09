using CountryApi.Application.DTOs;
using CountryApi.Application.Interfaces;
using CountryApi.Application.Services;
using CountryApi.Infrastructure.Clients.Models;
using FluentAssertions;
using Microsoft.Extensions.Logging;
using Moq;
using Xunit;

namespace CountryApi.Tests.Unit.Services;

public class CountryServiceTests
{
    private readonly Mock<ICountryApiClient> _mockApiClient;
    private readonly Mock<ILogger<CountryService>> _mockLogger;
    private readonly CountryService _sut;

    public CountryServiceTests()
    {
        _mockApiClient = new Mock<ICountryApiClient>();
        _mockLogger = new Mock<ILogger<CountryService>>();
        _sut = new CountryService(_mockApiClient.Object, _mockLogger.Object);
    }

    [Fact]
    public async Task GetAllCountriesAsync_ReturnsMappedCountries()
    {
        // Arrange
        var testCountries = new List<RestCountry>
        {
            new() {
                Name = new() { Common = "Canada" },
                Flags = new() { Png = "ca.png" },
                Population = 38_000_000,
                Capital = new() { "Ottawa" }
            }
        };

        _mockApiClient
            .Setup(x => x.GetAllCountriesAsync())
            .ReturnsAsync(testCountries);

        // Act
        var result = await _sut.GetAllCountriesAsync();

        // Assert
        result.Should().ContainSingle()
            .Which.Should().BeEquivalentTo(new CountryDto(
                "Canada", "ca.png", 38_000_000, "Ottawa"));
    }

    [Fact]
    public async Task GetAllCountriesAsync_LogsError_WhenApiFails()
    {
        // Arrange
        _mockApiClient
            .Setup(x => x.GetAllCountriesAsync())
            .ThrowsAsync(new HttpRequestException("API down"));

        // Act & Assert
        await Assert.ThrowsAsync<HttpRequestException>(
            () => _sut.GetAllCountriesAsync());

        // Verify error was logged
        _mockLogger.Verify(log => log.Log(
            LogLevel.Error,
            It.IsAny<EventId>(),
            It.Is<It.IsAnyType>((v, _) => v.ToString()!.Contains("Failed to fetch countries")),
            It.IsAny<Exception>(),
            It.IsAny<Func<It.IsAnyType, Exception, string>>()),
            Times.Once);
    }

}