import { useEffect, useState } from "react";

export default function WeatherMonitor() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchWeather() {
      try {
        setLoading(true);
        // const res = await fetch("http://localhost:4000/api/weather");
        const res = await fetch("/api/weather");
        if (!res.ok) throw new Error("Failed to fetch weather");
        const data = await res.json();
        setWeather(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchWeather();
  }, []);

  return (
    <div style={{
      background: "rgba(0,255,231,0.12)",
      borderRadius: "1rem",
      padding: "1rem 2rem",
      boxShadow: "0 0 12px #00ffe7a0",
      color: "#fff",
      fontFamily: "Orbitron, Roboto, sans-serif",
      margin: "1.5rem auto",
      maxWidth: "320px",
      textAlign: "center",
      fontSize: "1.1rem",
    }}>
      <div style={{ fontWeight: 700, color: "#00ffe7", marginBottom: "0.5rem" }}>
        Hyderabad Weather
      </div>
      {loading && <span>Loading...</span>}
      {error && <span style={{ color: "#ff00a6" }}>Error: {error}</span>}
      {weather && (
        <>
          <div style={{ fontSize: "2rem", fontWeight: 900, marginBottom: "0.3rem" }}>
            {Math.round(weather.main.temp)}°C
          </div>
          <div style={{ fontWeight: 500, color: "#00ffe7" }}>
            {weather.weather[0].main} ({weather.weather[0].description})
          </div>
          <div style={{ fontSize: "0.95rem", marginTop: "0.5rem", color: "#aaa" }}>
            Humidity: {weather.main.humidity}%<br />
            Wind: {Math.round(weather.wind.speed)} m/s
          </div>
        </>
      )}
    </div>
  );
}
