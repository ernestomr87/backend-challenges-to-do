# Backend Challenge - Simple Contact Form API

## Introduction

The "Simple Contact Form API" challenge is designed to build a REST API that handles sending messages from a contact form.

### Objectives

- Set up a web server capable of handling API requests.
- Implement endpoints for sending messages from a contact form.
- Store or process incoming messages (e.g., send email notifications).
- Understand HTTP methods (POST for sending data) and status codes.

### Instructions

1. **Objective**: Develop a REST API that receives messages from a contact form and performs actions (e.g., store in database, send email notification).

2. **Environment Setup**: Choose your preferred programming language (e.g., JavaScript, Python, Java, C#) and set up the necessary environment.

3. **Implementation Details**: 
   - Define an endpoint (`/contact`) that accepts message data via HTTP POST requests.
   - Implement logic to process the incoming message (e.g., store in a database, send email).
   - Return a response indicating the status of the message submission (e.g., success or error message) as JSON.

4. **Testing**: Test your API using a HTTP client (e.g., Postman, curl).
   - Send POST requests to the `/contact` endpoint with message data (e.g., name, email, message content).
   - Verify that the response indicates successful submission and that status codes are appropriate (e.g., 200 OK).

### Possible Improvements

- **Validation**: Implement validation for input fields (e.g., email format).
- **Error Handling**: Enhance error messages and responses for invalid submissions.
- **Security**: Consider implementing measures such as CSRF protection or rate limiting.
- **Integration**: Integrate with external services (e.g., email providers) for message delivery.

## Conclusion

By completing this challenge, you will gain practical experience in developing a Simple Contact Form API and learn essential practices for backend development. Explore additional improvements and challenges to further enhance your skills.

Happy coding!
