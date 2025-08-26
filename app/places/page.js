import dynamic from 'next/dynamic';

const LeafletMap = dynamic(() => import('../components/LeafletMap'), { ssr: false });

export default function PlacesPage() {
  return (
    <main>
      <h1>Places Page</h1>
      <h2>College Map</h2>
      <LeafletMap type="college" />
    </main>
  );
}
