import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
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
      position: [20.9517, 85.0985],
      path: "/where-we-work/odisha",
      image:
        "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1737363056/puri-tour-2022_rehrwx.jpg",
    },
    {
      name: "Jharkhand",
      position: [23.6102, 85.2799],
      path: "/where-we-work/jharkhand",
      image:
        "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1735376736/vladimir-patkachakov-Mx6Xmf_nbRk-unsplash_ej5umt.jpg",
    },
    {
      name: "Madhya Pradesh",
      position: [22.9734, 78.6569],
      path: "/where-we-work/madhya-pradesh",
      image:
        "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1737363813/mp_dbfkkq.jpg",
    },
    {
      name: "Maharashtra",
      position: [19.7515, 75.7139],
      path: "/where-we-work/maharashtra",
      image:
        "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1737364096/Gateway_of_India_uhufmp.jpg",
    },
    {
      name: "Chhattisgarh",
      position: [21.2787, 81.8661],
      path: "/where-we-work/chhattisgarh",
      image:
        "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1737364380/Chattisgarh_zoaot8.jpg",
    },
    {
      name: "Karnataka",
      position: [15.3173, 75.7139],
      path: "/where-we-work/karnataka",
      image:
        "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1737364485/bangalore_aveug5.jpg",
    },
    {
      name: "Tamil Nadu",
      position: [11.1271, 78.6569],
      path: "/where-we-work/tamil-nadu",
      image:
        "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1737364635/tamilnadu_vd888x.jpg",
    },
    {
      name: "Nagaland",
      position: [26.1584, 94.5624],
      path: "/where-we-work/nagaland",
      image:
        "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1737364708/mohamed-abdul-rasheed-En_YGRzonpE-unsplash_epgixj.jpg",
    },
  ];

  const locations = states.map((state) => ({
    name: state.name,
    position: state.position, // Replace with correct coordinates
    link: state.path,
    image: state.image,
  }));

  return (
    <div className="bg-red-600 py-10 px-6">
      <div className="text-center mb-6">
        <div className="flex justify-center items-center">
          <Heading
            text="OUR PROJECTS ACROSS STATES"
            color="text-white"
            bgColor="bg-white"
          />
        </div>

        <p className="text-gray-200 mt-4 max-w-2xl mx-auto">
          With teams working across various regions, our initiatives are
          dedicated to improving ecosystems, boosting sustainability, and
          empowering local communities. Explore the variety of projects
          transforming landscapes in India.
        </p>
      </div>

      <div className="flex justify-center mb-8">
        <button
          onClick={() => setView("cards")}
          className={`px-4 py-2 text-[18px] lg:text-[22px] rounded-tl-md rounded-bl-md font-semibold ${
            view === "cards"
              ? "bg-red-600 text-white ring-2 ring-white"
              : "bg-gray-200 text-gray-800"
          }`}
        >
          Cards View
        </button>
        <button
          onClick={() => setView("map")}
          className={`px-4 py-2 text-[18px] lg:text-[22px] rounded-tr-md rounded-br-md font-semibold ${
            view === "map"
              ? "bg-red-600 text-white ring-2 ring-white"
              : "bg-gray-200 text-gray-800"
          }`}
        >
          Map View
        </button>
      </div>

      {view === "cards" ? (
        <div className="flex justify-center items-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-y-3 gap-x-4 mt-10">
            {states.map((state) => (
              <Link key={state.name} to={state.path}>
                <div
                  className="border w-[450px] h-[300px] border-white hover:shadow-lg text-white hover:text-red-600 hover:bg-white transition-all rounded-lg text-center py-6 bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${state.image})`,
                  }}
                >
                  <span className="font-semibold uppercase text-lg bg-black bg-opacity-50 px-2 py-1 rounded">
                    {state.name}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      ) : (
        <MapContainer
          center={[22, 82.5]}
          zoom={5}
          scrollWheelZoom={false}
          className="w-full h-[750px] rounded-lg overflow-hidden"
        >
          <TileLayer
            attribution='&copy; <a href="https://stadiamaps.com/" target="_blank">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a>'
            url={`https://tiles.stadiamaps.com/tiles/stamen_toner/{z}/{x}/{y}{r}.png?api_key=${api_key}`}
          />
          {locations.map((location) => (
            <Marker
              key={location.name}
              position={location.position}
              icon={redMarkerIcon}
            >
              <Popup className="w-[350px]">
                <div className="text-center w-full">
                  <img src={location.image} className="h-[300px] w-[350px]" />
                  <p className="font-bold">{location.name}</p>
                  <Link
                    to={location.link}
                    className="text-blue-500 hover:underline"
                  >
                    View Projects
                  </Link>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      )}
    </div>
  );
};

export default LocationCards;
