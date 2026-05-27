export function formatDate(dateString) {
  return new Date(dateString).toLocaleDateString('en-US', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

function toDateString(d) {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`
}

export function getNext7Days() {
  const today = new Date()
  return Array.from({ length: 7 }, (_, i) => {
    const d = new Date(today)
    d.setDate(today.getDate() + i)
    return {
      date: toDateString(d),
      label: i === 0 ? 'Today' : d.toLocaleDateString('en-US', { weekday: 'long' }),
    }
  })
}

export function getHourlyForecast(weather, selectedDate) {
  const now = new Date()
  const todayDate = toDateString(now)

  return weather.hourly.time
    .map((time, index) => ({
      time: new Date(time).toLocaleTimeString('en-US', { hour: 'numeric' }),
      temperature: weather.hourly.temperature_2m[index],
      weatherCode: weather.hourly.weather_code[index],
      fullDate: time,
    }))
    .filter(hour => {
      const hourDate = new Date(hour.fullDate)
      const dateStr = toDateString(hourDate)
      if (dateStr !== selectedDate) return false
      if (selectedDate === todayDate) {
        return hourDate.getHours() >= now.getHours()
      }
      return true
    })
}