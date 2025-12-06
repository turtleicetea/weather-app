# Weather Finder

Live app: https://turtleicetea.github.io/weather-app/

## Description

A weather web app that uses the OpenWeatherMap API.  
You can type a city name and get the current temperature, conditions,  
humidity, and wind speed. The results update on the page without reloading.

## Features

- Search weather by city
- Loading indicator while data is being fetched
- Error messages for invalid cities and network issues
- Clean layout using HTML and CSS
- Responsive on smaller screens
- Uses the Fetch API to get live weather data

## Technologies Used

- HTML  
- CSS  
- JavaScript  
- Fetch API (AJAX)  
- OpenWeatherMap API  

## How to Run Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/turtleicetea/weather-app.git
2. Open index.html in a browser
   OR use the Live Server extension in VS Code.

## What I Learned

- How to call a live REST API using fetch()
- How to work with JSON data
- How to update the page dynamically with JavaScript
- How to show loading and error states for a smoother user experience
- Basic responsive layout and simple UI design

## Known Limitations
- The API key is visible in the front-end code (in real projects it should be hidden on a server).