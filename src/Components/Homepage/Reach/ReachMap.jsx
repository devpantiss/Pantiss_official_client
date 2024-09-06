import React from 'react';
import { MapContainer, TileLayer, Marker, Tooltip } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Custom marker icon with a specific color using L.DivIcon
const customMarker = new L.DivIcon({
    className: 'custom-icon', // Custom CSS class for the marker
    html: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32">
            <path fill="#2A675C" d="M12 2C8.1 2 5 5.1 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.9-3.1-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z"/>
        </svg>`, // Custom SVG marker with the desired color
    iconSize: [32, 32], // Size of the marker
    iconAnchor: [16, 32], // Point of the marker which will correspond to marker's location
});

// Define the locations (latitude, longitude, and details)
const locations = [
    { name: 'Korba, Chhattisgarh', coords: [22.3595, 82.7501], details: 'Korba is a major mining hub in Chhattisgarh.' },
    { name: 'Dhanbad & Bokaro, Jharkhand', coords: [23.7957, 86.4304], details: 'Known for coal mining, Dhanbad is the coal capital of India.' },
    { name: 'Asansol & Durgapur, West Bengal', coords: [23.6850, 87.8354], details: 'A prominent industrial and mining region in West Bengal.' },
    { name: 'Joda & Barbil, Keonjhar, Odisha', coords: [22.1244, 85.4114], details: 'This region is rich in iron ore deposits.' },
    { name: 'Talcher, Angul, Odisha', coords: [20.9497, 85.2335], details: 'A significant coal mining and industrial area.' },
    { name: 'Koida & Bonai, Sundargarh, Odisha', coords: [21.8396, 85.1601], details: 'Known for mining iron ore and manganese.' },
    { name: 'Bisamcuttack, Rayagada, Odisha', coords: [19.1574, 83.3905], details: 'A key region for aluminum mining and indigenous communities.' },
    { name: 'Kolar Gold mines, Karnataka', coords: [13.1360, 78.2772], details: 'Kolar was one of the largest gold mines in India.' },
];

const MapComponent = () => {
    return (
        <MapContainer 
            center={[22.9734, 78.6569]} 
            zoom={5} 
            style={{ height: '600px', width: '100%' }} 
            // scrollWheelZoom={false}  // Disable scroll zoom
        >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
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
