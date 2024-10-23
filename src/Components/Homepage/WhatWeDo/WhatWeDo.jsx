import React from 'react';
import Heading from "../../Common/Heading";

const newsData = [
    {
        title: 'WAR IN GAZA',
        image: 'https://i.postimg.cc/Qd7QMSH9/pantiss-2.jpg',
        titleColor: 'text-black',
    },
    {
        title: 'WHAT IS HAPPENING IN SUDAN?',
        image: 'https://i.postimg.cc/Qd7QMSH9/pantiss-2.jpg',
        titleColor: 'text-black',
    },
    {
        title: 'THE MISSING CHILDREN OF GAZA',
        image: 'https://i.postimg.cc/Qd7QMSH9/pantiss-2.jpg',
        titleColor: 'text-red-600',
    },
    {
        title: 'ANOTHER NEWS TITLE',
        image: 'https://i.postimg.cc/Qd7QMSH9/pantiss-2.jpg',
        titleColor: 'text-black',
    },
];

const NewsCardSection = () => {
    return (
        <section className='container mx-auto py-8 px-10 mb-4'>
            <Heading text="WHAT WE DO" color="text-[black]" bgColor="bg-red-600" />
            <div className="py-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                
                    <div className="relative overflow-hidden rounded-lg shadow-lg">
                        <img
                            src="https://i.stci.uk/sites/www.savethechildren.net/files/webp/page_card/GettyImages-1713207425%20dark%20large_0.webp"
                            alt="title"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute left-0 bottom-0">
                            <span className={`inline-block bg-white hover:text-[red] px-2 py-1 leading-[1.5] font-bold text-3xl`}>
                              WAR IN GAZA
                            </span>
                        </div>
                    </div>

                    <div className="relative overflow-hidden rounded-lg shadow-lg">
                        <img
                            src="https://i.stci.uk/sites/www.savethechildren.net/files/webp/page_card/CH11013460_Adit%2C%20who%20fled%20from%20Khartoum%20with%20her%20six%20children%2C%20at%20Joda%20border%20point%20on%20her%20way%20to%20Transit%20Centre%202%2C%20South%20Sudan%20%282%29.webp"
                            alt="HAT IS HAPPENING IN SUDAN?"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute left-0 bottom-0">
                            <span className={`inline-block bg-white hover:text-[red] px-2 py-1 leading-[1.5] font-bold text-3xl`}>
                            WHAT IS HAPPENING <br /> IN SUDAN?                            </span>
                        </div>
                    </div>

                    <div className="relative overflow-hidden rounded-lg shadow-lg">
                        <img
                            src="https://i.stci.uk/sites/www.savethechildren.net/files/webp/page_card/copy-of-missing-children-of-gaza-carousel-facebook-post-thumbnail.webp"
                            alt="THE MISSING CHILDREN OF GAZA"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute left-0 bottom-0">
                            <span className={`inline-block bg-white hover:text-[red] px-2 py-1 leading-[1.5] font-bold text-3xl`}>
                            THE MISSING CHILDREN <br /> OF GAZA                            </span>
                        </div>
                    </div>
            </div>
        </section>
    );
};

export default NewsCardSection;
