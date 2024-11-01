import React from "react";
import Heading from "../../Common/Heading";
import { Link } from "react-router-dom";

const NewsCardSection = () => {
  return (
    <section className="container mx-auto py-8 px-10 mb-4">
      <Heading text="WHAT WE DO" color="text-[black]" bgColor="bg-red-600" />
      <div className="py-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <div className="relative overflow-hidden rounded-lg shadow-lg">
          <Link to="/whatwedo/social-development">
            <img
              src="https://res.cloudinary.com/dgtc2fvgu/image/upload/v1729513838/PIC-13_ghirsr.jpg"
              alt="title"
              className="w-full h-full object-cover"
            />
            <div className="absolute left-0 bottom-0">
              <span
                className={`inline-block bg-white hover:text-[red] px-2 py-1 leading-[1.5] font-bold text-2xl`}
              >
                SOCIAL <br /> DEVELOPMENT
              </span>
            </div>
          </Link>
        </div>

        <div className="relative overflow-hidden rounded-lg shadow-lg">
          <Link to="/whatwedo/social-enterprises">
            <img
              src="https://res.cloudinary.com/dgtc2fvgu/image/upload/c_crop,ar_1:1/v1730099088/PIC-1_discao.jpg"
              alt="HAT IS HAPPENING IN SUDAN?"
              className="w-full h-full object-cover"
            />
            <div className="absolute left-0 bottom-0">
              <span
                className={`inline-block bg-white hover:text-[red] px-2 py-1 leading-[1.5] font-bold text-2xl`}
              >
                SOCIAL <br /> ENTERPRISES{" "}
              </span>
            </div>
          </Link>
        </div>

        <div className="relative overflow-hidden rounded-lg shadow-lg">
          <Link to="/whatwedo/pantiss-mine-x-sim">
            <img
              src="https://res.cloudinary.com/dgtc2fvgu/image/upload/c_crop,ar_1:1/v1730104339/PIC-35_eodnpq.jpg"
              alt="THE MISSING CHILDREN OF GAZA"
              className="w-full h-full object-cover"
            />
            <div className="absolute left-0 bottom-0">
              <span
                className={`inline-block bg-white hover:text-[red] px-2 py-1 leading-[1.5] font-bold text-2xl`}
              >
                PANTISS <br /> MINE x SIM{" "}
              </span>
            </div>
          </Link>
        </div>

        {/* <div className="relative overflow-hidden rounded-lg shadow-lg">
          <img
            src="https://i.stci.uk/sites/www.savethechildren.net/files/webp/page_card/copy-of-missing-children-of-gaza-carousel-facebook-post-thumbnail.webp"
            alt="THE MISSING CHILDREN OF GAZA"
            className="w-full h-full object-cover"
          />
          <div className="absolute left-0 bottom-0">
            <span
              className={`inline-block bg-white hover:text-[red] px-2 py-1 leading-[1.5] font-bold text-2xl`}
            >
              PANTISS <br /> HAPPINESS PROFESSIONALS
            </span>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default NewsCardSection;
