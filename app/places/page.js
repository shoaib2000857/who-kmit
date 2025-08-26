'use client';

import dynamic from 'next/dynamic';

const LeafletMap = dynamic(() => import('../components/LeafletMap'), { ssr: false });

export default function PlacesPage() {
  return (
    <main style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #232526 0%, #414345 100%)',
      color: '#fff',
      fontFamily: 'Orbitron, Roboto, sans-serif',
      padding: '2rem',
      boxShadow: '0 0 40px #ff00a6a0',
    }}>
      <h1 style={{
        fontSize: '3rem',
        letterSpacing: '0.1em',
        textShadow: '0 0 24px #ff00a6, 0 0 8px #fff',
        fontWeight: 900,
        marginBottom: '1.5rem',
        fontFamily: 'Orbitron, Roboto, sans-serif',
        textAlign: 'center',
      }}>
        KMIT - Places
      </h1>
      <p style={{
        fontSize: '1.3rem',
        maxWidth: '700px',
        margin: '0 auto 2.5rem',
        textAlign: 'center',
        background: 'rgba(255, 0, 166, 0.08)',
        borderRadius: '1rem',
        padding: '1.2rem 2rem',
        boxShadow: '0 0 16px #ff00a6a0',
        fontFamily: 'Orbitron, Roboto, sans-serif',
      }}>
        Step into the <span style={{ color: '#ff00a6', fontWeight: 700 }}>Digital Campus</span> of <span style={{ color: '#00ffe7', fontWeight: 700 }}>KMIT</span>.<br />
        Discover every corner, landmark, and hidden gem of our college with a futuristic interactive map. Navigate the campus in style, where technology meets tradition and every location glows with possibility.
      </p>
      <h2 style={{
        fontSize: '2rem',
        letterSpacing: '0.08em',
        color: '#ff00a6',
        textShadow: '0 0 12px #ff00a6',
        marginBottom: '1rem',
        fontFamily: 'Orbitron, Roboto, sans-serif',
      }}>
        College Map
      </h2>
      <LeafletMap type="college" />
    </main>
  );
}
