const weatherDescriptionsNight = {
  0: "Clear night",
  1: "Mainly clear night",
  2: "Partly cloudy",
}

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

const weatherAnimations = {
    0: "animate-spin-slow",
    1: "animate-float",
    2: "animate-float",
    3: "animate-breathe",
    45: "animate-breathe",
    48: "animate-breathe",
    51: "animate-bounce-gentle",
    53: "animate-bounce-gentle",
    55: "animate-bounce-gentle",
    61: "animate-bounce-gentle",
    63: "animate-bounce-gentle",
    65: "animate-bounce-gentle",
    71: "animate-sway",
    73: "animate-sway",
    75: "animate-sway",
    95: "animate-shake",
    96: "animate-shake",
    99: "animate-shake",
}

const weatherIcons = {
  0: "/images/icon-sunny.webp",
  1: "/images/icon-partly-cloudy.webp",
  2: "/images/icon-partly-cloudy.webp",
  3: "/images/icon-overcast.webp",
  45: "/images/icon-fog.webp",
  48: "/images/icon-fog.webp",
  51: "/images/icon-drizzle.webp",
  53: "/images/icon-drizzle.webp",
  55: "/images/icon-drizzle.webp",
  61: "/images/icon-rain.webp",
  63: "/images/icon-rain.webp",
  65: "/images/icon-rain.webp",
  71: "/images/icon-snow.webp",
  73: "/images/icon-snow.webp",
  75: "/images/icon-snow.webp",
  95: "/images/icon-storm.webp",
  96: "/images/icon-storm.webp",
  99: "/images/icon-storm.webp"
};

const weatherIconsNight = {
  0: "/images/icon-moon.svg",
  1: "/images/icon-moon.svg",
};

const WeatherIcon = ({code, isDay = 1, className}) => {
    const isNight = isDay === 0;
    const icon = (isNight && weatherIconsNight[code]) || weatherIcons[code] || "/images/icon-partly-cloudy.webp";
    const alt = (isNight && weatherDescriptionsNight[code]) || weatherDescriptions[code] || "Weather condition";
    const animation = weatherAnimations[code] ?? "";

  return (
      <img
        src={icon}
        alt={alt}
        className={`${className} ${animation}`}
      />
  )
}

export default WeatherIcon
