import { motion } from 'framer-motion';

export default function ForecastCard({ forecast, isToday = false }) {
  // Get the current date for today
  const today = new Date();
  const todayDate = today.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" });

  // Parse the date from the forecast data (dt_txt) for future forecasts
  const date = new Date(forecast.dt_txt);
  const day = date.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" });

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.1 }}
      className="min-w-[150px] bg-white text-gray-900 dark:bg-gray-800 dark:text-white p-4 rounded shadow text-center"
    >
      {/* Display Today's Date if isToday is true, otherwise show the forecast's date */}
      <h3 className="font-semibold">{isToday ? `📍 Kolkata 📅 ${todayDate}` : `📅 ${day}`}</h3>
      <img
        src={`https://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`}
        alt="forecast-icon"
        className="mx-auto w-12 h-12"
      />
      <p className="capitalize">☁️ {forecast.weather[0].description}</p>
      <p>🌡️ {forecast.main.temp}°C</p>
      <p>💧 Humidity: {forecast.main.humidity}%</p>
      <p>💨 Wind Speed: {forecast.wind.speed} km/h</p>
    </motion.div>
  );
}
