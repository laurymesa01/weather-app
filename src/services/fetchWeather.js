const API_URL = "https://geocoding-api.open-meteo.com/v1/";

export async function fetchWeather(city) {
  const geoResponse = await fetch(`${API_URL}search?name=${city}&count=1&language=en&format=json`);
  const geoData = await geoResponse.json();

  if (!geoData.results) {
    throw new Error("City not found");
  }

  const { latitude, longitude, name, country } = geoData.results[0];

  const current = [
    "temperature_2m",
    "relative_humidity_2m",
    "apparent_temperature",
    "wind_speed_10m",
    "precipitation",
    "weather_code",
  ];

  const daily = [
    "weather_code",
    "temperature_2m_max",
    "temperature_2m_min"
  ];

  const hourly = [
    "weather_code",
    "temperature_2m"
  ];

  const params = new URLSearchParams({
    latitude,
    longitude,
    current: current.join(","),
    daily: daily.join(","),
    hourly: hourly.join(","),
    timezone: 'auto'
  });


  const weatherResponse = await fetch(`https://api.open-meteo.com/v1/forecast?${params}`);

  const weatherData = await weatherResponse.json();

  return {
    city: name,
    country,
    current: weatherData.current,
    currentUnits: weatherData.current_units,
    daily: weatherData.daily,
    hourly: weatherData.hourly,
  };
}