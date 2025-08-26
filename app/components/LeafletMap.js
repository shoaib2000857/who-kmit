import { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const alumniData = [
  { name: 'Alumni 1', coords: [17.3956, 78.4032] },
  { name: 'Alumni 2', coords: [17.3960, 78.4040] },
  { name: 'Alumni 3', coords: [17.3945, 78.4025] },
];

const collegeCoords = [17.3956, 78.4032]; // Example coordinates for college

function FlyTo({ coords }) {
  const map = useMap();
  useEffect(() => {
    map.flyTo(coords, 17, { animate: true, duration: 2 });
  }, [coords, map]);
  return null;
}

export default function LeafletMap({ type }) {
  let center, markers;
  if (type === 'alumni') {
    center = alumniData[0].coords;
    markers = alumniData;
  } else if (type === 'college') {
    center = collegeCoords;
    markers = [{ name: 'KMIT College', coords: collegeCoords }];
  } else {
    center = [17.3956, 78.4032];
    markers = [];
  }

  return (
    <MapContainer
      center={center}
      zoom={16}
      style={{ height: '400px', width: '100%', borderRadius: '1rem', boxShadow: '0 4px 32px #0008', marginBottom: '2rem', overflow: 'hidden' }}
      scrollWheelZoom={true}
    >
      {/* Dark theme tile layer */}
      <TileLayer
        url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
        attribution="&copy; OpenStreetMap contributors & CartoDB"
      />
      <FlyTo coords={center} />
      {markers.map((m, i) => (
        <Marker key={i} position={m.coords} icon={L.icon({
          iconUrl: 'https://cdn.jsdelivr.net/npm/leaflet@1.7.1/dist/images/marker-icon.png',
          iconSize: [25, 41],
          iconAnchor: [12, 41],
          popupAnchor: [1, -34],
          shadowUrl: 'https://cdn.jsdelivr.net/npm/leaflet@1.7.1/dist/images/marker-shadow.png',
        })}>
          <Popup>{m.name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
