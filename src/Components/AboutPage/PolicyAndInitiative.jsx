import React, { useState } from "react";
import Heading from "../Common/Heading";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Reusable Arrow Component (unchanged)
const CustomArrow = ({ className, style, onClick, direction }) => {
  const isPrev = direction === "prev";
  const ariaLabel = isPrev ? "Previous slide" : "Next slide";
  const icon = isPrev ? "<" : ">";

  return (
    <button
      className={`${className} absolute top-1/2 ${
        isPrev ? "left-4" : "right-4"
      } transform -translate-y-1/2 h-12 w-12 bg-red-600 text-white rounded-full flex items-center justify-center cursor-pointer z-20 focus:outline-none focus:ring-2 focus:ring-blue-500 hover:bg-red-700 transition-colors`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
      aria-label={ariaLabel}
      type="button"
    >
      <span className="text-2xl">{icon}</span>
    </button>
  );
};

// Slider settings (unchanged)
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: true,
  prevArrow: <CustomArrow direction="prev" />,
  nextArrow: <CustomArrow direction="next" />,
  centerMode: true,
  centerPadding: "0px",
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        centerMode: true,
        centerPadding: "0px",
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        centerMode: true,
        centerPadding: "0px",
      },
    },
  ],
};

// Modal Component with increased size
const PolicyModal = ({ isOpen, onClose, policy }) => {
  if (!isOpen || !policy) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-8 max-w-3xl w-full mx-6 max-h-[90vh] overflow-y-auto shadow-2xl">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-gray-800">{policy.heading}</h2>
          <button
            onClick={onClose}
            className="text-gray-600 hover:text-gray-800 focus:outline-none transition-colors"
            aria-label="Close modal"
          >
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        <img
          src={policy.image}
          alt={policy.heading}
          className="w-full h-64 object-cover rounded-md mb-6"
        />
        <p className="text-gray-700 text-lg leading-relaxed">
          {policy.fullDescription}
        </p>
      </div>
    </div>
  );
};

