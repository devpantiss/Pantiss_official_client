const Stats = () => {
    const stats = [
      { value: 17, label: "Cohorts" },
      { value: 270, label: "Fellows" },
      { value: 50, label: "Partners" },
      { value: 20, label: "Team & Mentors" },
    ];
  
    return (
      <div
        className="relative bg-fixed bg-center bg-cover h-full lg:h-[40vh] py-6 flex items-center"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dgtc2fvgu/image/upload/v1737008646/WhatsApp_Image_2025-01-16_at_11.52.30_AM_fnv3iz.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 text-white grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col py-4 ring-2 ring-gray-400 hover:ring-white items-center">
              <p className="text-5xl font-bold">{stat.value}</p>
              <p className="text-lg mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Stats;
  