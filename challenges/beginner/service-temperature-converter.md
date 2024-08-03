# Backend Challenge - Temperature Converter API

## Introduction

The "Temperature Converter API" challenge is designed to build a REST API that converts temperatures between different units (Celsius, Fahrenheit, Kelvin).

### Objectives

- Set up a web server capable of handling API requests.
- Implement endpoints for converting temperatures.
- Support conversions between Celsius, Fahrenheit, and Kelvin.
- Understand HTTP methods (GET for retrieving data) and status codes.

### Instructions

1. **Objective**: Develop a REST API that converts temperatures between Celsius, Fahrenheit, and Kelvin.

2. **Environment Setup**: Choose your preferred programming language (e.g., JavaScript, Python, Java, C#) and set up the necessary environment.

3. **Implementation Details**: 
   - Define endpoints (`/convert`) for temperature conversion:
     - `GET /convert?from={unit}&to={unit}&value={temperature}`: Convert a temperature value from one unit to another.
   - Implement logic to handle conversions between Celsius (°C), Fahrenheit (°F), and Kelvin (K).
   - Return the converted temperature as JSON in the response body.

4. **Testing**: Test your API using a HTTP client (e.g., Postman, curl).
   - Send GET requests to the `/convert` endpoint with different parameter values (e.g., `from`, `to`, `value`).
   - Verify that the response contains the correctly converted temperature and that status codes are appropriate (e.g., 200 OK, 400 Bad Request).

### Possible Improvements

- **Additional Units**: Extend the API to support more temperature units (e.g., Rankine, Celsius to Fahrenheit, etc.).
- **Decimal Precision**: Improve precision handling for temperature conversions.
- **Error Handling**: Implement validation for input parameters and error messages for invalid requests.
- **Unit Tests**: Write unit tests to validate the correctness of temperature conversions.

## Conclusion

By completing this challenge, you will gain practical experience in developing a basic Temperature Converter API and learn essential practices for backend development. Explore additional improvements and challenges to further enhance your skills.

Happy coding!
