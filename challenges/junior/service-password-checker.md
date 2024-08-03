# Backend Challenge - Password Checker Service

## Introduction

The "Password Checker Service" challenge is designed to create a RESTful API that evaluates the strength and security of passwords, providing feedback on how to improve them.

### Objectives

- Set up a web server capable of handling API requests.
- Implement endpoints to evaluate password strength.
- Provide feedback on password complexity and suggest improvements.
- Understand HTTP methods (POST) and status codes.

### Instructions

1. **Objective**: Develop a RESTful API that checks the strength and security of a given password and provides feedback on how to improve it.

2. **Environment Setup**: Choose your preferred programming language (e.g., JavaScript, Python, Java, C#) and set up the necessary environment.

3. **Implementation Details**:
   - Define endpoints for handling password checks:
     - `POST /check-password`: Evaluate the strength of the provided password.
       - Example request body: `{"password": "P@ssw0rd123!"}`
       - Example response: 
         ```json
         {
           "password": "P@ssw0rd123!",
           "strength": "Medium",
           "suggestions": [
             "Add more characters",
             "Include special symbols",
             "Avoid common patterns"
           ]
         }
         ```
   - Implement logic to assess password strength:
     - Evaluate password length, use of upper and lower case letters, numbers, special characters, and common patterns (e.g., "1234", "password").
     - Optionally, integrate with a breached password database (e.g., Have I Been Pwned) to check if the password has been compromised.
     - Return a JSON response indicating the password's strength (e.g., "Weak", "Medium", "Strong") and suggestions for improvement.
   - Ensure proper error handling for empty or invalid inputs.

4. **Testing**: Test your API using an HTTP client (e.g., Postman, curl).
   - Send requests to the `/check-password` endpoint with various password examples.
   - Verify that the responses contain appropriate strength assessments and suggestions, and that status codes are correct (e.g., 200 OK, 400 Bad Request).

### Possible Improvements

- **Password History Check**: Implement functionality to ensure the password hasn't been used before by the same user (useful in systems where passwords are rotated).
- **Password Complexity Requirements**: Allow customizable complexity requirements (e.g., minimum length, required characters) through API configuration.
- **Real-Time Feedback**: Provide real-time feedback as users type (useful in a UI context, with frontend integration).
- **Integration with Authentication**: Build this service into an authentication flow, enforcing password strength rules at the time of user registration or password change.
- **Multilingual Support**: Provide feedback and suggestions in multiple languages based on user preference.

## Conclusion

By completing this challenge, you will gain practical experience in developing a password checker service and learn essential practices for enhancing security in backend development. Explore additional improvements and challenges to further enhance your skills.

Happy coding!
