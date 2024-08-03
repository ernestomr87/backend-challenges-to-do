# Backend Challenge - Password Generator Service

## Introduction

The "Password Generator Service" challenge is designed to create a RESTful API that generates secure, random passwords based on user-defined criteria.

### Objectives

- Set up a web server capable of handling API requests.
- Implement endpoints to generate passwords with varying complexity.
- Provide options for customizing password length, character types, and complexity.
- Understand HTTP methods (GET) and status codes.

### Instructions

1. **Objective**: Develop a RESTful API that generates secure passwords based on specified criteria.

2. **Environment Setup**: Choose your preferred programming language (e.g., JavaScript, Python, Java, C#) and set up the necessary environment.

3. **Implementation Details**:
   - Define endpoints for handling password generation:
     - `GET /generate-password`: Generate a secure password based on query parameters.
       - Example query parameters:
         - `length={length}`: The desired length of the password (e.g., `length=12`).
         - `include_uppercase={true/false}`: Include uppercase letters (e.g., `include_uppercase=true`).
         - `include_numbers={true/false}`: Include numbers (e.g., `include_numbers=true`).
         - `include_special={true/false}`: Include special characters (e.g., `include_special=true`).
       - Example request: `GET /generate-password?length=16&include_uppercase=true&include_numbers=true&include_special=true`
       - Example response:
         ```json
         {
           "password": "A1b@C2d#E3f$G4h%"
         }
         ```
   - Implement logic to generate the password:
     - Randomly select characters from the specified categories (uppercase, lowercase, numbers, special characters) to construct the password.
     - Ensure that the generated password meets the specified criteria.
     - Return the generated password as a JSON response.
   - Ensure proper error handling for invalid input values (e.g., non-numeric length).

4. **Testing**: Test your API using an HTTP client (e.g., Postman, curl).
   - Send requests to the `/generate-password` endpoint with various combinations of query parameters.
   - Verify that the responses contain passwords that match the specified criteria and that status codes are appropriate (e.g., 200 OK, 400 Bad Request).

### Possible Improvements

- **Passphrase Generation**: Add support for generating passphrases (e.g., combining random words) instead of just character-based passwords.
- **Password Strength Indicator**: Include an option to return a strength assessment of the generated password along with the password itself.
- **Batch Generation**: Implement functionality to generate multiple passwords in a single request.
- **Avoid Ambiguous Characters**: Add an option to exclude characters that can be easily confused (e.g., `O`, `0`, `l`, `1`).
- **Multi-Language Support**: Provide options to generate passwords using character sets from different languages (e.g., Cyrillic, Chinese).

## Conclusion

By completing this challenge, you will gain practical experience in developing a password generator service and learn essential practices for enhancing security in backend development. Explore additional improvements and challenges to further enhance your skills.

Happy coding!
