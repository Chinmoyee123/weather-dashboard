# 🌤️ Weather Dashboard

A clean and responsive weather dashboard built with **React.js (Vite)** and **Tailwind CSS**, fetching real-time weather data using the **OpenWeatherMap API**.

![Weather Dashboard Screenshot](./screenshot.png)

---

## 🚀 Live Demo

🌐 **Live App**: [https://weather-dashboard-alpha-tan.vercel.app](https://weather-dashboard-alpha-tan.vercel.app)

---

## 🛠️ Tech Stack

- **Framework**: [React.js](https://reactjs.org/) (via [Vite](https://vitejs.dev/))
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Deployment**: [Vercel](https://vercel.com/)
- **API**: [OpenWeatherMap](https://openweathermap.org/)

---

## 📦 Features

- 🔍 Search for current weather by **city name**
- 🌡️ Displays temperature, humidity, wind, and condition icon
- 🕐 Shows 5-day forecast (midday snapshots)
- 💾 Recent search history (last 5 cities)
- 🌙 Light/Dark theme toggle
- 🔄 Refresh weather button
- ⏳ Loader spinner during fetch
- ❌ User-friendly error handling
- 🎨 Smooth animations via Framer Motion
- 📱 Fully responsive for mobile & desktop

---

## ⚙️ Setup Instructions

```bash
# Clone the repository
git clone https://github.com/Chinmoyee123/weather-dashboard.git
cd weather-dashboard

# Install dependencies
npm install

# Create a .env file
cp .env.example .env

# Then paste your API key like this:
VITE_OPENWEATHER_KEY=your_api_key_here

# Run the dev server
npm run dev

---

🔌 API Integration

    Current Weather API
    https://api.openweathermap.org/data/2.5/weather?q={city}&appid={API_KEY}&units=metric

    5-Day Forecast API
    https://api.openweathermap.org/data/2.5/forecast?q={city}&appid={API_KEY}&units=metric

Note:

    API key is hidden using a .env file with the Vite VITE_ prefix

    Key is passed via: import.meta.env.VITE_OPENWEATHER_KEY

    Free tier allows 60 API calls/minute

🧪 Development Scripts

# Start dev server
npm run dev

# Create production build
npm run build

# Preview production build
npm run preview

🚀 Deployment

    Deployed on: Vercel

    Live URL: https://weather-dashboard-alpha-tan.vercel.app

    GitHub Repo: https://github.com/Chinmoyee123/weather-dashboard

📸 Optional Submission Extras

    ✅ Live Deployed App URL

    ✅ GitHub Repository Link

    🖼️ Optional Screenshot (screenshot.png)

    📹 Optional Loom Video Demo

✨ Author

Built with ❤️ by Chinmoyee Ghosh
📫 GitHub
