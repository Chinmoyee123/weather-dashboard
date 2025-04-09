import { motion } from 'framer-motion';
export default function WeatherCard({ data }) {
  const { name, main, weather, wind } = data;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white text-gray-900 dark:bg-gray-800 dark:text-white p-6 rounded-lg shadow-md text-center max-w-md mx-auto mt-6"
    >
      <h2 className="text-2xl font-bold">📍 {name}</h2>
      {weather && weather[0] && (
        <img
          src={`https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
          alt="weather-icon"
          className="mx-auto w-20 h-20"
        />
      )}
      <p className="text-xl capitalize">☁️ {weather[0].description}</p>
      <p className="text-lg">🌡️ Temperature: {main.temp} °C</p>
      <p className="text-lg">💧 Humidity: {main.humidity}%</p>
      <p className="text-lg">💨 Wind Speed: {wind.speed} km/h</p>
    </motion.div>
  );
}
