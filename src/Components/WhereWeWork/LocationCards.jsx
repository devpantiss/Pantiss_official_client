import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Tooltip } from "react-leaflet";
import L from "leaflet"; // Import Leaflet for custom icons
import "leaflet/dist/leaflet.css";
import Heading from "../Common/Heading";
import { Link } from "react-router-dom";

// Define a custom red marker icon
const redMarkerIcon = new L.DivIcon({
  className: "custom-icon", // Custom CSS class for the marker
  html: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32">
            <path fill="red" d="M12 2C8.1 2 5 5.1 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.9-3.1-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z"/>
        </svg>`, // Custom SVG marker with the desired color
  iconSize: [32, 32], // Size of the marker
  iconAnchor: [16, 32], // Point of the marker which will correspond to marker's location
});

const api_key = "8f741830-1254-408f-a58c-cdbbf7deba3c";

const LocationCards = () => {
  const [view, setView] = useState("cards");

  const states = [
    {
      name: "Odisha",
      path: "/where-we-work/odisha",
    },
    {
      name: "Jharkhand",
      path: "/where-we-work/jharkhand",
    },
    {
      name: "Madhya Pradesh",
      path: "/where-we-work/madhya-pradesh",
    },
    {
      name: "Maharashtra",
      path: "/where-we-work/maharashtra",
    },
    {
      name: "Chhattisgarh",
      path: "/where-we-work/chhattisgarh",
    },
    {
      name: "Karnataka",
      path: "/where-we-work/karnataka",
    },
    {
      name: "Tamil Nadu",
      path: "/where-we-work/tamil-nadu",
    },
    {
      name: "Nagaland",
      path: "/where-we-work/nagaland",
    },
  ];

  const locations = [
    {
      name: "Odisha",
      position: [20.9517, 85.0985],
      link: "/where-we-work/odisha",
    },
    {
      name: "Jharkhand",
      position: [23.6102, 85.2799],
      link: "/where-we-work/jharkhand",
    },
    {
      name: "Madhya Pradesh",
      position: [22.9734, 78.6569],
      link: "/where-we-work/madhya-pradesh",
    },
    {
      name: "Maharashtra",
      position: [19.7515, 75.7139],
      link: "/where-we-work/maharashtra",
    },
    {
      name: "Chhattisgarh",
      position: [21.2787, 81.8661],
      link: "/where-we-work/chhattisgarh",
    },
    {
      name: "Karnataka",
      position: [15.3173, 75.7139],
      link: "/where-we-work/karnataka",
    },
    {
      name: "Tamil Nadu",
      position: [11.1271, 78.6569],
      link: "/where-we-work/tamil-nadu",
    },
    {
      name: "Nagaland",
      position: [26.1584, 94.5624],
      link: "/where-we-work/nagaland",
    },
  ];

  return (
    <div className="bg-gray-50 py-10 px-6">
      <div className="text-center mb-6">
        <div className="flex justify-center items-center">
          <Heading
            text="OUR PROJECTS ACROSS STATES"
            color="text-black"
            bgColor="bg-red-600"
          />
        </div>

        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          With teams working across various regions, our initiatives are
          dedicated to improving ecosystems, boosting sustainability, and
          empowering local communities. Explore the variety of projects
          transforming landscapes in India.
        </p>
      </div>

      {/* Tab Buttons */}
      <div className="flex justify-center mb-8">
        <button
          onClick={() => setView("cards")}
          className={`px-4 py-2 rounded-tl-md rounded-bl-md font-semibold ${
            view === "cards"
              ? "bg-red-600 text-white"
              : "bg-gray-200 text-gray-800"
          }`}
        >
          Cards View
        </button>
        <button
          onClick={() => setView("map")}
          className={`px-4 py-2 rounded-tr-md rounded-br-md font-semibold ${
            view === "map"
              ? "bg-red-600 text-white"
              : "bg-gray-200 text-gray-800"
          }`}
        >
          Map View
        </button>
      </div>

      {/* View Content */}
      {view === "cards" ? (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
          {states.map((state) => (
            <div
              key={state}
              className="border border-red-600 hover:shadow-lg transition-all rounded-lg text-center py-6"
            >
              <Link to={state.path}>
                <span className="text-red-600 font-semibold uppercase text-lg">
                  {state.name}
                </span>
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <MapContainer
          center={[22, 82.5]}
          zoom={5}
          className="w-full h-[650px] rounded-lg overflow-hidden"
        >
          <TileLayer
            attribution='&copy; <a href="https://stadiamaps.com/" target="_blank">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a>'
            url={`https://tiles.stadiamaps.com/tiles/stamen_toner/{z}/{x}/{y}{r}.png?api_key=${api_key}`}
          />
          {locations.map((location) => (
            <Marker
              key={location.name}
              position={location.position}
              icon={redMarkerIcon} // Use the custom red marker icon
              eventHandlers={{
                mouseover: (e) => {
                  e.target.openPopup(); // Show popup on hover
                },
                mouseout: (e) => {
                  e.target.closePopup(); // Hide popup on hover out
                },
              }}
            >
              <Tooltip>
                <div className="text-center">
                  <p className="font-semibold text-lg">{location.name}</p>
                  <a
                    href={location.link}
                    className="text-red-600 underline mt-2 block"
                  >
                    Visit {location.name}
                  </a>
                </div>
              </Tooltip>
            </Marker>
          ))}
        </MapContainer>
      )}
    </div>
  );
};

export default LocationCards;
