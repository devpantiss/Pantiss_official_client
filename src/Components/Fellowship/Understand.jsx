import Heading from "../Common/Heading";

const Understand = () => {
  const cards = [
    {
      title: "Peep into the fellow life",
      subtitle: "SEE",
      action: "Video",
      image:
        "https://res.cloudinary.com/dgtc2fvgu/image/upload/c_scale,w_800/v1737093457/Anil2_pj0pg9.jpg",
    },
    {
      title: "About our caring hosts",
      subtitle: "READ",
      action: "Hosts",
      image:
        "https://res.cloudinary.com/dgtc2fvgu/image/upload/c_scale,w_800/v1737093456/Read_iqoe7b.jpg",
    },
    {
      title: "To our mentors who nurture",
      subtitle: "LISTEN",
      action: "Mentors",
      image:
        "https://res.cloudinary.com/dgtc2fvgu/image/upload/c_scale,w_800/v1737093456/Continious-learning_wnhkrr.jpg",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <Heading
        text="UNDERSTAND THE JOURNEY BETTER"
        color="text-black"
        bgColor="bg-red-600"
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-lg shadow-lg group"
          >
            {/* Lazy-loaded Image */}
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-70 transition duration-300"></div>
            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-between p-6 text-white">
              <div>
                <p className="text-sm uppercase tracking-widest">
                  {card.subtitle}
                </p>
                <h3 className="text-xl font-semibold mt-2">{card.title}</h3>
              </div>
              <button
                className="self-start bg-white text-black px-4 py-2 rounded-full font-medium transition duration-300 hover:bg-gray-200"
                aria-label={`Learn more about ${card.action}`}
              >
                {card.action}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Understand;
