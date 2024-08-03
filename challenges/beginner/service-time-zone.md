# Backend Challenge - Time Zone Service

## Introduction

The "Time Zone Service" challenge is designed to create a RESTful API that retrieves time zone information based on geographical data or location identifiers.

### Objectives

- Set up a web server capable of handling API requests.
- Implement endpoints to retrieve time zone information based on location data (e.g., coordinates, city names, or IP addresses).
- Integrate with an external time zone API or use a local dataset.
- Understand HTTP methods (GET) and status codes.

### Instructions

1. **Objective**: Develop a RESTful API that returns time zone information (e.g., time zone name, UTC offset, current local time) based on a given location.

2. **Environment Setup**: Choose your preferred programming language (e.g., JavaScript, Python, Java, C#) and set up the necessary environment.

3. **Implementation Details**:
   - Define endpoints for handling time zone lookups:
     - `GET /timezone?location={location}`: Retrieve time zone information for the provided location identifier.
       - Example: `GET /timezone?location=New York` should return `{"location": "New York", "timezone": "America/New_York", "utc_offset": "-04:00", "current_time": "2024-08-03T15:00:00"}`.
     - `GET /timezone?lat={latitude}&lon={longitude}`: Retrieve time zone information based on geographic coordinates.
       - Example: `GET /timezone?lat=40.7128&lon=-74.0060` should return similar information as the location-based query above.
   - Implement logic to interact with time zone data:
     - Use an external API (e.g., Google Time Zone API, TimeZoneDB) to fetch time zone details, or use a local dataset if an external API is not available.
     - Return time zone details as JSON in the response, including time zone name, UTC offset, and current local time.
   - Ensure proper error handling for invalid or non-existent locations.

4. **Testing**: Test your API using an HTTP client (e.g., Postman, curl).
   - Send requests to the `/timezone` endpoint with various valid and invalid location data (city names, coordinates, IP addresses).
   - Verify that the responses contain the expected time zone data and that status codes are appropriate (e.g., 200 OK, 400 Bad Request, 404 Not Found).

### Possible Improvements

- **Time Zone by IP**: Add support to retrieve time zone information based on an IP address (e.g., `GET /timezone?ip={ip_address}`).
- **Time Conversion**: Implement an endpoint that allows users to convert a specific time between time zones (e.g., `GET /convert?from=UTC&to=America/New_York&time=2024-08-03T12:00:00Z`).
- **Caching**: Implement caching for frequently requested locations to reduce external API calls and improve performance.
- **Time Zone Abbreviations**: Provide additional information such as time zone abbreviations (e.g., EST, PST).
- **Rate Limiting**: Implement rate limiting to prevent abuse of the service, especially if using a free tier of an external API.
- **Daylight Saving Time**: Account for daylight saving time changes in the time zone data returned.

## Conclusion

By completing this challenge, you will gain practical experience in developing a time zone information service and learn essential practices for backend development. Explore additional improvements and challenges to further enhance your skills.

Happy coding!
