using CountryApi.Application.Interfaces;
using CountryApi.Application.Services;
using CountryApi.Infrastructure.Clients;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddMemoryCache();
builder.Services.AddHttpClient<ICountryApiClient, RestCountriesApiClient>(client =>
{
    client.BaseAddress = new Uri(uriString: builder.Configuration["RestCountriesApiUrl"]);
});
builder.Services.AddScoped<ICountryService, CountryService>();
builder.Services.AddControllers();

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
