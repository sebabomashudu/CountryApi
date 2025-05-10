// CountryApi.Tests/Integration/ApiFactory.cs
using Microsoft.AspNetCore.Mvc.Testing;
using CountryApi;
using Microsoft.AspNetCore.Hosting;
using Microsoft.VisualStudio.TestPlatform.TestHost;
using Microsoft.AspNetCore.TestHost;
using Microsoft.Extensions.DependencyInjection;
using CountryApi.Application.Interfaces;
using Moq;

public class ApiFactory : WebApplicationFactory<Program>
{
    protected override void ConfigureWebHost(IWebHostBuilder builder)
    {
        builder.UseContentRoot(Directory.GetCurrentDirectory());
        builder.ConfigureTestServices(services =>
        {
            services.AddSingleton<ICountryApiClient>(_ => Mock.Of<ICountryApiClient>());
        });
    }
}