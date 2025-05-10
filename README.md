# Flag Explorer Application  &#127760;

A modern web application that displays country flags and country details from https://restcountries.com/v3.1/all, built with C# .NET 8 backend and Vite + React + TypeScript frontend.

## Features 🚀 

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

## Technologies 🚀

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
    
## Prerequisites 🚀
- .NET 8 SDK
- Node.js (v18+ recommended)
- Yarn or npm

## Setup Instructions 🚀

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

3. Make sure the target in **vite.config.ts** is set to your backend address(https://localhost:7059)
   ![image](https://github.com/user-attachments/assets/b02e97d6-0870-4ee6-ab50-123b27ad067b)






4. Run the development server:
   ```bash
   npm run dev
     
## Tests 🚀

### Backend test
    dotnet test
    
### frontend test
    npm test

## CI/CD Pipeline 🚀

The repository includes a **.github/workflows/backend.yml** and **.github/workflows/react-frontend.yml** files that configures a GitHub Actions workflow to:
1. Run backend and frontend tests
2. Build both projects
3. Create deployment artifacts

## API Endpoints 🚀


🔎 **GET /countries** - Get all countries
🔎 **GET /countries/{name}** - Get details for a specific country 



## Web Application 🚀


![image](https://github.com/user-attachments/assets/bb5b3d75-0bbf-4a45-850e-cbeb76323ffa)
![image](https://github.com/user-attachments/assets/f128cb21-b3eb-41d3-964a-24b2c4236c4f)
![image](https://github.com/user-attachments/assets/5dbbfb5d-cfd1-4d12-a9f5-1cb9aa8817d8)

