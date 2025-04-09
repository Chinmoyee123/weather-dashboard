import { useState } from 'react';
export default function SearchBar({ onSearch }) {
  const [city, setCity] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim()) {
      onSearch(city);
      setCity("");
    }
  };
  return (
    <form onSubmit={handleSubmit} className="flex justify-center my-6 gap-2">
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city"
        className="px-4 py-2 border rounded-l-md w-64 shadow bg-white text-black dark:bg-gray-800 dark:text-white"
      />
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-r-md shadow"
      >
        🔍 Search
      </button>
    </form>
  );
}

