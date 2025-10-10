import React from 'react';
import Heading from "../../Common/Heading";

const Socials = () => {
  const socialProfiles = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/company/pantiss/',
      icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z',
      color: 'bg-blue-700',
      feedUrl: 'https://www.linkedin.com/embed/feed/update/urn:li:activity:7366812752662683648',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/pantiss1/',
      icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.948-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z',
      color: 'bg-pink-600',
      feedUrl: 'https://www.instagram.com/p/DPfp6F1kpYY/embed/',
    },
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/pan.tiss.18',
      icon: 'M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12V13H9.691v-3.657h2.309V7.413c0-2.287 1.389-3.53 3.415-3.53 1.115 0 2.075.083 2.354.12v2.73h-1.614c-1.267 0-1.51.602-1.51 1.485v1.946h3.023l-.394 3.657h-2.629V24h5.145c.732 0 1.325-.593 1.325-1.325V1.325C24 .593 23.407 0 22.675 0z',
      color: 'bg-blue-600',
      feedUrl: 'https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fpan.tiss.18&tabs=timeline&width=300&height=400&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true',
    },
    // {
    //   name: 'Twitter/X',
    //   url: 'https://x.com/Pantiss2',
    //   icon: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z',
    //   color: 'bg-black',
    //   feedUrl: 'https://x.com/Pantiss2',
    // },
  ];

  const getFeedEmbed = (profile) => {
    switch (profile.name) {
      case 'LinkedIn':
        return (
          profile.feedUrl ? (
            <div className="linkedin-post w-full h-96">
              <script src="https://platform.linkedin.com/in.js" type="text/javascript">lang: en_US</script>
              <script type="IN/Embed" data-id={profile.feedUrl}></script>
            </div>
          ) : (
            <div className="w-full h-96 bg-gray-100 flex items-center justify-center text-gray-600 text-sm rounded-lg">
              Visit our <a href={profile.url} target="_blank" rel="noopener noreferrer" className="text-blue-700 underline">LinkedIn page</a> for updates
            </div>
          )
        );
      case 'Instagram':
        return (
          profile.feedUrl ? (
            <iframe
              src={profile.feedUrl}
              title={`${profile.name} Post`}
              className="w-full h-96 border-0 rounded-lg"
              loading="lazy"
              allow="encrypted-media; autoplay; clipboard-write; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <div className="w-full h-96 bg-gray-100 flex items-center justify-center text-gray-600 text-sm rounded-lg">
              Visit our <a href={profile.url} target="_blank" rel="noopener noreferrer" className="text-pink-600 underline">Instagram page</a> for updates
            </div>
          )
        );
      case 'Facebook':
        return (
          profile.feedUrl ? (
            <iframe
              src={profile.feedUrl}
              title={`${profile.name} Feed`}
              className="w-full h-96 border-0 rounded-lg"
              scrolling="no"
              allow="encrypted-media; autoplay; clipboard-write; picture-in-picture"
              allowFullScreen
              loading="lazy"
            />
          ) : (
            <div className="w-full h-96 bg-gray-100 flex items-center justify-center text-gray-600 text-sm rounded-lg">
              Visit our <a href={profile.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Facebook page</a> for updates
            </div>
          )
        );
      case 'Twitter/X':
        return (
          profile.feedUrl ? (
            <a
              className="twitter-timeline w-full h-96"
              href={profile.feedUrl}
              data-width="100%"
              data-height="400"
              data-theme="light"
            >
              Tweets by Pantiss2
            </a>
          ) : (
            <div className="w-full h-96 bg-gray-100 flex items-center justify-center text-gray-600 text-sm rounded-lg">
              Visit our <a href={profile.url} target="_blank" rel="noopener noreferrer" className="text-black underline">Twitter/X page</a> for updates
            </div>
          )
        );
      default:
        return (
          <div className="w-full h-96 bg-gray-100 flex items-center justify-center text-gray-600 text-sm rounded-lg">
            Feed unavailable
          </div>
        );
    }
  };

  return (
    <section className="py-12 bg-red-600">
      <div className="container mx-auto px-4">
        <Heading text="JOIN THE CONVERSATION" color="text-white" bgColor="bg-white" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {socialProfiles.map((profile) => (
            <div key={profile.name} className="flex flex-col">
              {/* Profile Link Card */}
              <a
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex flex-col items-center p-6 rounded-t-lg shadow-lg transition-shadow ${profile.color} text-white transform hover:scale-105`}
              >
                <svg
                  className="w-12 h-12 mb-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d={profile.icon} />
                </svg>
                <h3 className="text-xl font-semibold">{profile.name}</h3>
                <p className="text-sm opacity-80">Visit our {profile.name} profile</p>
              </a>
              {/* Feed Embed */}
              <div className={`p-4 bg-white rounded-b-lg shadow-lg ${profile.color === 'bg-black' ? 'border-t border-gray-200' : ''}`}>
                {getFeedEmbed(profile)}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Load Twitter Widgets Script */}
      <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
    </section>
  );
};

export default Socials;