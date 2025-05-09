// Infrastructure/Clients/Models/RestCountry.cs
namespace CountryApi.Infrastructure.Clients.Models;

public sealed class RestCountry
{
    public CountryName Name { get; set; } = null!;
    public FlagData Flags { get; set; } = null!;
    public long Population { get; set; }
    public List<string> Capital { get; set; } = new();

    public class CountryName
    {
        public string Common { get; set; } = null!;
        public string Official { get; set; } = null!;
    }

    public class FlagData
    {
        public string Png { get; set; } = null!;
        public string Svg { get; set; } = null!;
    }
}