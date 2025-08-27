'use client';
import Link from "next/link";
import Image from "next/image";
import Navbar from "./components/Navbar";
import WeatherMonitor from "./components/WeatherMonitor";

export default function Home() {
  return (
    <>
      <Navbar />
      <main
        style={{
          minHeight: "100vh",
          background: "linear-gradient(135deg, #0f2027 0%, #232526 100%)",
          color: "#fff",
          fontFamily: "Orbitron, Roboto, sans-serif",
          padding: "2rem",
          boxShadow: "0 0 40px #00ffe7a0",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "2rem",
          marginTop: "5rem", 
        }}
      >
        <WeatherMonitor />
        <Image
          src="/globe.svg"
          alt="Where-KMIT Logo"
          width={120}
          height={120}
          style={{ filter: "drop-shadow(0 0 32px #00ffe7)" }}
          priority
        />
        <h1
          style={{
            fontSize: "3.2rem",
            letterSpacing: "0.12em",
            textShadow: "0 0 32px #00ffe7, 0 0 12px #ff00a6",
            fontWeight: 900,
            marginBottom: "1.2rem",
            fontFamily: "Orbitron, Roboto, sans-serif",
          }}
        >
          Where - KMIT
        </h1>
        <p
          style={{
            fontSize: "1.4rem",
            maxWidth: "700px",
            textAlign: "center",
            background: "rgba(0, 255, 231, 0.08)",
            borderRadius: "1rem",
            padding: "1.2rem 2rem",
            boxShadow: "0 0 16px #00ffe7a0",
            fontFamily: "Orbitron, Roboto, sans-serif",
          }}
        >
          <span style={{ color: "#00ffe7", fontWeight: 700 }}>KMIT</span> is more
          than a place—it's a vibrant community.
          <br />
          <span style={{ color: "#ff00a6", fontWeight: 700 }}>Who</span> we are:
          The alumni, students, and faculty who shape our legacy.
          <br />
          <span style={{ color: "#00ffe7", fontWeight: 700 }}>Where</span> we are:
          The campus, the landmarks, and the memories that define us.
          <br />
          Explore both sides of KMIT below and experience the future of connection
          and discovery.
        </p>
        <div
          style={{
            display: "flex",
            gap: "2rem",
            marginTop: "2rem",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <Link
            href="/people"
            style={{
              background:
                "linear-gradient(90deg, #00ffe7 0%, #ff00a6 100%)",
              color: "#232526",
              fontWeight: 700,
              fontSize: "1.2rem",
              padding: "1rem 2.5rem",
              borderRadius: "2rem",
              boxShadow: "0 0 24px #00ffe7a0",
              textDecoration: "none",
              transition: "transform 0.2s",
              fontFamily: "Orbitron, Roboto, sans-serif",
            }}
          >
            Who @ KMIT
          </Link>
          <Link
            href="/places"
            style={{
              background:
                "linear-gradient(90deg, #ff00a6 0%, #00ffe7 100%)",
              color: "#232526",
              fontWeight: 700,
              fontSize: "1.2rem",
              padding: "1rem 2.5rem",
              borderRadius: "2rem",
              boxShadow: "0 0 24px #ff00a6a0",
              textDecoration: "none",
              transition: "transform 0.2s",
              fontFamily: "Orbitron, Roboto, sans-serif",
            }}
          >
            Where @ KMIT
          </Link>
        </div>
        <footer
          style={{
            marginTop: "3rem",
            fontSize: "1rem",
            color: "#aaa",
            textAlign: "center",
            opacity: 0.8,
          }}
        >
          <span style={{ color: "#00ffe7" }}>
            Made for the future. Made for KMIT.
          </span>
        </footer>
      </main>
    </>
  );
}
