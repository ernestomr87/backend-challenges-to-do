# Backend Challenge - Currency Converter API

## Introduction

The "Currency Converter API" challenge is designed to create a REST API that converts currencies between different countries.

### Objectives

- Set up a web server capable of handling API requests.
- Implement endpoints for converting currencies.
- Integrate with a currency exchange rate provider (or mock exchange rates).
- Understand HTTP methods (GET, POST) and status codes.

### Instructions

1. **Objective**: Develop a REST API that converts currencies from one to another using real-time or fixed exchange rates.

2. **Environment Setup**: Choose your preferred programming language (e.g., JavaScript, Python, Java, C#) and set up the necessary environment.

3. **Implementation Details**:
   - Define endpoints for handling currency conversion:
     - `GET /convert?from={currency_code}&to={currency_code}&amount={value}`: Convert a specific amount from one currency to another.
     - `GET /rates`: Retrieve a list of supported currencies and their current exchange rates.
     - `POST /rates`: (Optional) Update the exchange rates for the currencies (useful if not relying on an external API).
   - Implement logic to interact with currency data (e.g., fetch exchange rates from a third-party API or use a fixed dataset).
   - Return data as JSON in responses, including the converted amount and relevant exchange rate.

4. **Testing**: Test your API using an HTTP client (e.g., Postman, curl).
   - Send requests to each endpoint (`/convert` and `/rates`) with appropriate query parameters.
   - Verify that the responses contain the expected conversion results and that status codes are appropriate (e.g., 200 OK, 400 Bad Request).

### Possible Improvements

- **Authentication**: Add API key authentication to secure the endpoints.
- **Caching**: Implement caching for exchange rates to reduce the number of requests to the third-party provider.
- **Historical Rates**: Allow users to convert currencies based on historical exchange rates.
- **Error Handling**: Enhance error messages and responses for better user experience.
- **Multi-Currency Conversion**: Add the ability to convert a single amount into multiple currencies in one request.

## Conclusion

By completing this challenge, you will gain practical experience in developing a currency converter API and learn essential practices for backend development. Explore additional improvements and challenges to further enhance your skills.

Happy coding!
