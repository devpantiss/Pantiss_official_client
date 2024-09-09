import React, { useRef, useState } from 'react';
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
        textBgColor: 'navy',
    },
    {
        title: 'Goal 1: No Poverty',
        description: 'UNIDO seeks to ensure that the benefits of industrialization are shared by all, that the living conditions of all are sustainably improved, and that no one is left behind.',
        bgImage: 'https://i.postimg.cc/Y2WHNcwR/yannis-h-ua-Pa-EM7-Mi-QQ-unsplash.jpg',
        textBgColor: '#E5243B',
    },
    {
        title: 'Goal 2: Zero Hunger',
        description: 'UNIDO supports value addition to agricultural output, and helps reduce post-harvest losses and increase resource efficiency, while generating job opportunities for rural communities and increasing food security, food safety and nutrition, particularly through agri-business development and upgrading agro-food value chains.',
        bgImage: 'https://i.postimg.cc/sDCRwnjr/edmund-lou-dc-PTh-E8-G59-E-unsplash.jpg',
        textBgColor: '#DDA63A', // Yellow
    },
    {
        title: 'Goal 3: Good Health and Well-Being',
        description: 'UNIDO supports the development and upgrading of the pharmaceutical industry in developing countries for the local production of essential generic drugs and the provision of necessary appliances to the health industry, while also working to reduce pollution from industry and protecting consumer health through the implementation of food safety and sanitary standards.',
        bgImage: 'https://i.postimg.cc/V63cygXX/aman-shrivastava-w6caoa-Jz-XIE-unsplash.jpg',
        textBgColor: '#4C9F38', // Green
    },
    {
        title: 'Goal 4: Quality Education',
        description: 'UNIDO supports the development of entrepreneurial culture and skills, provides technical and vocational training, and helps enhancing young people’s skills and knowledge for employment, decent jobs and entrepreneurship.',
        bgImage: 'https://i.postimg.cc/Y2WHNcwR/yannis-h-ua-Pa-EM7-Mi-QQ-unsplash.jpg',
        textBgColor: '#C5192D', // Dark Red
    },
    {
        title: 'Goal 5: Gender Equality',
        description: 'UNIDO supports women in acquiring skills and gaining access to productive and financial resources that allow them to compete effectively in the economic life of their communities.',
        bgImage: 'https://i.postimg.cc/pd6w8CG3/himanshu-singh-gurjar-i-Si02-D-Qx-w-unsplash.jpg',
        textBgColor: '#FF3A21', // Bright Red
    },
    {
        title: 'Goal 6: Clean water and Sanitation',
        description: 'UNIDO assists countries with the transfer of best available technologies and environmental practices to improve industrial and municipal water management and productivity, and helps prevent the discharge of industrial effluents into international waters (rivers, lakes, wetlands, and coastal areas).',
        bgImage: 'https://i.postimg.cc/RhKxvtTy/shihab-hossain-Ldhv-zy2-B6-Y-unsplash.jpg',
        textBgColor: '#26BDE2', // Cyan
    },
    {
        title: 'Goal 7: Affordable and Clean energy',
        description: 'UNIDO promotes energy efficiency policies, technologies and practices, as well as access to affordable renewable sources of energy for the facilitation of productive activities, providing countries an opportunity to follow a low-carbon and low-emissions growth path.',
        bgImage: 'https://www.unido.org/sites/default/files/2022-12/sdg-2.png',
        textBgColor: '#FCC30B', // Yellow-Orange
    },
    {
        title: 'Goal 8: Decent work and Economic Growth',
        description: 'UNIDO facilitates structural transformation and economic growth by increasing the capacities of local industries for value addition, economic diversification, and export promotion, as well as supports the creation of decent jobs in industry and industry-related services.',
        bgImage: 'https://www.unido.org/sites/default/files/2022-12/sdg-2.png',
        textBgColor: '#A21942', // Dark Red-Violet
    },
    {
        title: 'Goal 9: Industry, Innovation and Infrastructure',
        description: 'UNIDO seeks to advance poverty eradication and inclusiveness, build productive capacities in an inclusive manner, and provide more opportunities for all women and men as well as across social groups, also through partnerships with all stakeholders involved in industrialization processes.',
        bgImage: 'https://www.unido.org/sites/default/files/2022-12/sdg-2.png',
        textBgColor: '#FD6925', // Orange
    },
    {
        title: 'Goal 10: Reduced Inequalities',
        description: 'UNIDO promotes greater productivity, stable employment, and increased incomes, and improves economic opportunities between and within populations, countries and regions with the aim to reach vulnerable groups, including young people, women, migrants and minorities, and a focus on pro-poor enterprise initiatives, agro-industries, greater value-addition, women and youth entrepreneurship, as well as human security issues in post-crisis situations.',
        bgImage: 'https://www.unido.org/sites/default/files/2022-12/sdg-2.png',
        textBgColor: '#DD1367', // Pink
    },
    {
        title: 'Goal 11: Sustainable cities and Communities',
        description: 'UNIDO promotes smart industries and industrial clusters in urban industrial zones that spur innovation, resource efficiency and industrial competitiveness while linking local business with global markets and supply chains.',
        bgImage: 'https://www.unido.org/sites/default/files/2022-12/sdg-2.png',
        textBgColor: '#FD9D24', // Orange-Yellow
    },
    {
        title: 'Goal 12: Responsible consumption and production',
        description: 'UNIDO promotes green industries, resource efficient management, cleaner production, energy efficiency in industry, reduction of waste and pollution, and environmental sustainability policies in industrial production and consumption, such as the circular economy approach.',
        bgImage: 'https://i.postimg.cc/VL9PTjvb/marshall-minzz-o8-Jydv-DO4-U-unsplash.jpg',
        textBgColor: '#BF8B2E', // Dark Yellow
    },
    {
        title: 'Goal 13: Climate action',
        description: 'UNIDO promotes the reduction of industrial CO2 and other greenhouse gas emissions, including through sustainable energy solutions and the uptake of resource-efficient technologies and practices, and cleaner production in industrial processes.',
        bgImage: 'https://www.unido.org/sites/default/files/2022-12/sdg-2.png',
        textBgColor: '#3F7E44', // Dark Green
    },
    {
        title: 'Goal 14: Life below water',
        description: 'UNIDO supports efforts to reduce the detrimental industrial impacts on water bodies through sound water management methodologies and system introduction, and strategic partnerships to protect coastal and maritime habitats and ecosystems, as well as helps to improve fisheries incomes by encouraging regional cooperation, capacity building and technology, etc.',
        bgImage: 'https://www.unido.org/sites/default/files/2022-12/sdg-2.png',
        textBgColor: '#0A97D9', // Blue
    },
    {
        title: 'Goal 15: Life on Land',
        description: 'UNIDO aims at improving rural livelihoods, food security and agricultural production in a sustainable manner and promotes technologies that ensure sustainable management of the soils and the generation of highly productive renewable resources, while supporting the adaptation and adoption of resource efficient and cleaner production methods, technologies and systems.',
        bgImage: 'https://www.unido.org/sites/default/files/2022-12/sdg-2.png',
        textBgColor: '#56C02B', // Green
    },
    {
        title: 'Goal 16: Peace, justice and strong institutions',
        description: 'UNIDO supports the restoration of economic activities and empowerment of communities affected by crises, and strengthens the capacities of governments and small and medium-sized enterprises to apply human rights principles and business ethics to industrial development, thus enhancing human security.',
        bgImage: 'https://www.unido.org/sites/default/files/2022-12/sdg-2.png',
        textBgColor: '#00689D', // Blue-Dark
    },
    {
        title: 'Goal 17: Partnerships for the goals',
        description: 'UNIDO facilitates international cooperation, multi-stakeholder partnerships and the alignment of public and private investments and industrial policies - UNIDO conducts capacity-building, including on trade-related national capacities - UNIDO fosters technology exchange mechanisms, technology policy coordination measures and related investment opportunities - UNIDO provides technical and statistical support to the monitoring and review of the SDGs',
        bgImage: 'https://www.unido.org/sites/default/files/2022-12/sdg-2.png',
        textBgColor: '#19486A', // Dark Blue
    },
];

const SDGBanner = () => {
    return (
    <div className=""> {/* Adjusting the margin to accommodate the fixed header */}
      <Swiper
        direction={"vertical"}
        slidesPerView={1}
        spaceBetween={0}
        mousewheel={true}
        pagination={{ clickable: true }}
        modules={[Mousewheel, Pagination]}
        className="h-[90vh]"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="w-full h-screen bg-cover bg-center flex items-center justify-center"
              style={{
                backgroundImage: `url(${slide.bgImage})`,
              }}
            >
              {/* Content box on the slide */}
              <div 
                className="absolute bottom-0 left-0 lg:w-[800px] p-6 rounded-lg text-center"
                style={{
                    backgroundColor: slide.textBgColor,
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                }}
              >
                <h2 className="text-4xl font-bold text-white mb-4">
                  {slide.title}
                </h2>
                <p className="text-lg text-white">{slide.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    );
};

export default SDGBanner;
