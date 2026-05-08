const API_URL = "https://geocoding-api.open-meteo.com/v1/";

export async function fetchWeather(city) {
    const geoResponse = await fetch(`${API_URL}search?name=${city}&count=1&language=en&format=json`);
    const geoData = await geoResponse.json();

    if (!geoData.results) {
      throw new Error("City not found");
    }

    return {
        geoData: geoData.results[0]
      };
}