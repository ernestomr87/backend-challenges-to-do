# Backend Challenge - Random Number Generator API

## Introduction

The "Random Number Generator API" challenge is designed to build a REST API that generates random numbers based on user-specified parameters.

### Objectives

- Set up a web server capable of handling API requests.
- Implement an endpoint (`/random`) that generates random numbers.
- Allow customization of the generated numbers (e.g., range, quantity).
- Understand HTTP methods (GET for retrieving data) and status codes.

### Instructions

1. **Objective**: Develop a REST API that generates random numbers based on user input.

2. **Environment Setup**: Choose your preferred programming language (e.g., JavaScript, Python, Java, C#) and set up the necessary environment.

3. **Implementation Details**: 
   - Create an endpoint (`/random`) that accepts parameters via HTTP GET requests.
   - Parameters could include `min` and `max` for range, and `quantity` for the number of random numbers to generate.
   - Implement logic to generate random numbers within the specified range and quantity.
   - Return the generated numbers as JSON in the response body.

4. **Testing**: Test your API using a HTTP client (e.g., Postman, curl).
   - Send GET requests to the `/random` endpoint with different parameter values (e.g., `min`, `max`, `quantity`).
   - Verify that the response contains the expected number of random numbers within the specified range.

### Possible Improvements

- **Additional Parameters**: Add support for additional parameters like seed for reproducibility.
- **Error Handling**: Implement error handling for invalid input parameters (e.g., negative range, non-numeric values).
- **Security**: Consider security implications, especially if the API is exposed to the public internet.
- **Performance**: Optimize the random number generation algorithm for performance, especially with large quantities.

## Conclusion

By completing this challenge, you will gain practical experience in developing a REST API that generates random numbers and learn essential practices for backend development. Explore additional improvements and challenges to further enhance your skills.

Happy coding!
