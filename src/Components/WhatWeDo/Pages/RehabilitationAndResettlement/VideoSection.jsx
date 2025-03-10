import React from "react";
import ReactPlayer from "react-player/youtube"; // Import react-player for YouTube
import Heading from "../../../Common/Heading";

const VideoSectionRehab = () => {
  const adbAchievements = [
    "Set clear climate investment targets to achieve $100 billion annually by 2030—a target it met in 2019, 11 years ahead of schedule.",
    "Implement a long-term climate change operational framework for its operations.",
    "Establish a climate risk screening and management framework for all its climate projects.",
    "Disclose project-level data for all its climate projects.",
    "Be accredited by the Green Climate Fund.",
  ];

  const mdbSupport = [
    {
      text: "Transition Calls for 'Just, Equitable Transition Toward Net Zero'",
      link: "#",
    },
    {
      text: "ADB President Calls for 'Bold Action' on Climate Change",
      link: "#",
    },
    {
      text: "Asia and the Pacific's Green Economic Reset",
      link: "#",
    },
  ];

  return (
    <section className="bg-white py-12 px-6 relative">
      {/* Background Image (Optional) */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{
          backgroundImage: `url('https://via.placeholder.com/1920x600')`, // Replace with actual background image (e.g., solar panels)
        }}
        aria-hidden="true"
      />

      <div className="container mx-auto max-w-7xl relative">
        <Heading
          text="EIA/SIA AT A GLANCE"
          color="text-black"
          bgColor="bg-red-600"
        />
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Column: Video and Title */}
          <div className="md:w-1/2">
            <p className="text-gray-600 text-lg mb-6">
              We work with governments and civil society to mobilize financing
              and implement cutting-edge knowledge.
            </p>
            <div className="relative mb-4">
              <ReactPlayer
                url="https://www.youtube.com/watch?v=RWtT0EfhNsE" // YouTube video URL
                width="100%"
                height="450px" // Matches h-64 (256px)
                playing={false} // Auto-play off by default
                controls={true} // Show YouTube controls
                className="rounded-md"
                config={{
                  youtube: {
                    playerVars: { modestbranding: 1 }, // Minimal branding
                  },
                }}
              />
              <div className="absolute bottom-2 left-2 text-white text-sm bg-black bg-opacity-75 px-2 py-1 rounded">
                0:00 / 1:14
              </div>
            </div>
            <h2 className="text-lg font-bold text-gray-800">
              Why ADB is Asia and the Pacific’s Climate Bank
            </h2>
          </div>

          {/* Right Column: Achievements */}
          <div className="md:w-1/2">
            {/* ADB Logo
            <div className="mb-6">
              <img
                src="https://via.placeholder.com/100x40?text=ADB" 
                alt="ADB Logo"
                className="h-8"
              />
            </div> */}

            {/* ADB Achievements */}
            <div className="mb-8">
              <h3 className="text-lg font-bold text-gray-800 mb-4">
                ADB is the first Multilateral Development Bank (MDB) to:
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600 text-base">
                {adbAchievements.map((achievement, index) => (
                  <li key={index}>{achievement}</li>
                ))}
              </ul>
            </div>

            {/* MDB Support */}
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-4">
                MDBs to Expand the Support for Countries Seeking
                Climate-Resilient Sustainable Transition
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600 text-base">
                {mdbSupport.map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.link}
                      className="text-red-600 font-bold underline hover:text-blue-800"
                    >
                      {item.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSectionRehab;
