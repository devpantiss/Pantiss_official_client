import React from "react";

const Newsletter = () => {
  return (
    <section className="bg-gray-100 py-10 px-4 rounded-lg">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-red-600 mb-4">PANTISS Newsletter</h2>
        <p className="text-lg text-gray-700 mb-6">
          Please provide your email address to subscribe to our newsletter
        </p>
        <form className="flex justify-center items-center max-w-full mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full p-3 rounded-l-md border-2 border-r-0 border-gray-300 outline-none"
            required
          />
          <button
            type="submit"
            className="bg-red-600 text-white font-semibold px-6 py-3 rounded-r-md transition-colors hover:bg-red-700"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
