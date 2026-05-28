const API_URL = "https://geocoding-api.open-meteo.com/v1/";

async function reverseGeocode(latitude, longitude, signal) {
  const response = await fetch(
    `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`,
    { headers: { "Accept-Language": "en" }, signal }
  );
  if (!response.ok) throw new Error('Reverse geocode failed')
  const data = await response.json();
  return {
    name: data.address?.city || data.address?.town || data.address?.village || data.address?.county || "Unknown",
    country: data.address?.country ?? "",
  };
}

export async function fetchWeather(cityOrCoords, units, signal) {
  let latitude, longitude, name, country;

  if (typeof cityOrCoords === 'object' && cityOrCoords.latitude != null) {
    ({ latitude, longitude, name, country } = cityOrCoords);
    if (!name) {
      ({ name, country } = await reverseGeocode(latitude, longitude, signal));
    }
  } else {
    const geoResponse = await fetch(`${API_URL}search?name=${encodeURIComponent(cityOrCoords)}&count=1&language=en&format=json`, { signal });
    if (!geoResponse.ok) throw new Error('Geocoding API error')
    const geoData = await geoResponse.json();
    if (!geoData.results || geoData.results.length === 0) throw new Error("City not found");
    ({ latitude, longitude, name, country } = geoData.results[0]);
  }

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
    "temperature_2m",
    "is_day"
  ];

  const params = new URLSearchParams({
    latitude,
    longitude,
    current: current.join(","),
    daily: daily.join(","),
    hourly: hourly.join(","),
    ...units,
    timezone: 'auto'
  });


  const weatherResponse = await fetch(`https://api.open-meteo.com/v1/forecast?${params}`, { signal });
  if (!weatherResponse.ok) throw new Error('Weather API error')
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

export async function fetchCitysuggestions(query) {
  const response = await fetch(`${API_URL}search?name=${encodeURIComponent(query)}&count=5&language=en&format=json`);
  if (!response.ok) throw new Error('City suggestions API error')
  const data = await response.json();

  if (!data.results) {
    return [];
  }

  return data.results.map(result => ({
    name: result.name,
    country: result.country,
    latitude: result.latitude,
    longitude: result.longitude
  }));
}