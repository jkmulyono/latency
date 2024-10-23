'use client';

import { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';


// Fix for leaflet's default icon path issues in Next.js
const DefaultIcon = L.icon({
  iconUrl: '/map/marker-icon.png',
  iconRetinaUrl: '/map/marker-icon-2x.png',
  shadowUrl: '/map/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;

interface MapProps {
  center: [number, number];
  zoom: number;
  markers?: Array<{
    position: [number, number];
    popup?: string;
  }>;
}

const Map = ({ center, zoom, markers = [] }: MapProps) => {
  useEffect(() => {
    // Initialize map
    const map = L.map('map', {
        attributionControl: false,
        zoomControl: false
      }).setView(center, zoom);

    // Add tile layer
    L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
        attribution: '',
        subdomains: 'abcd',
        maxZoom: 20,
        
    }).addTo(map);
    
    // Add markers
    markers.forEach(marker => {
      const m = L.marker(marker.position).addTo(map);
      if (marker.popup) {
        m.bindPopup(marker.popup);
      }
    });

    // Cleanup
    return () => {
      map.remove();
    };
  }, [center, zoom, markers]);

  return (
    <div id="map" className="h-full w-full rounded-lg"></div>
  );
};

export default Map;
