export function formatDate(dateString) {
  return new Date(dateString).toLocaleDateString('en-US', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

function parseDateString(dateStr) {
  const [year, month, day] = dateStr.split('-').map(Number)
  return new Date(year, month - 1, day)
}

// Returns the city's current local date (YYYY-MM-DD) extracted from the
// API's current.time string, which is already in the city's local timezone.
function cityToday(weather) {
  return weather.current?.time?.slice(0, 10) ?? ''
}

export function getDaysFromWeather(weather) {
  if (!weather.daily?.time) return []
  const today = cityToday(weather)
  return weather.daily.time.map((date) => ({
    date,
    label: date === today
      ? 'Today'
      : parseDateString(date).toLocaleDateString('en-US', { weekday: 'long' }),
  }))
}

export function getDailyForecast(weather) {
  if (!weather.daily?.time) return []
  const today = cityToday(weather)

  return weather.daily.time
    .map((day, index) => ({
      date: day,
      label: parseDateString(day).toLocaleDateString('en-US', { weekday: 'short' }),
      maxTemp: weather.daily.temperature_2m_max[index],
      minTemp: weather.daily.temperature_2m_min[index],
      weatherCode: weather.daily.weather_code[index],
    }))
    .filter(day => day.date >= today)
    .slice(0, 7)
}

export function getHourlyForecast(weather, selectedDate) {
  // Use the city's current time string directly to avoid browser-timezone issues.
  // Open-Meteo returns all timestamps as naive local strings (no offset),
  // so slicing the string is safer than constructing a Date object.
  const currentTime = weather.current?.time ?? ''
  const today = currentTime.slice(0, 10)
  const currentHour = parseInt(currentTime.slice(11, 13), 10) || 0

  return weather.hourly.time
    .map((time, index) => ({
      time: new Date(time).toLocaleTimeString('en-US', { hour: 'numeric' }),
      temperature: weather.hourly.temperature_2m[index],
      weatherCode: weather.hourly.weather_code[index],
      isDay: weather.hourly.is_day?.[index] ?? 1,
      fullDate: time,
    }))
    .filter(hour => {
      const dateStr = hour.fullDate.slice(0, 10)
      if (dateStr !== selectedDate) return false
      if (selectedDate === today) {
        return parseInt(hour.fullDate.slice(11, 13), 10) >= currentHour
      }
      return true
    })
}
