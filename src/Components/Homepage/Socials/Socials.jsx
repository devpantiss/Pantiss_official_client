import React, { useEffect } from "react";
import Heading from "../../Common/Heading";

const socialProfiles = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/company/pantiss/",
    brandBg: "bg-blue-700",
    iconPath:
      "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zM7.119 20.452H3.555V9h3.564v11.452z",
    feedUrl:
      "https://www.linkedin.com/embed/feed/update/urn:li:activity:7366812752662683648",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/pantiss1/",
    brandBg: "bg-pink-600",
    iconPath:
      "M12 2.163c3.204 0 3.584.012 4.85.07...",
    feedUrl: "https://www.instagram.com/p/DPfp6F1kpYY/embed/",
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/pan.tiss.18",
    brandBg: "bg-blue-600",
    iconPath:
      "M22.675 0H1.325C.593 0 0 .593...",
    feedUrl:
      "https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fpan.tiss.18&tabs=timeline&width=340&height=420&small_header=true&adapt_container_width=true",
  },
];

const Socials = () => {
  // Load LinkedIn script once
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://platform.linkedin.com/in.js";
    script.async = true;
    script.type = "text/javascript";
    script.innerHTML = "lang: en_US";
    document.body.appendChild(script);
  }, []);

  const renderFeed = (profile) => {
    if (!profile.feedUrl) {
      return (
        <div className="flex h-full items-center justify-center text-sm text-gray-500">
          Visit our{" "}
          <a
            href={profile.url}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-1 font-medium underline"
          >
            {profile.name}
          </a>
        </div>
      );
    }

    return (
      <iframe
        src={profile.feedUrl}
        title={`${profile.name} Feed`}
        className="w-full h-full border-0"
        loading="lazy"
        allow="encrypted-media; autoplay; clipboard-write; picture-in-picture"
        allowFullScreen
      />
    );
  };

  return (
    <section className="bg-red-600 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <Heading
          text="JOIN THE CONVERSATION"
          color="text-white"
          bgColor="bg-white"
        />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {socialProfiles.map((profile) => (
            <div
              key={profile.name}
              className="flex flex-col overflow-hidden rounded-xl bg-white shadow-xl"
            >
              {/* Header */}
              <a
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`${profile.brandBg} text-white p-6 flex items-center gap-4`}
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white/20">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d={profile.iconPath} />
                  </svg>
                </div>

                <div>
                  <h3 className="text-lg font-semibold">
                    {profile.name}
                  </h3>
                  <p className="text-sm opacity-90">
                    Follow us on {profile.name}
                  </p>
                </div>
              </a>

              {/* Feed */}
              <div className="h-[420px] bg-gray-50">
                {renderFeed(profile)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Socials;
