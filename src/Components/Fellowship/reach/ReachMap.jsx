import React from 'react';
import { MapContainer, TileLayer, Marker, Tooltip } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Custom marker icon with a specific color using L.DivIcon
const customMarker = new L.DivIcon({
    className: 'custom-icon', // Custom CSS class for the marker
    html: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32">
            <path fill="red" d="M12 2C8.1 2 5 5.1 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.9-3.1-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z"/>
        </svg>`, // Custom SVG marker with the desired color
    iconSize: [32, 32], // Size of the marker
    iconAnchor: [16, 32], // Point of the marker which will correspond to marker's location
});

// Define the locations (latitude, longitude, and details) to be displayed
const locations = [
    { name: 'Kalahandi, Odisha', coords: [19.9137, 83.1649], details: 'A tribal region known for bauxite and other minerals.' },
    { name: 'Bastar, Chhattisgarh', coords: [19.1075, 81.9535], details: 'Known for its unique culture and natural resources.' },
    { name: 'Koderma, Jharkhand', coords: [24.4676, 85.5933], details: 'Known for its mica mining.' },
];

// API Key
const api_key = "8f741830-1254-408f-a58c-cdbbf7deba3c"; // Replace with your actual API key

const MapComponent = () => {
    return (
        <MapContainer
            center={[22.9734, 78.6569]}
            zoom={5}
            style={{ height: '600px', width: '100%' }}
            scrollWheelZoom={false}
        >
            {/* Use a dark-themed tile layer and inject the API key */}
            <TileLayer
                attribution='&copy; <a href="https://stadiamaps.com/" target="_blank">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a>'
                url={`https://tiles.stadiamaps.com/tiles/stamen_toner/{z}/{x}/{y}{r}.png?api_key=${api_key}`}
            />
            {locations.map((location, index) => (
                <Marker key={index} position={location.coords} icon={customMarker}>
                    <Tooltip direction="top" offset={[0, -10]} opacity={1}>
                        <div>
                            <strong>{location.name}</strong>
                            <br />
                            {location.details}
                        </div>
                    </Tooltip>
                </Marker>
            ))}
        </MapContainer>
    );
};

export default MapComponent;
