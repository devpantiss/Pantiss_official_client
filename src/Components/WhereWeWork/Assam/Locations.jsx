import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import Heading from "../../Common/Heading";

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

Modal.setAppElement("#root"); // Set the app element for accessibility

const Locations = () => {
  const [view, setView] = useState("cards");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedState, setSelectedState] = useState(null);

  const states = [
    {
      name: "Guwahati",
      position: [26.1445, 91.7362],
      path: "/where-we-work/guwahati",
      image:
        "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1737450493/TNIE_import_2023_3_6_original_Illegalcoalmining_cthtx2.avif",
    },
    {
      name: "Dispur",
      position: [26.1402, 91.7880],
      path: "/where-we-work/dispur",
      image:
        "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1737450575/mining_kg3nig.jpg",
    },
  ];
  

  const locations = states.map((state) => ({
    name: state.name,
    position: state.position,
    link: state.path,
    image: state.image,
  }));

  const openModal = (state) => {
    setSelectedState(state);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedState(null);
  };

  return (
    <div className="bg-gray-100 py-10 px-6">
      <div className="text-center mb-6">
        <div className="flex justify-center items-center">
          <Heading
            text="OUR PROJECTS ACROSS LOCATIONS"
            color="text-black"
            bgColor="bg-red-600"
          />
        </div>

        <p className="text-black mt-4 max-w-2xl mx-auto">
          With teams working across Guwahati and Dispur, our initiatives are
          dedicated to improving ecosystems, boosting sustainability, and
          empowering local communities. Explore the variety of projects
          transforming landscapes in Assam.
        </p>
      </div>

      <div className="flex justify-center mb-8">
        <button
          onClick={() => setView("cards")}
          className={`px-4 py-2 text-[18px] lg:text-[22px] rounded-tl-md rounded-bl-md font-semibold ${
            view === "cards"
              ? "bg-red-600 text-white ring-2 ring-red-600"
              : "bg-gray-50 text-red-600 ring-2 ring-red-600"
          }`}
        >
          Cards View
        </button>
        <button
          onClick={() => setView("map")}
          className={`px-4 py-2 text-[18px] lg:text-[22px] rounded-tr-md rounded-br-md font-semibold ${
            view === "map"
              ? "bg-red-600 text-white ring-2 ring-red-600"
              : "bg-gray-50 text-red-600 ring-2 ring-red-600"
          }`}
        >
          Map View
        </button>
      </div>

      {view === "cards" ? (
        <div className="flex justify-center items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-4 mt-10">
            {states.map((state) => (
              <div
                key={state.name}
                onClick={() => openModal(state)}
                className="border w-[450px] h-[300px] border-white hover:shadow-lg text-white hover:text-red-600 hover:bg-white transition-all rounded-lg text-center py-6 bg-cover bg-center cursor-pointer"
                style={{
                  backgroundImage: `url(${state.image})`,
                }}
              >
                <span className="font-semibold uppercase text-lg bg-black bg-opacity-50 px-2 py-1 rounded">
                  {state.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <MapContainer
          center={[26.1445, 91.7362]} // Centered on Guwahati
          zoom={10}
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
              <Popup className="w-[350px] lg:w-[450px]">
                <img src={location.image} className="h-full w-full" />
                <p className="font-bold">{location.name}</p>
                <Link
                  to={location.link}
                  className="text-blue-500 hover:underline"
                >
                  View Projects
                </Link>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      )}

      {/* Modal Section */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Skilling Program Details"
        className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50"
      >
        <div className="bg-white p-6 rounded-lg w-[500px]">
          <h2 className="text-2xl font-bold mb-4 text-red-600">
            Skilling Program in {selectedState?.name}
          </h2>
          <p className="text-gray-700 mb-4">
            Our skilling programs in {selectedState?.name} are designed to
            empower local communities through vocational training and skill
            development initiatives.
          </p>
          <button
            onClick={closeModal}
            className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700"
          >
            Close
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default Locations;
