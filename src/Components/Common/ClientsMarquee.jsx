import React from "react";
import Heading from "./Heading";

const ClientsMarquee = ({
  district = "Keonjhar",
  clients = [],
  speed = 25, // seconds (lower = faster)
}) => {
  return (
    <section className="w-full bg-neutral-50 py-8 overflow-hidden">
      {/* Heading */}
      <div className="mb-4 max-w-7xl mx-auto px-6">
        <Heading text={district} color="text-black" bgColor="bg-red-600" />
        {/* <h3 className="text-lg font-semibold text-neutral-800">
          Clients in {district} District
        </h3> */}
      </div>

      {/* Marquee */}
      <div className="relative overflow-hidden group">
        <div
          className="flex w-max gap-10 animate-marquee group-hover:[animation-play-state:paused]"
          style={{ animationDuration: `${speed}s` }}
        >
          {[...clients, ...clients].map((client, index) => (
            <div
              key={`${client.name}-${index}`}
              className="flex items-center gap-3 px-6 py-3 bg-white rounded-xl shadow-sm border border-neutral-200 hover:shadow-md transition"
            >
              {client.logo && (
                <img
                  src={client.logo}
                  alt={client.name}
                  className="h-20 w-auto object-contain"
                />
              )}
              {/* <span className="text-sm font-medium text-neutral-700 whitespace-nowrap">
                {client.name}
              </span> */}
            </div>
          ))}
        </div>
      </div>

      {/* Animation */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee linear infinite;
        }
      `}</style>
    </section>
  );
};

export default ClientsMarquee;
