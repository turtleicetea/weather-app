// === CONFIG: OpenWeather API ===
const API_KEY = "c63da4cd3d6b04a8462a8b8073678d01"; // <-- replace this with your real key
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

// === DOM ELEMENTS ===
const form = document.getElementById("weatherForm");
const cityInput = document.getElementById("cityInput");
const resultsEl = document.getElementById("results");
const errorEl = document.getElementById("error");
const loadingEl = document.getElementById("loading");
const searchBtn = document.getElementById("searchBtn");

// When the form is submitted, run the weather search
form.addEventListener("submit", (event) => {
  event.preventDefault();
  fetchWeather();
});

// Main function: ask OpenWeather for data for the given city
function fetchWeather() {
  clearError();
  const city = cityInput.value.trim();

  if (!city) {
    showError("Please enter a city name.");
    return;
  }

  // Build the API request URL
  const url = `${BASE_URL}?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`;

  showLoading(true);
  searchBtn.disabled = true;

  fetch(url)
    .then((response) => {
      // Check HTTP status codes and show a message
      if (!response.ok) {
        if (response.status === 404) {
          throw new Error("City not found. Please check the spelling.");
        } else {
          throw new Error("Network error. Please try again.");
        }
      }
      return response.json();
    })
    .then((data) => {
      // If API call worked, update the UI
      renderResults(data);
    })
    .catch((err) => {
      // Handle errors: invalid city, network error, etc.
      showError(err.message);
      resultsEl.innerHTML = "";
    })
    .finally(() => {
      showLoading(false);
      searchBtn.disabled = false;
    });
}

// Render the weather card into the page
function renderResults(data) {
  if (!data || !data.main || !data.weather || !data.weather[0]) {
    showError("Unexpected data from weather service.");
    resultsEl.innerHTML = "";
    return;
  }

  const cityName = data.name;
  const country = data.sys?.country || "";
  const temp = Math.round(data.main.temp);
  const feelsLike = Math.round(data.main.feels_like);
  const desc = data.weather[0].description;
  const humidity = data.main.humidity;
  const wind = data.wind?.speed;
  const icon = data.weather[0].icon;
  const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;

  resultsEl.innerHTML = `
    <article class="weather-card">
      <div>
        <div class="weather-city">${cityName}${country ? ", " + country : ""}</div>
        <div class="weather-temp">${temp}°C</div>
        <div class="weather-desc">${desc}</div>
        <div class="weather-extra">
          Feels like: ${feelsLike}°C<br/>
          Humidity: ${humidity}%<br/>
          Wind: ${wind != null ? wind + " m/s" : "N/A"}
        </div>
      </div>
      <div>
        <img src="${iconUrl}" alt="${desc}" />
      </div>
    </article>
  `;
}

// Helper functions for UI updates
function showError(message) {
  errorEl.textContent = message;
}

function clearError() {
  errorEl.textContent = "";
}

function showLoading(isLoading) {
  loadingEl.style.display = isLoading ? "block" : "none";
}