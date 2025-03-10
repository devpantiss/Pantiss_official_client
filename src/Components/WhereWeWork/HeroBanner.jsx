import React, { useState, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Heading from "../Common/Heading";
import L from "leaflet";
import { Link } from "react-router-dom";
import Slider from "react-slick"; // Import the slider library
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
    name: "Chhattisgarh",
    position: [21.2787, 81.8661],
    path: "/where-we-work/chhattisgarh",
    image:
      "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1737364380/Chattisgarh_zoaot8.jpg",
  },
  {
    name: "Tamil Nadu",
    position: [11.1271, 78.6569],
    path: "/where-we-work/tamil-nadu",
    image:
      "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1737364635/tamilnadu_vd888x.jpg",
  },
  {
    name: "Assam",
    position: [26.2447, 92.5376],
    path: "/where-we-work/assam",
    image:
      "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1737364708/mohamed-abdul-rasheed-En_YGRzonpE-unsplash_epgixj.jpg",
  },
];

const districts = {
  Odisha: [
    {
      name: "Anugul",
      position: [20.8371, 85.1511],
      path: "/where-we-work/odisha/anugul",
      image:
        "https://media-cdn.tripadvisor.com/media/photo-s/08/42/ff/85/satkosia-gorge-wildlife.jpg",
    },
    {
      name: "Jajapur",
      position: [20.8504, 86.3377],
      path: "/where-we-work/odisha/jajapur",
      image:
        "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1738227984/jajapur_kq8q03.jpg",
    },
    {
      name: "Jharsuguda",
      position: [21.8554, 84.0062],
      path: "/where-we-work/odisha/jharsuguda",
      image:
        "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1738228112/jharsuguda_b6v2ll.jpg",
    },
    {
      name: "Sundargarh",
      position: [22.12, 84.0372],
      path: "/where-we-work/odisha/sundargarh",
      image:
        "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1737396691/Screenshot_2025-01-20_at_11.41.03_PM_zx7pts.png",
    },
    {
      name: "Keonjhar",
      position: [21.5, 85.5],
      path: "/where-we-work/odisha/keonjhar",
      image:
        "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1737396135/Bhimkund-Keonjhar-Side-2-1024x676_exicvm.jpg",
    },
    {
      name: "Kalahandi",
      position: [19.9014, 83.1649],
      path: "/where-we-work/odisha/kalahandi",
      image:
        "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1738228210/kalahandi_hobe6n.jpg",
    },
    // {
    //   name: "Kandhamal",
    //   position: [20.151, 84.0737],
    //   path: "/where-we-work/odisha/kandhamal",
    //   image:
    //     "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1737007534/WhatsApp_Image_2025-01-15_at_7.39.25_PM_v3ned2.jpg",
    // },
    // {
    //   name: "Mayurbhanj",
    //   position: [21.75, 86.5],
    //   path: "/where-we-work/odisha/mayurbhanj",
    //   image:
    //     "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1737396006/mayurbhanj_bhcvah.jpg",
    // },
  ],
  Jharkhand: [
    {
      name: "Bokaro",
      position: [23.6693, 86.1511],
      path: "/where-we-work/jharkhand/bokaro",
      image:
        "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1737445215/bokaro_bbtz81.jpg",
    },
    {
      name: "Koderma",
      position: [24.4692, 85.5932],
      path: "/where-we-work/jharkhand/koderma",
      image:
        "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1737445180/koderma2_txdz5o.jpg",
    },
    {
      name: "Dhanbad",
      position: [23.7957, 86.4304],
      path: "/where-we-work/jharkhand/dhanbad",
      image:
        "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1737445286/dhanbad_wbmxrl.jpg",
    },
  ],
  Assam: [
    {
      name: "Guwahati",
      position: [26.1445, 91.7362],
      path: "/where-we-work/assam/guwati",
      image:
        "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1737450493/TNIE_import_2023_3_6_original_Illegalcoalmining_cthtx2.avif",
    },
    {
      name: "Dispur",
      position: [26.1402, 91.788],
      path: "/where-we-work/assam/dispur",
      image:
        "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1737450575/mining_kg3nig.jpg",
    },
  ],
  "Tamil Nadu": [
    {
      name: "Neyveli",
      position: [11.601, 79.4882],
      path: "/where-we-work/tamil-nadu/neyveli",
      image:
        "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1737443051/Chennai_vkkosd.jpg", // Replace with actual image URL if needed
    },
  ],
  Chhattisgarh: [
    {
      name: "Korba",
      position: [22.3595, 82.7501],
      path: "/where-we-work/Chhattisgarh/korba",
      image:
        "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1738228494/korba_wraof6.webp",
    },
  ],
};

