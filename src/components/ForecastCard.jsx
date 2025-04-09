import { motion } from 'framer-motion';
export default function ForecastCard({ forecast }) {  
  const date = new Date(forecast.dt_txt);
  const forecastDate = date.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" });

  const weatherIcon = `https://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.1 }}
      className="min-w-[150px] bg-white text-gray-900 dark:bg-gray-800 dark:text-white p-4 rounded shadow text-center"
    >

      <h3 className="font-semibold">{forecastDate}</h3>
      <img
        src={weatherIcon}
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
