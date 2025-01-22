import React, { useMemo } from "react";
import Heading from "../Common/Heading";

const Gallery = () => {
  // Image URLs and their respective grid spans
  const images = useMemo(() => [
    { url: "https://indiacsrsummit.in/new-template/gallery/1.png", span: "" },
    { url: "https://indiacsrsummit.in/new-template/gallery/33.JPG", span: "" },
    { url: "https://indiacsrsummit.in/new-template/gallery/34.JPG", span: "" },
    { url: "https://indiacsrsummit.in/new-template/gallery/29.JPG", span: "" },
    { url: "https://indiacsrsummit.in/new-template/gallery/31.JPG", span: "" },
    {
      url: "https://indiacsrsummit.in/new-template/gallery/8.JPG",
      span: "row-span-2",
    },
    { url: "https://indiacsrsummit.in/new-template/gallery/35.JPG", span: "" },
    { url: "https://indiacsrsummit.in/new-template/gallery/27.JPG", span: "" },
    { url: "https://indiacsrsummit.in/new-template/gallery/32.JPG", span: "" },
    { url: "https://indiacsrsummit.in/new-template/gallery/28.JPG", span: "" },
    { url: "https://indiacsrsummit.in/new-template/gallery/36.JPG", span: "" },
    {
      url: "https://indiacsrsummit.in/new-template/gallery/2.JPG",
      span: "col-span-2",
    },
    { url: "https://indiacsrsummit.in/new-template/gallery/30.JPG", span: "" },
    {
      url: "https://indiacsrsummit.in/new-template/gallery/13.JPG",
      span: "col-span-2",
    },
    { url: "https://indiacsrsummit.in/new-template/gallery/14.JPG", span: "" },
  ], []); // Memoize the image list to avoid re-calculating it on re-renders

  return (
    <section className="py-10 px-6 bg-white">
      <div className="container mx-auto">
        <Heading text="Gallery" color="text-black" bgColor="bg-red-600" />

        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 auto-rows-[200px]">
          {images.map((image, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-lg group ${image.span}`}
            >
              <img
                src={image.url}
                alt={`Gallery Image ${index + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                loading="lazy" // Lazy loading
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;