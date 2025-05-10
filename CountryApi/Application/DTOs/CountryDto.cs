namespace CountryApi.Application.DTOs;

public sealed record CountryDto(
    string Name,
    string FlagUrl,
    long Population = 0,
    string Capital = "");