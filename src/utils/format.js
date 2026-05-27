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

function parseDateString(dateStr) {
  const [year, month, day] = dateStr.split('-').map(Number)
  return new Date(year, month - 1, day)
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

export function getDailyForecast(weather) {
  if (!weather.daily?.time) return []
  const today = toDateString(new Date())

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