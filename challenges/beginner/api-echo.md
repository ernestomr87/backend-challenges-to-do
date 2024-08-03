# Backend Challenge - Echo API

## Introduction

The "Echo API" challenge is designed to build a simple REST API that echoes back the data sent in a POST request.

### Objectives

- Set up a web server capable of handling API requests.
- Create an endpoint (`/echo`) that accepts data via HTTP POST requests and returns the same data.
- Understand HTTP methods (POST for sending data) and status codes.

### Instructions

1. **Objective**: Develop a REST API that echoes back data sent in a POST request.

2. **Environment Setup**: Choose your preferred programming language (e.g., JavaScript, Python, Java, C#) and set up the necessary environment.

3. **Implementation Details**: 
   - Set up a web server with an endpoint (`/echo`) that accepts POST requests.
   - Retrieve the data sent in the request body.
   - Return the received data as JSON or plain text in the response body.

4. **Testing**: Test your API using a HTTP client (e.g., Postman, curl).
   - Send POST requests to the `/echo` endpoint with different data payloads.
   - Verify that the response contains the same data as sent in the request.

### Possible Improvements

- **Response Format**: Add options to return the echoed data in different formats (e.g., JSON, XML).
- **Validation**: Implement validation to ensure the POST request body is not empty.
- **Error Handling**: Handle cases where the API cannot echo back the data (e.g., server error).
- **Logging**: Introduce logging to track incoming requests and responses for debugging purposes.

## Conclusion

By completing this challenge, you will gain practical experience in developing a basic REST API and learn essential practices for backend development. Explore additional improvements and challenges to further enhance your skills.

Happy coding!
