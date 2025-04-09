import { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';
import ForecastCard from './components/ForecastCard';
function App() {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [history, setHistory] = useState([]);
  const [darkMode, setDarkMode] = useState(false);
  const API_KEY = import.meta.env.VITE_OPENWEATHER_KEY;
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);
  const fetchWeather = async (city) => {
    if (!city) return;
    setLoading(true);
    setError("");
    city = city.trim();

    try {
      const res1 = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
      const data1 = await res1.json();
      if (data1.cod !== 200) throw new Error(data1.message);
      setWeather(data1);

      const res2 = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`);
      const data2 = await res2.json();
      const filtered = data2.list.filter(item => item.dt_txt.includes("12:00:00"));
      setForecast(filtered);

      setHistory((prev) => {
        const updated = [city, ...prev.filter(c => c.toLowerCase() !== city.toLowerCase())];
        return updated.slice(0, 5);
      });
    } catch (err) {
      setError(err.message);
      setWeather(null);
      setForecast([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white transition-colors duration-300">
      {/* Logo */}
      <img
        src="/logo_white_cropped.png"
        alt="OpenWeather Logo"
        className="mx-auto mt-4 w-40"
      />
      <button
        onClick={() => setDarkMode(prevMode => !prevMode)}
        className="absolute top-4 right-4 px-3 py-1 rounded shadow bg-gray-800 text-white dark:bg-white dark:text-gray-900"
      >
        {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>

      <h1 className="text-center text-3xl font-bold pt-6">🌤️ Weather Dashboard</h1>
      <SearchBar onSearch={fetchWeather} />
      {history.length > 0 && (
        <div className="text-center mt-4">
          <h3 className="font-semibold mb-2">Recent Searches:</h3>
          <div className="flex justify-center gap-2 flex-wrap">
            {history.map((city, idx) => (
              <button
                key={idx}
                onClick={() => fetchWeather(city)}
                className="px-3 py-1 rounded transition-colors bg-gray-200 hover:bg-gray-300 text-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white"
              >
                {city}
              </button>
            ))}
          </div>
        </div>
      )}
      {loading && (
        <div className="flex justify-center my-4">
          <div className="w-10 h-10 border-4 border-dashed rounded-full animate-spin border-blue-600"></div>
        </div>
      )}
      {error && <p className="text-center text-red-500 dark:text-red-400">{error}</p>}

      {weather && <WeatherCard data={weather} darkMode={darkMode} />}

      {weather && (
        <div className="text-center mt-2">
          <button
            onClick={() => fetchWeather(weather.name)}
            className="px-4 py-1 rounded text-white bg-green-500 hover:bg-green-600 dark:bg-green-600 dark:hover:bg-green-700"
          >
            🔄 Refresh
          </button>
        </div>
      )}

      {forecast.length > 0 && (
        <div className="mt-6 px-4">
          <h2 className="text-xl font-bold mb-2 text-center">5-Day Forecast</h2>
          <div className="flex gap-4 overflow-x-auto pb-4">
            {forecast.map((f, idx) => (
              <ForecastCard key={idx} forecast={f} darkMode={darkMode} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;