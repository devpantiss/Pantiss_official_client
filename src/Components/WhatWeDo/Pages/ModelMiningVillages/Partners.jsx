import React from "react";
import Heading from "../../../Common/Heading";

const PartnersModelVillage = () => {
  return (
    <section className="container mx-auto mb-6">
      <Heading
        text="DONORS & PARTNERS"
        color="text-black"
        bgColor="bg-red-600"
      />
      <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
        {[
          "https://bracinternational.org/wp-content/uploads/2024/09/GAC-Logo.webp",
          "https://bracinternational.org/wp-content/uploads/2024/09/UNDP-logo-orignal.webp",
          "https://bracinternational.org/wp-content/uploads/2024/09/UNWOMEN-logo.webp",
          "https://bracinternational.org/wp-content/uploads/2025/01/usaid-logo.webp",
          "https://bracinternational.org/wp-content/uploads/2025/01/WDIO-logo.webp",
        ].map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`Donor ${index + 1}`}
            className="w-full h-22 object-contain"
          />
        ))}
      </div>
    </section>
  );
};

export default PartnersModelVillage;
