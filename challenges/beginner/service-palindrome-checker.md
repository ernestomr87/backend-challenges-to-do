# Backend Challenge - Palindrome Checker API

## Introduction

The "Palindrome Checker API" challenge is designed to build a REST API that determines whether a given string is a palindrome.

### Objectives

- Set up a web server capable of handling API requests.
- Implement an endpoint (`/check`) for checking palindromes.
- Understand HTTP methods (POST for sending data) and status codes.

### Instructions

1. **Objective**: Develop a REST API that checks whether a given string is a palindrome.

2. **Environment Setup**: Choose your preferred programming language (e.g., JavaScript, Python, Java, C#) and set up the necessary environment.

3. **Implementation Details**: 
   - Define an endpoint (`/check`) that accepts a string via HTTP POST requests.
   - Implement logic to determine if the input string is a palindrome.
   - Return a response indicating whether the string is a palindrome (true/false) as JSON.

4. **Testing**: Test your API using a HTTP client (e.g., Postman, curl).
   - Send POST requests to the `/check` endpoint with different strings.
   - Verify that the response correctly identifies whether each string is a palindrome and that status codes are appropriate (e.g., 200 OK).

### Possible Improvements

- **Case Insensitivity**: Make the palindrome check case-insensitive (e.g., "Racecar" should be considered a palindrome).
- **Whitespace Handling**: Ignore whitespace characters during palindrome check.
- **Edge Cases**: Handle edge cases such as empty strings or single-character strings.
- **Performance**: Optimize the palindrome checking algorithm for efficiency, especially for longer strings.

## Conclusion

By completing this challenge, you will gain practical experience in developing a Palindrome Checker API and learn essential practices for backend development. Explore additional improvements and challenges to further enhance your skills.

Happy coding!
