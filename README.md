# Weather Finder

Live app: https://turtleicetea.github.io/weather-app/

## Description

A weather web app that uses the OpenWeatherMap API.  
You can type a city name and get the current temperature, other conditions,  
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

- How to use a live REST API using fetch()
- How to update pages dynamically with JavaScript
- How to display loading and error messages
- Building a responsive layout with clean design

## Limitations
- The API key is visible in the front-end code. In real projects it should be hidden.

## Demo Video

Demo video is attached in the Canvas return box.

**Timestamps**  
00:00 – Intro  
00:05 – Project overview  
00:39 – Demo: Fetching live weather data  
01:00 – Demo: Error handling  
01:06 – Demo: Adjusting for narrower screens  
01:23 – Main code walkthrough  
02:29 – Conclusion

## Self-Assessment

| Category                               | Score       | Notes                                                                                                   |
|------------------------------------------|-------------|-----------------------------------------------------------------------------------------------------------|
| **1. Core Functionality & Usability**    | **10/10**   | Live app works, user can search any city, display results, retry without reloading. App responds to invalid input and network issues with clear error messages. |
| **2. API Integration & Data Handling**   | **8/8**     | Correct endpoint and use of API key, Fetch request, relevant fields extracted, clear error handling. |
| **3. Front-End Layout & Interaction**    | **5/5**     | Clear layout with separated search and results, loading indicator, dynamic updates, responsive on narrower window. |
| **4. Code Quality & Architecture**       | **5/5**     | Organized files, meaningful naming, small functions, readable code.            |
| **5. Documentation**                     | **2/2**     | README includes live link, how to set up, used API details, learning reflection and limitations.            |
| **6. Demo Video & Git Portfolio**        | **5/5**     | Video demonstrates app and flows, main code overview. Timestamps in README, repo is well-organized and public. |

**Total: 35/35**

- To improve the app I could place more effort into styling and add a multi-day forecast.
