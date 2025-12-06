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
| **1. Core Functionality & Usability**    | **10/10**   | Live app works reliably; user can search any city, see results instantly, retry without reload. Handles invalid input with clear messages. |
| **2. API Integration & Data Handling**   | **8/8**     | Correct endpoint + API key use, clean Fetch request, relevant fields extracted (temp, humidity, wind, icon). Solid error handling and no unnecessary calls. |
| **3. Front-End Layout & Interaction**    | **5/5**     | Clear layout with separated search/results, dynamic updates, loading indicator, responsive design, consistent visuals. |
| **4. Code Quality & Architecture**       | **5/5**     | Organized files, meaningful naming, small focused functions, defensive checks, readable flow.            |
| **5. Documentation**                     | **2/2**     | README includes live link, setup info, API details, and reflection on learning + limitations.            |
| **6. Demo Video & Git Portfolio**        | **5/5**     | Video shows live app, flows, code overview, clear timestamps; repo is clean, public, and well-structured. |

**Total: 35/35**
