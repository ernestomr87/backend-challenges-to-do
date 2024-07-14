# Backend Challenge - Weather Notification API

## Introduction

The "Weather Notification API" challenge is designed to build a RESTful API that fetches weather data and sends notifications based on specific weather conditions.

### Objectives

- Set up a web server capable of handling API requests.
- Implement endpoints for fetching weather data and sending notifications.
- Define notification criteria based on weather conditions (e.g., temperature, precipitation).
- Understand HTTP methods (GET, POST) and status codes.

### Instructions

1. **Objective**: Develop a RESTful API that provides functionality for weather notifications.

2. **Environment Setup**: Choose your preferred programming language (e.g., JavaScript, Python, Java, C#) and set up the necessary environment.

3. **Implementation Details**: 
   - Define endpoints:
     - `GET /weather`: Fetch current weather data for a specified location (e.g., city, coordinates).
     - `POST /set-notification`: Set up a notification rule based on weather conditions (e.g., send notification if temperature exceeds a threshold, notify if precipitation reaches a certain level).
     - `DELETE /cancel-notification/{notificationId}`: Cancel an existing weather notification rule.
   - Implement logic to interact with a weather data provider API (e.g., OpenWeatherMap, WeatherAPI) to fetch real-time weather information.
   - Allow customization of notification rules, including setting thresholds for weather conditions and specifying notification channels (e.g., email, SMS).

4. **Testing**: Test your API using a HTTP client (e.g., Postman, curl).
   - Send requests to the `/weather` endpoint with appropriate parameters (e.g., city name, coordinates) to fetch weather data.
   - Set up notification rules using the `/set-notification` endpoint and verify that notifications are triggered correctly based on weather conditions.

### Possible Improvements

- **Advanced Notifications**: Implement support for advanced notification criteria (e.g., wind speed, humidity).
- **Integration**: Integrate with messaging services (e.g., Twilio, SendGrid) for sending notifications via different channels.
- **User Preferences**: Allow users to specify their preferred units (e.g., Celsius, Fahrenheit) and notification frequency.
- **Alert History**: Maintain a history of triggered alerts and notifications for audit purposes.
- **Geolocation Support**: Enhance the API to support geolocation-based weather fetching and notifications.

## Conclusion

By completing this challenge, you will gain practical experience in developing a Weather Notification API and learn essential practices for backend development related to weather data integration and notification systems. Explore additional improvements and challenges to further enhance your skills.

Happy coding!
