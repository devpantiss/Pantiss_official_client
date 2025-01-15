import React from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
} from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 22, // Latitude of India's approximate center
  lng: 82.5, // Longitude of India's approximate center
};

const locations = [
  {
    name: "Kalahandi",
    position: { lat: 19.913, lng: 82.733 },
  },
  {
    name: "Bastar",
    position: { lat: 19.107, lng: 81.943 },
  },
  {
    name: "Koderma",
    position: { lat: 24.467, lng: 85.601 },
  },
];

const Maps = () => {
  return (
    <section className="relative bg-gray-100 py-10">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-6">Our Focus Regions</h2>
        <p className="text-center text-lg text-gray-600 mb-8">
          Highlighting the key locations where the Pantiss Mining Fellowship is making an impact.
        </p>
        <div className="w-full h-96 rounded-lg overflow-hidden shadow-lg">
          <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={center}
              zoom={6} // Adjust zoom level for better visibility
            >
              {locations.map((location, index) => (
                <Marker
                  key={index}
                  position={location.position}
                  label={{
                    text: location.name,
                    fontSize: "14px",
                    color: "#FF5722",
                  }}
                />
              ))}
            </GoogleMap>
          </LoadScript>
        </div>
      </div>
    </section>
  );
};

export default Maps;
