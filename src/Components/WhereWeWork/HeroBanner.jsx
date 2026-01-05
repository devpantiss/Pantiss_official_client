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
      name: "Angul",
      path: "/where-we-work/odisha/angul",
      image:
        "https://placenameswallah.com/wp-content/uploads/2022/03/gallery_Nalco_steelPlant.jpg",
      tags: ["Mining Skill Hub", "Youth Empowerment", "Green Jobs"],
    },
    {
      name: "Jajpur",
      path: "/where-we-work/odisha/jajpur",
      image:
        "https://jcdnimz.net.in/portals/0/banner_2_1.jpg",
      tags: ["Industrial Growth", "Skill on Wheels", "Women Workforce"],
    },
    {
      name: "Jharsuguda",
      path: "/where-we-work/odisha/jharsuguda",
      image:
        "https://assets.odishabytes.com/wp-content/uploads/2019/01/Coalfields-Mine-1024x536.jpg",
      tags: ["Mining Innovation", "Community Training", "Sustainability"],
    },
    {
      name: "Sundargarh",
      path: "/where-we-work/odisha/sundargarh",
      image:
        "https://etimg.etb2bimg.com/photo/107493161.cms",
      tags: ["Skill Development", "Industrial Growth", "Livelihood Support"],
    },
    {
      name: "Keonjhar",
      path: "/where-we-work/odisha/keonjhar",
      image:
        "https://media.licdn.com/dms/image/v2/D5612AQGMx5v9jjJw2w/article-cover_image-shrink_720_1280/B56ZfVQ9NoHQAQ-/0/1751629683001?e=2147483647&v=beta&t=HclDciDA6ZlKIAiXbSvf-7njtdzfbWnx_OFUgeW3fs4",
      tags: ["Mining Excellence", "Youth Empowerment", "Local Enterprises"],
    },
    {
      name: "Kalahandi",
      path: "/where-we-work/odisha/kalahandi",
      image:
        "https://missionshakti.odisha.gov.in/sites/default/files/2022-03/kalanandi.jpg",
      tags: ["Agri Skilling", "Women Empowerment", "Rural Innovation"],
    },
  ],

  Jharkhand: [
    {
      name: "Bokaro",
      path: "/where-we-work/jharkhand/bokaro",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Bokaro_Steel_Plant_.jpg/1200px-Bokaro_Steel_Plant_.jpg",
      tags: ["Mining Safety", "Skill Centers", "Green Transition"],
    },
    {
      name: "Koderma",
      path: "/where-we-work/jharkhand/koderma",
      image:
        "https://shubhdeepinfra.com/wp-content/uploads/2025/04/marcin-jozwiak-uKvPDQop-JA-unsplash-1024x682.jpg",
      tags: ["Micro Enterprises", "Eco Mining", "Job Creation"],
    },
    {
      name: "Dhanbad",
      path: "/where-we-work/jharkhand/dhanbad",
      image:
        "https://www.industrialvalvesmanufacturers.in/images/products/img-fuel-handling-plant.jpg",
      tags: ["Mining Skills", "Community Welfare", "Just Transition"],
    },
  ],

  Assam: [
    {
      name: "Guwahati",
      path: "/where-we-work/assam/guwahati",
      image:
        "https://img.etimg.com/thumb/width-420,height-315,imgsize-112984,resizemode-75,msid-92525472/news/science/iit-guwahati-develops-new-method-to-mitigate-acid-mine-drainage-in-coal-mines-of-north-east-india/coal-mining.jpg",
      tags: ["Agri Training", "Renewable Energy", "Community Resilience"],
    },
    {
      name: "Dispur",
      path: "/where-we-work/assam/dispur",
      image:
        "https://www.sksispat.com/assets/images/sks-keyword-image/ferro-alloys-manufacturers-in-india.webp",
      tags: ["Resettlement Support", "Livelihood Programs", "Women Skill Hub"],
    },
  ],

  "Tamil Nadu": [
    {
      name: "Neyveli",
      path: "/where-we-work/tamil-nadu/neyveli",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Mine_IA%2C_Neyveli_NLCIL.jpg/330px-Mine_IA%2C_Neyveli_NLCIL.jpg",
      tags: ["Mining Workforce", "Technology Training", "Safety Education"],
    },
  ],

  Chhattisgarh: [
    {
      name: "Korba",
      path: "/where-we-work/Chhattisgarh/korba",
      image:
        "https://dakshinakosala.com/wp-content/uploads/2024/07/GevraKusmunda-DakshinaKosala-scaled.jpg",
      tags: ["Green Mining", "Land Restoration", "Youth Employment"],
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
        "https://res.cloudinary.com/dxzhnns58/image/upload/v1761769356/Theoryofchange_deta48.jpg",
    },
    {
      date: "February 10, 2025",
      title:
        "Rehabilitation efforts boost livelihoods in mining-affected villages",
      description:
        "In a significant push toward improving quality of life, rehabilitation efforts in Odisha’s mining-affected villages have yielded remarkable results. These programs, supported by government and NGO partnerships, have introduced vocational training, microfinance opportunities, and infrastructure development, benefiting over 2,500 families. New initiatives include the establishment of community centers and agricultural cooperatives, which are creating sustainable income sources and reducing dependency on mining-related jobs.",
      image:
        "https://res.cloudinary.com/dxzhnns58/image/upload/v1761811413/adil-edin-OXtsxcb9E2c-unsplash_frmhlq.jpg",
    },
    {
      date: "February 25, 2025",
      title:
        "Odisha to develop model mining villages for displaced communities",
      description:
        "The Odisha state government has announced an innovative plan to construct model mining villages designed to provide a sustainable future for communities displaced by mining operations. These villages will feature modern amenities such as solar-powered electricity, clean water systems, schools, and healthcare facilities. The project, set to begin in mid-2025, aims to resettle over 3,000 families while promoting environmental conservation and community-driven economic growth in the region.",
      image:
        "https://res.cloudinary.com/dxzhnns58/image/upload/v1761736121/model_village_mjlwam.jpg",
    },
    {
      date: "March 05, 2025",
      title:
        "Enterprise growth in mining-affected regions drives local economy",
      description:
        "A surge in small business enterprises and cooperatives in Odisha’s mining-affected regions is revitalizing the local economy. Supported by government incentives and private investments, these ventures range from handicraft production to agro-processing units, employing hundreds of locals. This growth not only diversifies income sources but also reduces the economic vulnerability of communities previously reliant on mining, marking a significant step toward long-term prosperity and stability.",
      image:
        "https://res.cloudinary.com/dxzhnns58/image/upload/v1761812540/Women-in-leadership-img_pkmbjz.jpg",
    },
  ],
  Jharkhand: [
    {
      date: "January 18, 2025",
      title: "Jharkhand's RPL program upskills workers in the mining sector",
      description:
        "Jharkhand’s Recognition of Prior Learning (RPL) program has emerged as a game-changer for the state’s mining workforce. Targeting experienced but uncertified miners, the initiative has certified over 800 workers in its initial phase, providing them with formal qualifications in mining operations, safety standards, and machinery maintenance. This upskilling effort is enhancing employability, improving workplace safety, and aligning the workforce with modern industry demands.",
      image:
        "https://res.cloudinary.com/dxzhnns58/image/upload/v1761813688/istockphoto-1125843699-612x612_hlzyea.jpg",
    },
    {
      date: "February 20, 2025",
      title: "Just transition: Jharkhand pilots sustainable mining practices",
      description:
        "As part of its commitment to a just transition, Jharkhand has launched pilot projects to implement sustainable mining practices across key districts. These initiatives focus on reducing carbon emissions, minimizing water pollution, and adopting eco-friendly extraction methods. Backed by international funding and technical expertise, the projects aim to balance economic benefits with environmental preservation, setting a precedent for sustainable resource management in India’s mining sector.",
      image:
        "https://res.cloudinary.com/dxzhnns58/image/upload/v1761813314/mike-erskine-GKFsewk-hz0-unsplash_lgih44.jpg",
    },
    {
      date: "March 01, 2025",
      title: "Mine reclamation project restores biodiversity in Jharkhand",
      description:
        "A groundbreaking mine reclamation project in Jharkhand has successfully transformed several abandoned mining sites into flourishing green spaces. By planting native trees, restoring soil health, and creating water bodies, the initiative has revitalized ecosystems, supporting the return of local wildlife and plant species. Spanning over 500 hectares, this effort not only combats environmental degradation but also serves as a model for ecological restoration in mining-heavy regions.",
      image:
        "https://res.cloudinary.com/dxzhnns58/image/upload/v1761813314/khanh-do-TL0PvYz_Nfk-unsplash_qrkmnl.jpg",
    },
  ],
  Assam: [
    {
      date: "January 25, 2025",
      title: "Agriculture skilling initiatives empower farmers in Assam",
      description:
        "Assam’s agriculture sector is witnessing a transformation through skilling initiatives designed to empower smallholder farmers. These programs, rolled out across rural districts, provide training in organic farming, crop diversification, and water management techniques. With over 1,200 farmers enrolled, the initiative has boosted agricultural yields, improved food security, and increased household incomes, strengthening the state’s rural economy amidst changing environmental challenges.",
      image:
        "https://res.cloudinary.com/dxzhnns58/image/upload/v1761814803/steven-weeks-DUPFowqI6oI-unsplash_zldrnq.jpg",
    },
    {
      date: "February 15, 2025",
      title: "Just transition: Moving away from coal dependency in Assam",
      description:
        "Assam is taking bold steps toward a just transition by reducing its historical dependency on coal through strategic investments in renewable energy and alternative livelihoods. Solar and wind energy projects are being prioritized, alongside training programs for coal workers to shift into green industries. This multi-pronged approach aims to preserve jobs, protect the environment, and build a resilient economy for future generations in the state.",
      image:
        "https://res.cloudinary.com/dxzhnns58/image/upload/v1761814789/anders-j-hxUcl0nUsIY-unsplash_t6mnw9.jpg",
    },
    {
      date: "March 10, 2025",
      title: "Resettlement program helps displaced mining families in Assam",
      description:
        "A newly launched resettlement program in Assam is providing hope to families displaced by mining activities in the state’s coal-rich areas. The initiative offers modern housing, access to education and healthcare, and vocational training to over 600 families. By integrating community input into the planning process, the program ensures sustainable livelihoods and social stability, addressing long-standing challenges faced by mining-affected populations.",
      image:
        "https://res.cloudinary.com/dxzhnns58/image/upload/v1761814794/jp-sheard-K6Ud3t3uJTc-unsplash_gbq200.jpg",
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
        "https://res.cloudinary.com/dxzhnns58/image/upload/v1761813985/WhatsApp_Image_2025-09-03_at_7.27.27_PM_hnzywi.jpg",
    },
    {
      date: "January 25, 2025",
      title: "Agriculture skilling initiatives empower farmers in Assam",
      description:
        "Assam’s agriculture sector is witnessing a transformation through skilling initiatives designed to empower smallholder farmers. These programs, rolled out across rural districts, provide training in organic farming, crop diversification, and water management techniques. With over 1,200 farmers enrolled, the initiative has boosted agricultural yields, improved food security, and increased household incomes, strengthening the state’s rural economy amidst changing environmental challenges.",
      image:
        "https://res.cloudinary.com/dxzhnns58/image/upload/v1761814803/steven-weeks-DUPFowqI6oI-unsplash_zldrnq.jpg",
    },
  ],
  Chhattisgarh: [
    {
      date: "January 28, 2025",
      title: "Chhattisgarh focuses on mine reclamation and land restoration",
      description:
        "Chhattisgarh is leading the way in mine reclamation with a comprehensive strategy to restore lands degraded by decades of mining. The state’s efforts include reforestation, soil stabilization, and water conservation projects, covering over 700 hectares. Supported by scientific research and community participation, this initiative is not only repairing ecosystems but also creating new opportunities for agriculture and eco-tourism in affected areas.",
      image:
        "https://res.cloudinary.com/dxzhnns58/image/upload/v1761813824/aditya-shrivastava-yYPcqVU6IEI-unsplash_rja5sb.jpg",
    },
    {
      date: "February 18, 2025",
      title: "New skilling centers to support sustainable mining jobs",
      description:
        "Chhattisgarh has opened a series of advanced skilling centers to prepare workers for sustainable mining jobs that align with global environmental standards. These centers offer training in green mining technologies, renewable energy integration, and waste management, targeting over 900 participants in their first phase. The initiative reflects the state’s commitment to balancing economic growth with ecological responsibility in its mining sector.",
      image:
        "https://res.cloudinary.com/dxzhnns58/image/upload/v1761813875/GMC06072025_170825_qsx9f7.jpg",
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
