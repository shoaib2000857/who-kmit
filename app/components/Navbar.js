import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav style={{
      width: '100%',
      padding: '1rem 2rem',
      background: 'rgba(20, 30, 40, 0.95)',
      boxShadow: '0 2px 24px #00ffe7a0',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      position: 'fixed',
      top: 0,
      left: 0,
      zIndex: 100,
      fontFamily: 'Orbitron, Roboto, sans-serif',
    }}>
      <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.7rem', textDecoration: 'none' }}>
        <Image src="/globe.svg" alt="Where-KMIT Logo" width={36} height={36} style={{ filter: 'drop-shadow(0 0 12px #00ffe7)' }} />
        <span style={{
          color: '#00ffe7',
          fontWeight: 900,
          fontSize: '1.3rem',
          letterSpacing: '0.08em',
          textShadow: '0 0 8px #00ffe7',
        }}>Where-KMIT</span>
      </Link>
      <div style={{ display: 'flex', gap: '2rem' }}>
        <Link href="/people" style={{ color: '#fff', fontWeight: 700, fontSize: '1.1rem', textDecoration: 'none', transition: 'color 0.2s', textShadow: '0 0 8px #00ffe7' }}>Who</Link>
        <Link href="/places" style={{ color: '#fff', fontWeight: 700, fontSize: '1.1rem', textDecoration: 'none', transition: 'color 0.2s', textShadow: '0 0 8px #ff00a6' }}>Where</Link>
      </div>
    </nav>
  );
}