const latestNews = {
  Odisha: [
    {
      date: "January 20, 2025",
      title: "Pantiss launches mining skilling program for local youth",
      image:
        "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1738938422/dhanbad_t9agnb.jpg",
    },
    {
      date: "February 10, 2025",
      title:
        "Rehabilitation efforts boost livelihoods in mining-affected villages",
      image:
        "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1737007534/WhatsApp_Image_2025-01-15_at_7.39.25_PM_v3ned2.jpg",
    },
    {
      date: "February 25, 2025",
      title:
        "Odisha to develop model mining villages for displaced communities",
      image:
        "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1735196020/model_village_dz36fg.jpg",
    },
    {
      date: "March 05, 2025",
      title:
        "Enterprise growth in mining-affected regions drives local economy",
      image: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1739280958/WhatsApp_Image_2025-02-01_at_7.15.33_PM_wxkfmj.jpg",
    },
  ],
  Jharkhand: [
    {
      date: "January 18, 2025",
      title: "Jharkhand's RPL program upskills workers in the mining sector",
      image: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1735915960/WhatsApp_Image_2025-01-03_at_7.09.25_PM_1_pmya7b.jpg",
    },
    {
      date: "February 20, 2025",
      title: "Just transition: Jharkhand pilots sustainable mining practices",
      image: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1738924847/jharsuguda_zlzcyq.avif",
    },
    {
      date: "March 01, 2025",
      title: "Mine reclamation project restores biodiversity in Jharkhand",
      image: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1738935983/dry-hill-sunny-day_hgnuof.jpg",
    },
  ],
  Assam: [
    {
      date: "January 25, 2025",
      title: "Agriculture skilling initiatives empower farmers in Assam",
      image: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1739292358/crops-growing-in-thailand_uc3ttv.jpg",
    },
    {
      date: "February 15, 2025",
      title: "Just transition: Moving away from coal dependency in Assam",
      image: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1739294514/cls-open-pit-mining_pbeseo.jpg",
    },
    {
      date: "March 10, 2025",
      title: "Resettlement program helps displaced mining families in Assam",
      image: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1738994534/diverse-people-refugee-camps_uuu6by.jpg",
    },
  ],
  "Tamil Nadu": [
    {
      date: "February 22, 2025",
      title:
        "Mining skilling centers launched to support workforce development",
      image: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1735195121/vocational_acvsf1.jpg",
    },
    {
      date: "February 22, 2025",
      title:
        "Mining skilling centers launched to support workforce development",
      image: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1735195121/vocational_acvsf1.jpg",
    },
  ],
  Chhattisgarh: [
    {
      date: "January 28, 2025",
      title: "Chhattisgarh focuses on mine reclamation and land restoration",
      image:
      "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1735376736/vladimir-patkachakov-Mx6Xmf_nbRk-unsplash_ej5umt.jpg",
    },
    {
      date: "February 18, 2025",
      title: "New skilling centers to support sustainable mining jobs",
      image:
      "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1735192753/blogs_copltg.jpg",
    },
  ],
};

const impactData = {
  Odisha: {
    description:
      "Odisha has impacted over 50,000 families with clean energy solutions and sustainable farming projects.",
    stats: [
      { label: "Families Impacted", value: "50,000+" },
      { label: "Projects Completed", value: "200+" },
      { label: "Projects Completed", value: "200+" },
      { label: "Projects Completed", value: "200+" },
    ],
  },
  Jharkhand: {
    description:
      "Bihar has transformed its rural areas with modern infrastructure and clean water initiatives.",
    stats: [
      { label: "Families Impacted", value: "40,000+" },
      { label: "Projects Completed", value: "150+" },
      { label: "Projects Completed", value: "150+" },
      { label: "Projects Completed", value: "150+" },
    ],
  },
  Assam: {
    description:
      "West Bengal has strengthened its economy through trade and renewable energy projects.",
    stats: [
      { label: "Families Impacted", value: "30,000+" },
      { label: "Projects Completed", value: "120+" },
      { label: "Projects Completed", value: "120+" },
      { label: "Projects Completed", value: "120+" },
    ],
  },
  "Tamil Nadu": {
    description:
      "Jharkhand has achieved milestones in mining safety and green energy development.",
    stats: [
      { label: "Families Impacted", value: "35,000+" },
      { label: "Projects Completed", value: "100+" },
      { label: "Projects Completed", value: "100+" },
      { label: "Projects Completed", value: "100+" },
    ],
  },
  Chhattisgarh: {
    description:
      "Chhattisgarh has pioneered rural education and sustainable development projects.",
    stats: [
      { label: "Families Impacted", value: "25,000+" },
      { label: "Projects Completed", value: "80+" },
      { label: "Projects Completed", value: "80+" },
      { label: "Projects Completed", value: "80+" },
    ],
  },
};

