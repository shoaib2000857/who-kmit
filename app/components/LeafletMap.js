import { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

function FlyTo({ coords }) {
  const map = useMap();
  useEffect(() => {
    map.flyTo(coords, 17, { animate: true, duration: 2 });
  }, [coords, map]);
  return null;
}

export default function LeafletMap({ type, locations }) {
  let center, markers;
  if (locations && locations.length > 0) {
    center = locations[0].coords;
    markers = locations;
  } else if (type === 'alumni') {
    center = [17.3956, 78.4032];
    markers = [];
  } else if (type === 'college') {
    center = [17.3956, 78.4032];
    markers = [];
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
      {/* Satellite view tile layer */}
      <TileLayer
        url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
        attribution="Tiles © Esri — Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community"
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
          <Popup>{m.name || m.batch ? `${m.name} (${m.batch || ''} ${m.field || ''})` : m.name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
