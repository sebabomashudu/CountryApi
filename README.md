# Flag Explorer Application

A modern web application that displays country flags and country details from https://restcountries.com/v3.1/all, built with C# .NET 8 backend and Vite + React + TypeScript frontend.

## Features

- **Backend API**:
  - RESTful endpoints for country data
  - Swagger documentation
  - Modern clean architecture patterns

- **Frontend**:
  - Responsive grid layout of country flags
  - Country detail view
  - Built with Vite, React, and TypeScript

- **CI/CD**:
  - Ready-to-use YAML pipeline configuration(Git Worlflow)
  - Automated testing

## Technologies

- **Backend**:
  - .NET 8
  - ASP.NET Core Web API
  - Swagger/OpenAPI
  - xUnit (for testing)

- **Frontend**:
  - Vite
  - React 18
  - TypeScript
  - Axios (for API calls)
  - Jest + React Testing Library (for testing)

## Prerequisites
- .NET 8 SDK
- Node.js (v18+ recommended)
- Yarn or npm

## Setup Instructions
### Clone Repo 
https://github.com/sebabomashudu/FlagApp.git

### Backend Setup

1. Navigate to the backend folder:
   ```bash
   cd FlagApp/CountryApi 

2. Restore dependencies:
   ```bash
   dotnet restore
   
3. Run the application:
   ```bash
   dotnet run
   
4. The API will be available at https://localhost:7059
   Swagger UI: https://localhost:7059/swagger

### Frontend Setup

1. Navigate to the backend folder:
   ```bash
   cd FlagApp/country-frontend

2. Install dependencies:
   ```bash
   npm install
   
3. Run the development server:
   ```bash
   npm run dev

4. The frontend will be available at http://localhost:5173

## Tests
### Backend test
   ```bash
   dotnet test
