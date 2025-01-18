import React from "react";
import { MapContainer, TileLayer, Marker, Popup, Tooltip } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix for default marker icons not displaying correctly in React Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

const Map = () => {
  const indiaCoordinates = [20.5937, 78.9629]; // Latitude and Longitude for India

  // Locations data with results added
  const locations = [
    {
      name: "Korba, Chhattisgarh",
      coords: [22.3595, 82.7501],
      details: "Korba is a major mining hub in Chhattisgarh.",
      results: 12,
    },
    {
      name: "Dhanbad & Bokaro, Jharkhand",
      coords: [23.7957, 86.4304],
      details: "Known for coal mining, Dhanbad is the coal capital of India.",
      results: 15,
    },
    {
      name: "Asansol & Durgapur, West Bengal",
      coords: [23.685, 87.8354],
      details: "A prominent industrial and mining region in West Bengal.",
      results: 10,
    },
    {
      name: "Joda & Barbil, Keonjhar, Odisha",
      coords: [22.1244, 85.4114],
      details: "This region is rich in iron ore deposits.",
      results: 20,
    },
    {
      name: "Talcher, Angul, Odisha",
      coords: [20.9497, 85.2335],
      details: "A significant coal mining and industrial area.",
      results: 18,
    },
    {
      name: "Koida & Bonai, Sundargarh, Odisha",
      coords: [21.8396, 85.1601],
      details: "Known for mining iron ore and manganese.",
      results: 8,
    },
    {
      name: "Bisamcuttack, Rayagada, Odisha",
      coords: [19.1574, 83.3905],
      details: "A key region for aluminum mining and indigenous communities.",
      results: 5,
    },
    {
      name: "Kolar Gold mines, Karnataka",
      coords: [13.136, 78.2772],
      details: "Kolar was one of the largest gold mines in India.",
      results: 22,
    },
    {
      name: "Kodarma, Jharkhand",
      coords: [24.4676, 85.5933],
      details: "Known for its mica mining.",
      results: 14,
    },
    {
      name: "Kalahandi, Odisha",
      coords: [19.9137, 83.1649],
      details: "A tribal region known for bauxite and other minerals.",
      results: 9,
    },
    {
      name: "Jajpur, Odisha",
      coords: [20.8378, 86.3377],
      details: "Known for its chromite deposits.",
      results: 17,
    },
    {
      name: "Cuttack, Odisha",
      coords: [20.4625, 85.8828],
      details: "A major city and industrial area.",
      results: 11,
    },
    {
      name: "Khordha, Odisha",
      coords: [20.1825, 85.6162],
      details: "Rich in industrial activities and natural resources.",
      results: 7,
    },
    {
      name: "Nayagarh, Odisha",
      coords: [20.1285, 85.1095],
      details: "Known for its scenic beauty and emerging industries.",
      results: 3,
    },
    {
      name: "Kendrapara, Odisha",
      coords: [20.5016, 86.4221],
      details: "Agricultural and industrial growth area.",
      results: 6,
    },
    {
      name: "Jharsuguda, Odisha",
      coords: [21.8569, 84.0063],
      details: "A growing industrial area in Odisha.",
      results: 13,
    },
    {
      name: "Sundargarh, Odisha",
      coords: [22.1167, 84.0306],
      details: "An important area for iron ore mining.",
      results: 16,
    },
    {
      name: "Nuapada, Odisha",
      coords: [20.8333, 82.6294],
      details: "Known for its natural resources.",
      results: 4,
    },
    {
      name: "Kendujhar, Odisha",
      coords: [21.6287, 85.5817],
      details: "Famous for its iron ore deposits.",
      results: 19,
    },
    {
      name: "Chaiwasa, Jharkhand",
      coords: [22.5563, 85.6315],
      details: "A key area for mining and minerals.",
      results: 10,
    },
    {
      name: "Nagaland",
      coords: [26.1584, 94.5624],
      details: "Rich in oil, natural gas, and minerals.",
      results: 2,
    },
    {
      name: "Neyveli, Tamil Nadu",
      coords: [11.5975, 79.4861],
      details: "Known for lignite mining and thermal power generation.",
      results: 12,
    },
    {
      name: "Ratnagiri, Maharashtra",
      coords: [16.9902, 73.312],
      details:
        "A coastal town with important mining and industrial activities.",
      results: 9,
    },
    {
      name: "Chandrapur, Maharashtra",
      coords: [19.9506, 79.2961],
      details: "Known for coal mining and power plants.",
      results: 15,
    },
    {
      name: "Singrauli, Madhya Pradesh",
      coords: [24.1994, 82.6645],
      details: "An important region for coal mining and power generation.",
      results: 18,
    },
  ];

  const api_key = "8f741830-1254-408f-a58c-cdbbf7deba3c";

  // Custom red marker icon
  const redIcon = new L.DivIcon({
    className: "custom-marker",
    html: `<div style="background-color: red; width: 16px; height: 16px; border-radius: 50%; box-shadow: 0 0 8px rgba(0, 0, 0, 0.5);"></div>`,
    iconSize: [16, 16],
    popupAnchor: [0, -10],
  });

  return (
    <MapContainer
      center={indiaCoordinates}
      zoom={5}
      className="h-full w-full rounded"
    >
      <TileLayer
        attribution='&copy; <a href="https://stadiamaps.com/" target="_blank">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a>'
        url={`https://tiles.stadiamaps.com/tiles/stamen_toner/{z}/{x}/{y}{r}.png?api_key=${api_key}`} // Use template literal to insert API key
      />
      {locations.map((location) => (
        <Marker
          key={location.name}
          position={location.coords}
          icon={redIcon} // Use the custom red icon
        >
          <Popup>
            <strong>{location.name}</strong>
            <p>{location.details}</p>
            <p>
              <strong>Results:</strong> {location.results}
            </p>
          </Popup>
          <Tooltip direction="top" offset={[0, -10]} opacity={1}>
            {`${location.name} - ${location.results} results`}
          </Tooltip>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;
