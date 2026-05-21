// eslint-disable-next-line no-unused-vars
import React from 'react'

const weatherDescriptions = {
  0: "Clear sky",
  1: "Mainly clear",
  2: "Partly cloudy",
  3: "Overcast",
  45: "Fog",
  48: "Icy fog",
  51: "Light drizzle",
  53: "Moderate drizzle",
  55: "Dense drizzle",
  61: "Slight rain",
  63: "Moderate rain",
  65: "Heavy rain",
  71: "Slight snow",
  73: "Moderate snow",
  75: "Heavy snow",
  95: "Thunderstorm",
  96: "Thunderstorm with hail",
  99: "Thunderstorm with heavy hail",
}

const WeatherIcon = ({code, className}) => {

    const weatherIcons = {
        0: "/public/images/icon-sunny.webp",
        1: "/public/images/icon-partly-cloudy.webp",
        2: "/public/images/icon-partly-cloudy.webp",
        3: "/public/images/icon-overcast.webp",
        45: "/public/images/icon-fog.webp",
        48: "/public/images/icon-fog.webp",
        51: "/public/images/icon-drizzle.webp",
        53: "/public/images/icon-drizzle.webp",
        55: "/public/images/icon-drizzle.webp",
        61: "/public/images/icon-rain.webp",
        63: "/public/images/icon-rain.webp",
        65: "/public/images/icon-rain.webp",
        71: "/public/images/icon-snow.webp",
        73: "/public/images/icon-snow.webp",
        75: "/public/images/icon-snow.webp",
        95: "/public/images/icon-storm.webp",
        96: "/public/images/icon-storm.webp",
        99: "/public/images/icon-storm.webp"
    };

    const icon = weatherIcons[code] || "/public/images/icon-partly-cloudy.webp";
    const alt = weatherDescriptions[code] || "Weather condition";

  return (
      <img
        src={icon}
        alt={alt}
        className={className}
      />
  )
}

export default WeatherIcon
