# Backend Challenge - IP Address Tracker Service

## Introduction

The "IP Address Tracker Service" challenge is designed to create a RESTful API that tracks and geolocates IP addresses, providing information about their geographical location.

### Objectives

- Set up a web server capable of handling API requests.
- Implement endpoints to retrieve geolocation data based on IP addresses.
- Integrate with an external IP geolocation service or use a local dataset.
- Understand HTTP methods (GET) and status codes.

### Instructions

1. **Objective**: Develop a RESTful API that returns geolocation information (e.g., city, region, country) based on a given IP address.

2. **Environment Setup**: Choose your preferred programming language (e.g., JavaScript, Python, Java, C#) and set up the necessary environment.

3. **Implementation Details**:
   - Define endpoints for handling IP address lookups:
     - `GET /geolocate?ip={ip_address}`: Retrieve geolocation information for the provided IP address.
       - Example: `GET /geolocate?ip=8.8.8.8` should return `{"ip": "8.8.8.8", "city": "Mountain View", "region": "California", "country": "USA"}`.
   - Implement logic to interact with geolocation data:
     - Use an external API (e.g., IPinfo, IPstack, MaxMind) to fetch geolocation details, or use a local dataset if an external API is not available.
     - Return geolocation details as JSON in the response, including city, region/state, country, latitude, and longitude.
   - Ensure proper error handling for invalid or non-existent IP addresses.

4. **Testing**: Test your API using an HTTP client (e.g., Postman, curl).
   - Send requests to the `/geolocate` endpoint with various valid and invalid IP addresses.
   - Verify that the responses contain the expected geolocation data and that status codes are appropriate (e.g., 200 OK, 400 Bad Request, 404 Not Found).

### Possible Improvements

- **Bulk IP Lookup**: Add an endpoint that allows users to look up geolocation data for multiple IP addresses in one request.
- **Caching**: Implement caching for frequently looked-up IP addresses to reduce external API calls and improve performance.
- **IP Address Validation**: Ensure the provided IP addresses are valid and within the correct format (IPv4 or IPv6).
- **Rate Limiting**: Implement rate limiting to prevent abuse of the service, especially if using a free tier of an external API.
- **Historical Data**: Provide historical geolocation data for IP addresses if available.

## Conclusion

By completing this challenge, you will gain practical experience in developing an IP address tracking and geolocation service, and learn essential practices for backend development. Explore additional improvements and challenges to further enhance your skills.

Happy coding!
