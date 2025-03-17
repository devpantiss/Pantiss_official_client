import React, { useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const MapSection = ({ states, selectedState, onStateClick }) => {
  const mapRef = useRef();

  const customMarkerIcon = new L.DivIcon({
    className: "custom-icon",
    html: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32">
              <path fill="red" d="M12 2C8.1 2 5 5.1 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.9-3.1-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z"/>
          </svg>`,
    iconSize: [64, 64],
    iconAnchor: [16, 32],
  });

  const handleStateClick = (stateName, position) => {
    onStateClick(stateName, position);
    if (mapRef.current) {
      mapRef.current.flyTo(position, 7, { duration: 1.5 });
    }
  };

  return (
    <div className="relative w-full h-[750px]">
      <MapContainer
        center={[20.9517, 85.0985]}
        zoom={5}
        className="relative w-full h-full z-10"
        scrollWheelZoom={false}
        whenCreated={(map) => (mapRef.current = map)}
      >
        <TileLayer
          attribution='© <a href="https://stadiamaps.com/" target="_blank">Stadia Maps</a>, © <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> © <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a>'
          url={`https://tiles.stadiamaps.com/tiles/stamen_toner/{z}/{x}/{y}{r}.png?api_key=8f741830-1254-408f-a58c-cdbbf7deba3c`}
        />
        {states.map((state) => (
          <Marker
            key={state.name}
            position={state.position}
            icon={customMarkerIcon}
            eventHandlers={{ click: () => handleStateClick(state.name, state.position) }}
          >
            <Popup className="w-[350px]">
              <div className="text-center">
                <img
                  src={state.image}
                  alt={state.name}
                  className="w-full h-44 object-cover rounded-md mb-2"
                />
                <h3 className="font-semibold">{state.name}</h3>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-50 flex flex-wrap justify-center gap-2">
        {states.map((state) => (
          <button
            key={state.name}
            onClick={() => handleStateClick(state.name, state.position)}
            className={`px-4 py-2 text-[18px] lg:text-[22px] text-white font-medium rounded-lg shadow transition-colors ${
              selectedState === state.name ? "bg-red-600" : "bg-gray-500 hover:bg-gray-700"
            }`}
          >
            {state.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default MapSection;