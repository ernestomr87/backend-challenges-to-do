# Backend Challenge - Basic Weather API

## Introduction

The "Basic Weather API" challenge is designed to build a RESTful API that retrieves weather information based on user queries.

### Objectives

- Set up a web server capable of handling API requests.
- Implement endpoints for retrieving weather data.
- Integrate with a weather API provider (e.g., OpenWeatherMap, Weatherstack).
- Understand HTTP methods (GET for retrieving data) and status codes.

### Instructions

1. **Objective**: Develop a RESTful API that provides weather information based on user queries (city name, geographical coordinates).

2. **Environment Setup**: Choose your preferred programming language (e.g., JavaScript, Python, Java, C#) and set up the necessary environment.

3. **Implementation Details**: 
   - Define an endpoint (`/weather`) that accepts parameters via HTTP GET requests (e.g., city name, latitude and longitude).
   - Integrate with a weather API provider to fetch current weather data.
   - Parse the response from the weather API provider and return relevant weather information (e.g., temperature, humidity, description) as JSON.

4. **Testing**: Test your API using a HTTP client (e.g., Postman, curl).
   - Send GET requests to the `/weather` endpoint with different query parameters (e.g., city name, coordinates).
   - Verify that the response contains the expected weather data and that status codes are appropriate (e.g., 200 OK).

### Possible Improvements

- **Error Handling**: Implement robust error handling for cases such as invalid queries or API failures.
- **Unit Testing**: Write unit tests to validate the integration with the weather API provider and response parsing.
- **Caching**: Add caching mechanisms to reduce the number of requests to the weather API provider.
- **Enhanced Data**: Extend the API to provide forecasts, historical data, or support for multiple weather providers.

## Conclusion

By completing this challenge, you will gain practical experience in developing a Basic Weather API and learn essential practices for backend development. Explore additional improvements and challenges to further enhance your skills.

Happy coding!
