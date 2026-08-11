const Banner = () => {
  return (
    <section className="relative bg-gray-50">
      {/* Background Image Section */}
      <div
        className="relative w-full h-[118vh] bg-cover flex justify-center items-center bg-center"
        style={{
          backgroundImage:
            "url('/assets/summit/tribal.avif')",
        }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 justify-center items-center">
          {/* Content Box for Desktop View */}
          <div className="flex flex-col justify-start items-start bg-opacity-80 p-6 rounded shadow-md lg:block">
            <h1 className="text-5xl font-bold mb-4 text-white">
              Asia’s Largest Mining Villages Summit
            </h1>
            <p className="text-lg mb-6 text-white">Date: March 15, 2025</p>
            <button
              type="button"
              disabled
              aria-label="Summit participation registration is coming soon"
              className="inline-flex cursor-not-allowed items-center rounded-full border border-white/30 bg-white/15 px-6 py-3 font-semibold text-white shadow-lg backdrop-blur-sm"
            >
              Participation Coming Soon
            </button>
          </div>
          <div></div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
