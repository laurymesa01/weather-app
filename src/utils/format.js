export function formatDate(dateString) {
  return new Date(dateString).toLocaleDateString('en-US', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

export function getHourlyForecast(weather, selectedDay) {
  const now = new Date()
  const today = now.toLocaleDateString('en-US', { weekday: 'long' })
  const startOfCurrentHour = new Date(now.getFullYear(), now.getMonth(), now.getDate(), now.getHours())

  return weather.hourly.time
    .map((time, index) => ({
      time: new Date(time).toLocaleTimeString('en-US', { hour: 'numeric' }),
      temperature: weather.hourly.temperature_2m[index],
      weatherCode: weather.hourly.weather_code[index],
      fullDate: time,
    }))
    .filter(hour => {
      const hourDate = new Date(hour.fullDate)
      const dayName = hourDate.toLocaleDateString('en-US', { weekday: 'long' })
      if (dayName !== selectedDay) return false
      if (selectedDay === today) return hourDate >= startOfCurrentHour
      
      return true
    })
}