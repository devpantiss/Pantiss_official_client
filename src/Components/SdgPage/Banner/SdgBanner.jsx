import React, { useRef } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Mousewheel, Pagination } from 'swiper/modules';

// Sample goals array
const slides = [
  {
    title: "The SDGs",
    description: 'The Sustainable Development Goals (SDGs) constitute the core of the 2030 Agenda for Sustainable Development and guide all global, regional and national development endeavours until the year 2030.',
    bgImage: 'https://res.cloudinary.com/du3i8e0se/image/upload/v1725794695/wp12016993-sdg-wallpapers_qyjfym.jpg',
    logo: 'https://res.cloudinary.com/dgtc2fvgu/image/upload/v1725876308/vecteezy_sustainable-development-goals-logo-template-illustration_5412443-1-removebg-preview_ueykb8.png',
    textBgColor: 'bg-black',
    gif: false,
  },
  {
    title: 'Goal 1: No Poverty',
    description: 'PANTISS seeks to ensure that the benefits of industrialization are shared by all, that the living conditions of all are sustainably improved, and that no one is left behind.',
    bgImage: 'https://res.cloudinary.com/dgtc2fvgu/image/upload/v1738994534/diverse-people-refugee-camps_uuu6by.jpg',
    logo: 'https://res.cloudinary.com/dgtc2fvgu/image/upload/v1725875000/Goal_1_ztbv1x.jpg',
    gifUrl: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1725875004/Goal_1_GDU_trvacm.gif",
    gif: true,
    textBgColor: 'bg-[#e81f2d]',
  },
  {
    title: 'Goal 2: Zero Hunger',
    description: 'PANTISS supports value addition to agricultural output, and helps reduce post-harvest losses and increase resource efficiency, while generating job opportunities for rural communities and increasing food security, food safety and nutrition, particularly through agri-business development and upgrading agro-food value chains.',
    bgImage: 'https://i.postimg.cc/sDCRwnjr/edmund-lou-dc-PTh-E8-G59-E-unsplash.jpg',
    logo: 'https://res.cloudinary.com/dgtc2fvgu/image/upload/v1725874995/Goal_2_gzyhxw.jpg',
    gifUrl: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1725875006/Goal_2_GDU_is65nb.gif",
    gif: true,
    textBgColor: 'bg-[#d09f2d]', // Yellow
  },
  {
    title: 'Goal 3: Good Health and Well-Being',
    description: 'PANTISS supports the development and upgrading of the pharmaceutical industry in developing countries for the local production of essential generic drugs and the provision of necessary appliances to the health industry, while also working to reduce pollution from industry and protecting consumer health through the implementation of food safety and sanitary standards.',
    bgImage: 'https://res.cloudinary.com/dgtc2fvgu/image/upload/v1725877914/loren-joseph-XoBWUBA3Amg-unsplash_dxal1y.jpg',
    logo: 'https://res.cloudinary.com/dgtc2fvgu/image/upload/v1725874995/Goal_3_orzwqd.jpg',
    gifUrl: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1725874997/Goal_3_GDU_yzqibk.gif",
    gif: true,
    textBgColor: 'bg-[#2b9b4a]', // Green
  },
  {
    title: 'Goal 4: Quality Education',
    description: 'PANTISS supports the development of entrepreneurial culture and skills, provides technical and vocational training, and helps enhancing young people’s skills and knowledge for employment, decent jobs and entrepreneurship.',
    bgImage: 'https://i.postimg.cc/Y2WHNcwR/yannis-h-ua-Pa-EM7-Mi-QQ-unsplash.jpg',
    logo: 'https://res.cloudinary.com/dgtc2fvgu/image/upload/v1725874989/Goal_4_kjq5if.jpg',
    gifUrl: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1725874989/Goal_4_GDU_rshmdw.gif",
    gif: true,
    textBgColor: 'bg-[#c42738]', // Dark Red
  },
  {
    title: 'Goal 5: Gender Equality',
    description: 'PANTISS supports women in acquiring skills and gaining access to productive and financial resources that allow them to compete effectively in the economic life of their communities.',
    bgImage: 'https://i.postimg.cc/pd6w8CG3/himanshu-singh-gurjar-i-Si02-D-Qx-w-unsplash.jpg',
    logo: 'https://res.cloudinary.com/dgtc2fvgu/image/upload/v1725874989/Goal_5_e3jnf4.jpg',
    gifUrl: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1725874995/Goal_5_GDU_tpml38.gif",
    gif: true,
    textBgColor: 'bg-[#ed422b]', // Bright Red
  },
  {
    title: 'Goal 6: Clean water and Sanitation',
    description: 'PANTISS assists countries with the transfer of best available technologies and environmental practices to improve industrial and municipal water management and productivity, and helps prevent the discharge of industrial effluents into international waters (rivers, lakes, wetlands, and coastal areas).',
    bgImage: 'https://res.cloudinary.com/dgtc2fvgu/image/upload/v1725877914/patrick-beznoska-p5tjQydX5J0-unsplash_wp7kek.jpg',
    logo: 'https://res.cloudinary.com/dgtc2fvgu/image/upload/v1725874983/Goal_6_j3mbwk.jpg',
    gifUrl: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1725874987/Goal_6_GDU_ipw1ih.gif",
    gif: true,
    textBgColor: 'bg-[#00acd8]', // Cyan
  },
  {
    title: 'Goal 7: Affordable and Clean energy',
    description: 'PANTISS promotes energy efficiency policies, technologies and practices, as well as access to affordable renewable sources of energy for the facilitation of productive activities, providing countries an opportunity to follow a low-carbon and low-emissions growth path.',
    bgImage: 'https://res.cloudinary.com/dgtc2fvgu/image/upload/v1725878247/sungrow-emea-VC-m6ULjJ6Y-unsplash_yuf2qm.jpg',
    logo: 'https://res.cloudinary.com/dgtc2fvgu/image/upload/v1725874976/Goal_7_enj3as.jpg',
    gifUrl: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1725874983/Goal_7_GDU_wqarkm.gif",
    gif: true,
    textBgColor: 'bg-[#fbb617]', // Yellow-Orange
  },
  {
    title: 'Goal 8: Decent work and Economic Growth',
    description: 'PANTISS facilitates structural transformation and economic growth by increasing the capacities of local industries for value addition, economic diversification, and export promotion, as well as supports the creation of decent jobs in industry and industry-related services.',
    bgImage: 'https://res.cloudinary.com/dgtc2fvgu/image/upload/v1738994695/portrait-man-working-as-engineer_bqm3wo.jpg',
    logo: 'https://res.cloudinary.com/dgtc2fvgu/image/upload/v1725874978/Goal_8_saoq0b.jpg',
    gifUrl: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1725874980/Goal_8_GDU_ivcg0b.gif",
    gif: true,
    textBgColor: 'bg-[#972e47]', // Dark Red-Violet
  },
  {
    title: 'Goal 9: Industry, Innovation and Infrastructure',
    description: 'PANTISS seeks to advance poverty eradication and inclusiveness, build productive capacities in an inclusive manner, and provide more opportunities for all women and men as well as across social groups, also through partnerships with all stakeholders involved in industrialization processes.',
    bgImage: 'https://res.cloudinary.com/dgtc2fvgu/image/upload/v1725877913/viktor-kiryanov-lAcYPEiau0U-unsplash_h8zwz9.jpg',
    logo: 'https://res.cloudinary.com/dgtc2fvgu/image/upload/v1725874967/Goal_9_c0uud3.jpg',
    gifUrl: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1725874977/Goal_9_GDU_rbntk2.gif",
    gif: true,
    textBgColor: 'bg-[#f16d22]', // Orange
  },
  {
    title: 'Goal 10: Reduced Inequalities',
    description: 'PANTISS promotes greater productivity, stable employment, and increased incomes, and improves economic opportunities between and within populations, countries and regions with the aim to reach vulnerable groups, including young people, women, migrants and minorities, and a focus on pro-poor enterprise initiatives, agro-industries, greater value-addition, women and youth entrepreneurship, as well as human security issues in post-crisis situations.',
    bgImage: 'https://i.postimg.cc/V63cygXX/aman-shrivastava-w6caoa-Jz-XIE-unsplash.jpg',
    logo: 'https://res.cloudinary.com/dgtc2fvgu/image/upload/v1725874965/Goal_10_s6xraq.jpg',
    gifUrl: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1725874969/Goal_10_GDU_yjkti0.gif",
    gif: true,
    textBgColor: 'bg-[#de1c84]', // Pink
  },
  {
    title: 'Goal 11: Sustainable cities and Communities',
    description: 'PANTISS promotes smart industries and industrial clusters in urban industrial zones that spur innovation, resource efficiency and industrial competitiveness while linking local business with global markets and supply chains.',
    bgImage: 'https://res.cloudinary.com/dgtc2fvgu/image/upload/v1725878439/zoshua-colah-CYhSY4dT2rg-unsplash_zrxff9.jpg',
    logo: 'https://res.cloudinary.com/dgtc2fvgu/image/upload/v1725874961/Goal_11_gw4ilj.jpg',
    gifUrl: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1725874964/Goal_11_GDU_vdtz1o.gif",
    gif: true,
    textBgColor: 'bg-[#f79c26]', // Orange-Yellow
  },
  {
    title: 'Goal 12: Responsible consumption and production',
    description: 'PANTISS promotes green industries, resource efficient management, cleaner production, energy efficiency in industry, reduction of waste and pollution, and environmental sustainability policies in industrial production and consumption, such as the circular economy approach.',
    bgImage: 'https://res.cloudinary.com/dgtc2fvgu/image/upload/v1738995045/grains-food-mix-wooden-background_pvpqbi.jpg',
    logo: 'https://res.cloudinary.com/dgtc2fvgu/image/upload/v1725874966/Goal_12_jhbwva.jpg',
    gifUrl: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1725874968/Goal_12_GDU_hrxfka.gif",
    gif: true,
    textBgColor: 'bg-[#cd8c2e]', // Dark Yellow
  },
  {
    title: 'Goal 13: Climate action',
    description: 'PANTISS promotes the reduction of industrial CO2 and other greenhouse gas emissions, including through sustainable energy solutions and the uptake of resource-efficient technologies and practices, and cleaner production in industrial processes.',
    bgImage: 'https://res.cloudinary.com/dgtc2fvgu/image/upload/v1725882488/alka-jha-5xwBeArXd1E-unsplash_sembfh.jpg',
    logo: 'https://res.cloudinary.com/dgtc2fvgu/image/upload/v1725874960/Goal_13_bprlxz.jpg',
    gifUrl: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1725874959/Goal_13_GDU_snyse3.gif",
    gif: true,
    textBgColor: 'bg-[#4e7a47]', // Dark Green
  },
  {
    title: 'Goal 14: Life below water',
    description: 'PANTISS supports efforts to reduce the detrimental industrial impacts on water bodies through sound water management methodologies and system introduction, and strategic partnerships to protect coastal and maritime habitats and ecosystems, as well as helps to improve fisheries incomes by encouraging regional cooperation, capacity building and technology, etc.',
    bgImage: 'https://res.cloudinary.com/dgtc2fvgu/image/upload/v1725882258/laurentiu-morariu-NKdX-c5z080-unsplash_pg9zmf.jpg',
    logo: 'https://res.cloudinary.com/dgtc2fvgu/image/upload/v1725874953/Goal_14_dork5r.jpg',
    gifUrl: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1725874955/Goal_14_GDU_rvrhpi.gif",
    gif: true,
    textBgColor: 'bg-[#007cbb]', // Blue
  },
  {
    title: 'Goal 15: Life on Land',
    description: 'PANTISS aims at improving rural livelihoods, food security and agricultural production in a sustainable manner and promotes technologies that ensure sustainable management of the soils and the generation of highly productive renewable resources, while supporting the adaptation and adoption of resource efficient and cleaner production methods, technologies and systems.',
    bgImage: 'https://i.postimg.cc/VL9PTjvb/marshall-minzz-o8-Jydv-DO4-U-unsplash.jpg',
    logo: 'https://res.cloudinary.com/dgtc2fvgu/image/upload/v1725874951/Goal_15_lfbqkj.jpg',
    gifUrl: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1725874955/Goal_15_GDU_sdt25d.gif",
    gif: true,
    textBgColor: 'bg-[#3dae4a]', // Green
  },
  {
    title: 'Goal 16: Peace, justice and strong institutions',
    description: 'PANTISS supports the restoration of economic activities and empowerment of communities affected by crises, and strengthens the capacities of governments and small and medium-sized enterprises to apply human rights principles and business ethics to industrial development, thus enhancing human security.',
    bgImage: 'https://res.cloudinary.com/dgtc2fvgu/image/upload/v1725877417/portrait-smiley-indian-women_afr23u.jpg',
    logo: 'https://res.cloudinary.com/dgtc2fvgu/image/upload/v1725874944/Goal_16_feir8f.jpg',
    gifUrl: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1725874946/Goal_16_GDU_yutbba.gif",
    gif: true,
    textBgColor: 'bg-[#00578b]', // Blue-Dark
  },
  {
    title: 'Goal 17: Partnerships for the goals',
    description: 'PANTISS facilitates international cooperation, multi-stakeholder partnerships and the alignment of public and private investments and industrial policies - PANTISS conducts capacity-building, including on trade-related national capacities - PANTISS fosters technology exchange mechanisms, technology policy coordination measures and related investment opportunities - PANTISS provides technical and statistical support to the monitoring and review of the SDGs',
    bgImage: 'https://www.unido.org/sites/default/files/2022-12/sdg-2.png',
    logo: 'https://res.cloudinary.com/dgtc2fvgu/image/upload/v1725874944/Goal_17_ngnox2.jpg',
    gifUrl: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1725874943/Goal_17_GDU_pje92e.gif",
    gif: true,
    textBgColor: 'bg-[#28426e]', // Dark Blue
  },
];

