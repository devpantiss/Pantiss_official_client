import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const DistrictCards = ({ districts }) => {
  return (
    <section className="relative py-12 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {districts?.map((district, i) => (
            <motion.div
              key={district.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <Link
                to={district.path}
                className="group relative block overflow-hidden rounded-2xl ring-4 ring-red-500 shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                {/* Background Image */}
                <img
                  src={district.image}
                  alt={district.name}
                  className="w-full h-72 object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                  loading="lazy"
                />

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-80 group-hover:opacity-100 transition-all duration-500" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl md:text-2xl font-bold text-green-500 drop-shadow-md mb-1">
                    {district.name}
                  </h3>
                  <div className="h-[2px] w-12 bg-green-500 mb-3 group-hover:w-20 transition-all duration-500" />
                  <p className="text-sm text-gray-200 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    Discover training, initiatives, and industrial programs in{" "}
                    {district.name}.
                  </p>
                </div>

                {/* Accent Border */}
                <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-green-500/50 transition-all duration-500" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DistrictCards;
