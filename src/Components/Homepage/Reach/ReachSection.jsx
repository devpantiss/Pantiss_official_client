import React, { useMemo } from "react";
import Heading from "../../Common/Heading";
import { MapContainer, TileLayer, Marker, Tooltip } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix for default Leaflet marker icons not loading in React
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

// Custom marker icon with red color
const customMarker = new L.DivIcon({
  className: "custom-icon",
  html: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32">
           <path fill="red" d="M12 2C8.1 2 5 5.1 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.9-3.1-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z"/>
         </svg>`,
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  tooltipAnchor: [0, -32], // Adjust tooltip position
});

// Define locations with memoization
const locations = [
  { name: "Angul, Odisha", coords: [20.8409, 85.0977], details: "An industrial and mining hub in Odisha." },
  { name: "Jajapur, Odisha", coords: [20.8378, 86.3377], details: "Known for its chromite deposits." },
  { name: "Jharsuguda, Odisha", coords: [21.8569, 84.0063], details: "A growing industrial area in Odisha." },
  { name: "Sundargarh, Odisha", coords: [22.1167, 84.0306], details: "An important area for iron ore mining." },
  { name: "Keonjhar, Odisha", coords: [21.6287, 85.5817], details: "Famous for its iron ore deposits." },
  { name: "Kalahandi, Odisha", coords: [19.9137, 83.1649], details: "A tribal region known for bauxite and other minerals." },
  { name: "Bokaro, Jharkhand", coords: [23.6693, 86.1511], details: "A major steel production hub in India." },
  { name: "Koderma, Jharkhand", coords: [24.4676, 85.5933], details: "Known for its mica mining." },
  { name: "Dhanbad, Jharkhand", coords: [23.7957, 86.4304], details: "Known for coal mining, Dhanbad is the coal capital of India." },
  { name: "Korba, Chhattisgarh", coords: [22.3595, 82.7501], details: "Korba is a major mining hub in Chhattisgarh." },
  { name: "Neyveli, Tamil Nadu", coords: [11.5975, 79.4861], details: "Known for lignite mining and thermal power generation." },
  { name: "Guwahati, Assam", coords: [26.1445, 91.7362], details: "The largest city in Assam and a major commercial hub." },
  { name: "Dispur, Assam", coords: [26.1358, 91.8], details: "The capital of Assam, known for its administrative significance." },
];

// API Key (replace with your actual key)
const api_key = "8f741830-1254-408f-a58c-cdbbf7deba3c";

const MapComponent = React.memo(() => {
  return (
    <MapContainer
      center={[22.9734, 78.6569]} // Central India coordinates
      zoom={5}
      style={{ height: "600px", width: "100%", borderRadius: "8px" }}
      scrollWheelZoom={false}
      className="z-0"
    >
      <TileLayer
        attribution='© <a href="https://stadiamaps.com/" target="_blank">Stadia Maps</a>, © <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> © <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a>'
        url={`https://tiles.stadiamaps.com/tiles/stamen_toner/{z}/{x}/{y}{r}.png?api_key=${api_key}`}
        maxZoom={18}
      />
      {locations.map((location, index) => (
        <Marker
          key={index}
          position={location.coords}
          icon={customMarker}
          eventHandlers={{ mouseover: (e) => e.target.openTooltip() }}
        >
          <Tooltip direction="top" offset={[0, -10]} opacity={1} permanent={false}>
            <div className="text-sm">
              <strong>{location.name}</strong>
              <br />
              {location.details}
            </div>
          </Tooltip>
        </Marker>
      ))}
    </MapContainer>
  );
});

const ReachSection = () => {
  const memoizedLocations = useMemo(() => locations, []);

  return (
    <div className="bg-black py-12">
      <section className="w-full">
        <div className="container mx-auto flex justify-center items-center w-full mb-6">
          <Heading text="OUR REACH" color="text-white" bgColor="bg-red-600" />
        </div>
        <div className="flex justify-center items-center px-4">
          <div className="w-full">
            <MapComponent />
          </div>
        </div>
      </section>

      {/* Scoped CSS */}
      <style>{`
        .custom-icon {
          background: none !important; /* Remove default Leaflet background */
          border: none !important; /* Remove any border */
        }
        .leaflet-container {
          background: #1a1a1a; /* Dark background for map */
        }
      `}</style>
    </div>
  );
};

export default ReachSection;