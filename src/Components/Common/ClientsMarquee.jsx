/* eslint-disable react/prop-types */
import Heading from "./Heading";

const ClientsMarquee = ({
  district = "Keonjhar",
  clients = [],
  speed = 25, // seconds (lower = faster)
}) => {
  const shouldAnimate = clients.length > 3;

  const renderClient = (client, key, isDuplicate = false) => (
    <div
      key={key}
      className="flex min-h-28 min-w-48 items-center justify-center rounded-2xl border border-neutral-200 bg-white px-7 py-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md"
      aria-hidden={isDuplicate || undefined}
    >
      {client.logo && (
        <img
          src={client.logo}
          alt={isDuplicate ? "" : `${client.name} logo`}
          className="h-16 w-36 object-contain sm:w-44"
          loading="lazy"
          decoding="async"
        />
      )}
    </div>
  );

  return (
    <section className="w-full overflow-hidden bg-neutral-50 py-10">
      {/* Heading */}
      <div className="mb-4 max-w-7xl mx-auto px-6">
        <Heading text={district} color="text-black" bgColor="bg-red-600" />
        {/* <h3 className="text-lg font-semibold text-neutral-800">
          Clients in {district} District
        </h3> */}
      </div>

      {shouldAnimate ? (
        <div className="group relative overflow-hidden">
          <div
            className="animate-marquee flex w-max gap-8 motion-reduce:animate-none group-hover:[animation-play-state:paused]"
            style={{ animationDuration: `${speed}s` }}
          >
            {clients.map((client) =>
              renderClient(client, `primary-${client.name}`)
            )}
            {clients.map((client) =>
              renderClient(client, `duplicate-${client.name}`, true)
            )}
          </div>
        </div>
      ) : (
        <div
          className={`mx-auto grid grid-cols-1 justify-center gap-5 px-6 ${
            clients.length === 1 ? "max-w-sm" : "max-w-3xl sm:grid-cols-2"
          }`}
        >
          {clients.map((client) =>
            renderClient(client, `static-${client.name}`)
          )}
        </div>
      )}

      {/* Animation */}
      <style>{`
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
