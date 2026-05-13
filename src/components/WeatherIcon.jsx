// eslint-disable-next-line no-unused-vars
import React from 'react'

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

      const icon = weatherIcons[code] || "/icons/cloudy.svg";

  return (
      <img
        src={icon}
        alt="Weather condition"
        className={className}
        />

    
  )
}

export default WeatherIcon