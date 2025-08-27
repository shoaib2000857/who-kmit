'use client';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

const LeafletMap = dynamic(() => import('../components/LeafletMap'), { ssr: false });

export default function PeoplePage() {
  const [alumniLocations, setAlumniLocations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchAlumni() {
      try {
        setLoading(true);
        const res = await fetch('http://localhost:4000/api/alumni');
        if (!res.ok) throw new Error('Failed to fetch alumni locations');
        const data = await res.json();
        setAlumniLocations(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchAlumni();
  }, []);

  return (
    <main style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0f2027 0%, #2c5364 100%)',
      color: '#fff',
      fontFamily: 'Orbitron, Roboto, sans-serif',
      padding: '2rem',
      boxShadow: '0 0 40px #00ffe7a0',
      marginTop: '5rem', // offset for navbar
    }}>
      <h1 style={{
        fontSize: '3rem',
        letterSpacing: '0.1em',
        textShadow: '0 0 24px #00ffe7, 0 0 8px #fff',
        fontWeight: 900,
        marginBottom: '1.5rem',
        fontFamily: 'Orbitron, Roboto, sans-serif',
        textAlign: 'center',
      }}>
        KMIT - People
      </h1>
      <p style={{
        fontSize: '1.3rem',
        maxWidth: '700px',
        margin: '0 auto 2.5rem',
        textAlign: 'center',
        background: 'rgba(0, 255, 231, 0.08)',
        borderRadius: '1rem',
        padding: '1.2rem 2rem',
        boxShadow: '0 0 16px #00ffe7a0',
        fontFamily: 'Orbitron, Roboto, sans-serif',
      }}>
        Welcome to the <span style={{ color: '#00ffe7', fontWeight: 700 }}>Legendary Alumni Portal</span> of <span style={{ color: '#ff00a6', fontWeight: 700 }}>KMIT</span>.<br />
        Connect, explore, and celebrate the legacy of our college with a next-gen interactive map. Dive into the digital galaxy of KMIT alumni, where every marker is a story, every connection is a spark, and the future is now.
      </p>
      <h2 style={{
        fontSize: '2rem',
        letterSpacing: '0.08em',
        color: '#00ffe7',
        textShadow: '0 0 12px #00ffe7',
        marginBottom: '1rem',
        fontFamily: 'Orbitron, Roboto, sans-serif',
      }}>
        Alumni Map
      </h2>
      {loading && <div>Loading alumni locations...</div>}
      {error && <div style={{ color: '#ff00a6' }}>Error: {error}</div>}
      {!loading && !error && <LeafletMap type="alumni" locations={alumniLocations} />}
    </main>
  );
}