const api_key = "8f741830-1254-408f-a58c-cdbbf7deba3c";

const HeroBanner = () => {
  const [selectedState, setSelectedState] = useState("Odisha");
  const [activePopup, setActivePopup] = useState(null);
  const mapRef = useRef();

  const handleStateClick = (stateName, position) => {
    setSelectedState(stateName);
    setActivePopup(stateName);
    if (mapRef.current) {
      mapRef.current.flyTo(position, 7, { duration: 1.5 });
    }
  };

  const customMarkerIcon = new L.DivIcon({
    className: "custom-icon",
    html: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32">
              <path fill="red" d="M12 2C8.1 2 5 5.1 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.9-3.1-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z"/>
          </svg>`,
    iconSize: [64, 64],
    iconAnchor: [16, 32],
  });

  const sliderSettings = {
    dots: false,
    infinite: true, // Enables looping
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true, // Enables autoplay
    autoplaySpeed: 3000, // Adjusts autoplay interval in milliseconds (e.g., 3 seconds)
    responsive: [
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="relative w-full h-[750px]">
        <MapContainer
          center={[20.9517, 85.0985]}
          zoom={5}
          className="relative w-full h-full z-10"
          scrollWheelZoom={false}
          whenCreated={(map) => (mapRef.current = map)}
        >
          <TileLayer
            attribution='&copy; <a href="https://stadiamaps.com/" target="_blank">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a>'
            url={`https://tiles.stadiamaps.com/tiles/stamen_toner/{z}/{x}/{y}{r}.png?api_key=${api_key}`}
          />

          {states.map((state) => (
            <Marker
              key={state.name}
              position={state.position}
              icon={customMarkerIcon}
              eventHandlers={{
                click: () => handleStateClick(state.name, state.position),
              }}
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
                selectedState === state.name
                  ? "bg-red-600"
                  : "bg-gray-500 hover:bg-gray-700"
              }`}
            >
              {state.name}
            </button>
          ))}
        </div>
      </div>

      {selectedState && (
        <div className="mt-8 w-full max-w-7xl px-8">
          <Heading
            text="WHERE WE WORK!"
            color="text-black"
            bgColor="bg-red-600"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-8 mb-8">
            {districts[selectedState]?.map((district) => (
              <div
                key={district.name}
                className="border relative rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                <Link to={district.path}>
                  <img
                    src={district.image}
                    alt={district.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-4 absolute bg-white/60 bottom-0">
                    <h3 className="text-lg lg:text-2xl text-red-600 font-bold">
                      {district.name}
                    </h3>
                  </div>
                </Link>
              </div>
            ))}
          </div>

          {/* Latest Section */}
          <Heading text="Latest" color="text-black" bgColor="bg-red-600" />
          <Slider {...sliderSettings} className="w-full px-8">
            {latestNews[selectedState]?.map((news, index) => (
              <div key={index} className="p-4">
                <div className="bg-white shadow rounded-lg overflow-hidden">
                  <img
                    src={news.image}
                    alt={news.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <p className="text-sm text-gray-500">{news.date}</p>
                    <h3 className="font-semibold text-lg">{news.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </Slider>

          {/* Impact Section */}
          <Heading text="Impact" color="text-black" bgColor="bg-red-600" />
          <div className="p-8 bg-gray-100 rounded-lg shadow-lg">
            <p className="text-lg text-gray-700 mb-4">
              {impactData[selectedState]?.description}
            </p>
            <div className="grid grid-cols-4 sm:grid-cols-4 gap-4">
              {impactData[selectedState]?.stats.map((stat, index) => (
                <div key={index} className="p-4 bg-white rounded shadow">
                  <h4 className="text-xl font-bold text-red-600">
                    {stat.value}
                  </h4>
                  <p className="text-gray-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeroBanner;