const PoliciesAndInitiative = () => {
  const [selectedPolicy, setSelectedPolicy] = useState(null);

  const policies = [
    {
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop&q=60",
      heading: "Procurement Policy",
      description:
        "Ensures transparent, efficient, and ethical sourcing of goods and services to support organizational goals.",
      fullDescription:
        "Our Procurement Policy is a cornerstone of our operational integrity, designed to establish a robust framework that guarantees transparency, competitiveness, and ethical practices in all sourcing activities. This policy mandates a meticulous supplier selection process that prioritizes fairness, cost-effectiveness, and adherence to both legal and environmental standards. By implementing stringent guidelines, we ensure that every procurement decision aligns seamlessly with our overarching mission to deliver sustainable value to our stakeholders. The policy covers a wide range of aspects, including vendor evaluation criteria, contract management protocols, and continuous monitoring to prevent unethical practices such as bribery or favoritism. Additionally, it incorporates sustainability metrics to promote eco-friendly purchasing decisions, fostering partnerships with suppliers who share our commitment to reducing environmental impact. Through regular audits and training programs, we empower our procurement team to uphold these principles, ensuring that every transaction not only meets immediate needs but also contributes to long-term organizational and societal benefits.",
      linkText: "View More",
    },
    {
      image:
        "https://images.unsplash.com/photo-1533073526757-2c8ca1df9f1c?w=800&auto=format&fit=crop&q=60",
      heading: "HR Policy",
      description:
        "Fosters a supportive work environment with clear guidelines on recruitment, development, and employee welfare.",
      fullDescription:
        "The HR Policy at our organization is a comprehensive blueprint crafted to cultivate a workplace that is not only productive but also deeply supportive and inclusive. It provides detailed guidelines covering every facet of human resource management, from recruitment and onboarding to ongoing training, performance evaluations, and employee well-being initiatives. Our recruitment process is designed to attract diverse talent, emphasizing meritocracy while actively promoting equity and inclusion across all levels. Once onboard, employees benefit from structured development programs, including mentorship, skill-building workshops, and leadership training, all tailored to unlock their full potential. The policy also prioritizes employee welfare through competitive benefits, mental health support, and flexible work arrangements, recognizing that a thriving workforce is key to organizational success. To ensure accountability, we conduct regular employee satisfaction surveys and maintain open channels for feedback, allowing us to adapt and refine our approach continually. By fostering a culture of respect, collaboration, and professional growth, this policy ensures that every individual feels valued and empowered to contribute meaningfully to our collective goals.",
      linkText: "View More",
    },
    {
      image:
        "https://images.unsplash.com/photo-1499244571948-7ccddb3583f1?w=800&auto=format&fit=crop&q=60",
      heading: "Prevention of Sexual Exploitation at Workplace Policy",
      description:
        "Commits to a safe, respectful workplace free from harassment and exploitation.",
      fullDescription:
        "The Prevention of Sexual Exploitation at Workplace Policy underscores our unwavering commitment to maintaining a safe, respectful, and harassment-free environment for all employees. This policy is a detailed and proactive framework that explicitly prohibits all forms of sexual exploitation, abuse, and harassment, encompassing physical, verbal, and non-verbal behaviors. It establishes a zero-tolerance stance, supported by robust reporting mechanisms that allow employees to raise concerns confidentially and without fear of retaliation. Detailed procedures outline the steps for investigation, ensuring that all complaints are addressed promptly, impartially, and with the utmost sensitivity. Employees receive mandatory training on recognizing and preventing such behaviors, fostering a culture of awareness and accountability. The policy also includes support systems, such as counseling services and legal assistance, for those affected, ensuring their well-being is prioritized. Regular reviews and updates keep the policy aligned with evolving legal standards and best practices, while leadership commitment reinforces its enforcement. By embedding these principles into our organizational DNA, we aim to create a workplace where respect and dignity are non-negotiable, safeguarding every individual’s right to a secure and equitable work environment.",
      linkText: "View More",
    },
    {
      image:
        "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&auto=format&fit=crop&q=60",
      heading: "Inclusivity Policy",
      description:
        "Promotes diversity and equal opportunities for all, regardless of background or identity.",
      fullDescription:
        "Our Inclusivity Policy is a foundational commitment to fostering a workplace that celebrates diversity and ensures equal opportunities for all, irrespective of gender, race, religion, ethnicity, age, sexual orientation, disability, or any other identity marker. This policy goes beyond compliance, embedding inclusive practices into every aspect of our operations—from recruitment and promotions to team dynamics and decision-making processes. It mandates proactive measures such as unconscious bias training, diverse hiring panels, and accessibility accommodations to dismantle barriers and create a level playing field. Employees are encouraged to bring their whole selves to work, supported by affinity groups, mentorship programs, and policies that address specific needs, such as parental leave or religious observances. The policy also sets measurable diversity goals, tracked through regular reporting, to hold ourselves accountable for progress. By partnering with external organizations and community initiatives, we extend our inclusivity efforts beyond the workplace, amplifying their impact. This comprehensive approach not only enriches our organizational culture but also drives innovation and resilience, ensuring that every voice is heard, valued, and empowered to shape our collective future.",
      linkText: "View More",
    },
  ];

  const handleViewMore = (policy) => {
    setSelectedPolicy(policy);
  };

  const handleCloseModal = () => {
    setSelectedPolicy(null);
  };

  return (
    <section className="bg-red-600 py-16 px-6">
      <div className="container mx-auto max-w-7xl">
        {/* Title */}
        <div className="text-center mb-12">
          <Heading
            text="Policies and Initiatives"
            color="text-white"
            bgColor="bg-white"
          />
        </div>

        {/* Slider */}
        <Slider {...settings} className="relative">
          {policies.map((policy, index) => (
            <div key={index} className="px-4 py-6">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden h-[550px] flex flex-col transition-transform hover:scale-105">
                <img
                  src={policy.image}
                  alt={policy.heading}
                  className="w-full h-64 object-cover"
                  loading="lazy"
                  onError={(e) => {
                    e.target.src = "https://via.placeholder.com/600x400";
                  }}
                />
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    {policy.heading}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-grow">
                    {policy.description}
                  </p>
                  <button
                    onClick={() => handleViewMore(policy)}
                    className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center mt-auto"
                  >
                    <svg
                      className="w-4 h-4 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-2a6 6 0 100-12 6 6 0 000 12z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {policy.linkText}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Slider>

        {/* Modal */}
        <PolicyModal
          isOpen={!!selectedPolicy}
          onClose={handleCloseModal}
          policy={selectedPolicy}
        />

        {/* CSS to hide default arrows */}
        <style jsx>{`
          .slick-arrow.slick-prev,
          .slick-arrow.slick-next {
            display: none !important;
          }
          .slick-dots li button:before {
            font-size: 12px;
            color: #red-600;
          }
          .slick-dots li.slick-active button:before {
            color: #red-600;
          }
        `}</style>
      </div>
    </section>
  );
};

export default PoliciesAndInitiative;