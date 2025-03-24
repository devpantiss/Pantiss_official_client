import React, { useState } from "react";
import MapSection from "./MapSection";
import DistrictCards from "./DistrictCards";
import NewsSlider from "./NewsSlider";
import ImpactSection from "./ImpactSection";
import Stories from "./Stories";
import Heading from "../Common/Heading";

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
        "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1737443051/Chennai_vkkosd.jpg",
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
      description:
        "Pantiss, in collaboration with local authorities and industry experts, has launched an ambitious skilling program aimed at empowering the youth in mining communities across Odisha. The initiative offers comprehensive training in modern mining techniques, safety protocols, and equipment handling, targeting over 1,000 participants in its first year. By equipping young individuals with employable skills, the program seeks to reduce unemployment and foster sustainable development in regions heavily impacted by mining activities.",
      image:
        "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1738938422/dhanbad_t9agnb.jpg",
    },
    {
      date: "February 10, 2025",
      title:
        "Rehabilitation efforts boost livelihoods in mining-affected villages",
      description:
        "In a significant push toward improving quality of life, rehabilitation efforts in Odisha’s mining-affected villages have yielded remarkable results. These programs, supported by government and NGO partnerships, have introduced vocational training, microfinance opportunities, and infrastructure development, benefiting over 2,500 families. New initiatives include the establishment of community centers and agricultural cooperatives, which are creating sustainable income sources and reducing dependency on mining-related jobs.",
      image:
        "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1737007534/WhatsApp_Image_2025-01-15_at_7.39.25_PM_v3ned2.jpg",
    },
    {
      date: "February 25, 2025",
      title:
        "Odisha to develop model mining villages for displaced communities",
      description:
        "The Odisha state government has announced an innovative plan to construct model mining villages designed to provide a sustainable future for communities displaced by mining operations. These villages will feature modern amenities such as solar-powered electricity, clean water systems, schools, and healthcare facilities. The project, set to begin in mid-2025, aims to resettle over 3,000 families while promoting environmental conservation and community-driven economic growth in the region.",
      image:
        "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1735196020/model_village_dz36fg.jpg",
    },
    {
      date: "March 05, 2025",
      title:
        "Enterprise growth in mining-affected regions drives local economy",
      description:
        "A surge in small business enterprises and cooperatives in Odisha’s mining-affected regions is revitalizing the local economy. Supported by government incentives and private investments, these ventures range from handicraft production to agro-processing units, employing hundreds of locals. This growth not only diversifies income sources but also reduces the economic vulnerability of communities previously reliant on mining, marking a significant step toward long-term prosperity and stability.",
      image:
        "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1739280958/WhatsApp_Image_2025-02-01_at_7.15.33_PM_wxkfmj.jpg",
    },
  ],
  Jharkhand: [
    {
      date: "January 18, 2025",
      title: "Jharkhand's RPL program upskills workers in the mining sector",
      description:
        "Jharkhand’s Recognition of Prior Learning (RPL) program has emerged as a game-changer for the state’s mining workforce. Targeting experienced but uncertified miners, the initiative has certified over 800 workers in its initial phase, providing them with formal qualifications in mining operations, safety standards, and machinery maintenance. This upskilling effort is enhancing employability, improving workplace safety, and aligning the workforce with modern industry demands.",
      image:
        "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1735915960/WhatsApp_Image_2025-01-03_at_7.09.25_PM_1_pmya7b.jpg",
    },
    {
      date: "February 20, 2025",
      title: "Just transition: Jharkhand pilots sustainable mining practices",
      description:
        "As part of its commitment to a just transition, Jharkhand has launched pilot projects to implement sustainable mining practices across key districts. These initiatives focus on reducing carbon emissions, minimizing water pollution, and adopting eco-friendly extraction methods. Backed by international funding and technical expertise, the projects aim to balance economic benefits with environmental preservation, setting a precedent for sustainable resource management in India’s mining sector.",
      image:
        "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1738924847/jharsuguda_zlzcyq.avif",
    },
    {
      date: "March 01, 2025",
      title: "Mine reclamation project restores biodiversity in Jharkhand",
      description:
        "A groundbreaking mine reclamation project in Jharkhand has successfully transformed several abandoned mining sites into flourishing green spaces. By planting native trees, restoring soil health, and creating water bodies, the initiative has revitalized ecosystems, supporting the return of local wildlife and plant species. Spanning over 500 hectares, this effort not only combats environmental degradation but also serves as a model for ecological restoration in mining-heavy regions.",
      image:
        "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1738935983/dry-hill-sunny-day_hgnuof.jpg",
    },
  ],
  Assam: [
    {
      date: "January 25, 2025",
      title: "Agriculture skilling initiatives empower farmers in Assam",
      description:
        "Assam’s agriculture sector is witnessing a transformation through skilling initiatives designed to empower smallholder farmers. These programs, rolled out across rural districts, provide training in organic farming, crop diversification, and water management techniques. With over 1,200 farmers enrolled, the initiative has boosted agricultural yields, improved food security, and increased household incomes, strengthening the state’s rural economy amidst changing environmental challenges.",
      image:
        "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1739292358/crops-growing-in-thailand_uc3ttv.jpg",
    },
    {
      date: "February 15, 2025",
      title: "Just transition: Moving away from coal dependency in Assam",
      description:
        "Assam is taking bold steps toward a just transition by reducing its historical dependency on coal through strategic investments in renewable energy and alternative livelihoods. Solar and wind energy projects are being prioritized, alongside training programs for coal workers to shift into green industries. This multi-pronged approach aims to preserve jobs, protect the environment, and build a resilient economy for future generations in the state.",
      image:
        "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1739294514/cls-open-pit-mining_pbeseo.jpg",
    },
    {
      date: "March 10, 2025",
      title: "Resettlement program helps displaced mining families in Assam",
      description:
        "A newly launched resettlement program in Assam is providing hope to families displaced by mining activities in the state’s coal-rich areas. The initiative offers modern housing, access to education and healthcare, and vocational training to over 600 families. By integrating community input into the planning process, the program ensures sustainable livelihoods and social stability, addressing long-standing challenges faced by mining-affected populations.",
      image:
        "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1738994534/diverse-people-refugee-camps_uuu6by.jpg",
    },
  ],
  "Tamil Nadu": [
    {
      date: "February 22, 2025",
      title:
        "Mining skilling centers launched to support workforce development",
      description:
        "Tamil Nadu has inaugurated a network of state-of-the-art mining skilling centers aimed at bolstering workforce development in the state’s mining sector. These facilities offer specialized courses in advanced mining technologies, occupational safety, and environmental management, catering to both new entrants and seasoned workers. With a capacity to train 1,500 individuals annually, the centers are poised to enhance productivity and safety standards across the industry.",
      image:
        "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1735195121/vocational_acvsf1.jpg",
    },
  ],
  Chhattisgarh: [
    {
      date: "January 28, 2025",
      title: "Chhattisgarh focuses on mine reclamation and land restoration",
      description:
        "Chhattisgarh is leading the way in mine reclamation with a comprehensive strategy to restore lands degraded by decades of mining. The state’s efforts include reforestation, soil stabilization, and water conservation projects, covering over 700 hectares. Supported by scientific research and community participation, this initiative is not only repairing ecosystems but also creating new opportunities for agriculture and eco-tourism in affected areas.",
      image:
        "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1735376736/vladimir-patkachakov-Mx6Xmf_nbRk-unsplash_ej5umt.jpg",
    },
    {
      date: "February 18, 2025",
      title: "New skilling centers to support sustainable mining jobs",
      description:
        "Chhattisgarh has opened a series of advanced skilling centers to prepare workers for sustainable mining jobs that align with global environmental standards. These centers offer training in green mining technologies, renewable energy integration, and waste management, targeting over 900 participants in their first phase. The initiative reflects the state’s commitment to balancing economic growth with ecological responsibility in its mining sector.",
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
      "Jharkhand has transformed its rural areas with modern infrastructure and clean water initiatives.",
    stats: [
      { label: "Families Impacted", value: "40,000+" },
      { label: "Projects Completed", value: "150+" },
      { label: "Projects Completed", value: "150+" },
      { label: "Projects Completed", value: "150+" },
    ],
  },
  Assam: {
    description:
      "Assam has strengthened its economy through trade and renewable energy projects.",
    stats: [
      { label: "Families Impacted", value: "30,000+" },
      { label: "Projects Completed", value: "120+" },
      { label: "Projects Completed", value: "120+" },
      { label: "Projects Completed", value: "120+" },
    ],
  },
  "Tamil Nadu": {
    description:
      "Tamil Nadu has achieved milestones in mining safety and green energy development.",
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

const HeroBanner = () => {
  const [selectedState, setSelectedState] = useState("Odisha");

  const handleStateClick = (stateName, position) => {
    setSelectedState(stateName);
  };

  return (
    <div className="flex flex-col">
      <MapSection
        states={states}
        selectedState={selectedState}
        onStateClick={handleStateClick}
      />
      {selectedState && (
        <div className="mt-8 w-full">
          <div className="mx-auto max-w-7xl px-6">
            <Heading
              text="WHERE WE WORK!"
              color="text-black"
              bgColor="bg-red-600"
            />
          </div>
          <DistrictCards districts={districts[selectedState]} />
          <ImpactSection impact={impactData[selectedState]} />

          <NewsSlider news={latestNews[selectedState]} />
        </div>
      )}

      <Stories />
    </div>
  );
};

export default HeroBanner;