const SDGBanner = () => {
  const swiperRef = useRef(null);

  const handleScrollDown = () => {
    const scrollPosition = window.scrollY + window.innerHeight;
    window.scrollTo({
      top: scrollPosition,
      behavior: 'smooth',
    });
  };

  return (
    <div className="relative w-full h-[100vh]">
      <Swiper
        direction={"vertical"}
        slidesPerView={1}
        spaceBetween={0}
        mousewheel={true}
        pagination={{
          clickable: true,
          renderBullet: (index, className) => {
            const slideColor = slides[index].textBgColor; // Get the background color for the slide
            return `<span class="${className}" style="background-color: ${slideColor};"></span>`;
          }
        }}
        modules={[Mousewheel, Pagination]}
        className="h-[115vh]"
        onReachEnd={() => handleScrollDown()}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="w-full h-full bg-cover bg-center flex items-center justify-center"
              style={{
                backgroundImage: `url(${slide.bgImage})`,
              }}
            >
              {/* Content box on the slide */}
              <div
                className={`absolute bottom-0 left-0 flex flex-col items-center gap-3 p-4 lg:p-6 lg:w-[800px] w-full h-full lg:h-auto rounded-none lg:rounded-lg
                lg:flex-row lg:bg-opacity-100 bg-opacity-40 ${slide.textBgColor} text-center lg:text-left`}
              >
                <div className="w-36 h-36 lg:w-32 lg:h-32 flex-shrink-0">
                  <img src={slide.logo} alt="logo" className="w-full h-full object-contain" />
                </div>
                <p className="text-sm lg:text-lg text-white flex-grow">{slide.description}</p>
                {slide.gif && (
                  <div className="w-[300px] h-[300px] lg:w-36 lg:h-36 flex-shrink-0">
                    <img src={slide.gifUrl} alt="gif" className="w-full h-full object-contain" />
                  </div>
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Bouncing down arrow button */}
        <div className="absolute bottom-8 right-10 z-50">
          <button
            className="bounce-arrow w-10 h-10 flex items-center justify-center rounded-full bg-white text-black shadow-lg"
            onClick={handleScrollDown}
          >
            ↓
          </button>
        </div>
      </Swiper>
    </div>
  );
};

export default SDGBanner;