import React from "react";

const InclusivenessAndDiversity = () => {
  return (
    <div className="bg-gray-50 py-12 px-6">
      <div className="container mx-auto">
        {/* Breadcrumb Section */}
        <nav className="text-sm text-gray-600 mb-6">
          <ol className="list-reset flex">
            <li>
              <a href="/careers" className="text-red-600 font-semibold hover:underline">
                Careers
              </a>
            </li>
            <li>
              <span className="mx-2">/</span>
            </li>
            <li className="text-gray-800 font-semibold">
                Life-at-Pantiss
            </li>
            <li>
              <span className="mx-2">/</span>
            </li>
            <li className="text-gray-800 font-semibold">
              Inclusive-and-Diversity
            </li>
          </ol>
        </nav>

        {/* Heading */}
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
          What Does Inclusion and Diversity Mean at Pantiss Foundation?
        </h1>

        {/* Image */}
        <div className="w-full mb-8">
          <img
            src="https://res.cloudinary.com/dgtc2fvgu/image/upload/v1735192753/blogs_copltg.jpg"
            alt="Diversity at Pantiss"
            className="rounded-lg shadow-lg object-cover w-full h-auto"
          />
        </div>

        {/* Content Sections */}
        <div className="space-y-12">
          {/* Section 1 */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Disability Inclusion
            </h2>
            <p className="text-gray-700 leading-relaxed">
              At Pantiss Foundation, we strive to include individuals with
              disabilities into the workforce by providing accessible workspaces
              and equal opportunities. Our programs focus on training and
              upskilling to help people with disabilities find sustainable
              employment. In collaboration with local governments, we’ve
              successfully integrated more than 500 individuals with varying
              disabilities into meaningful roles.
            </p>
          </div>

          {/* Section 2 */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Gender Mainstreaming
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Gender equality is at the heart of everything we do at Pantiss.
              Over 60% of our programs are designed to empower women, with
              special focus on those in rural and underserved communities. From
              vocational training to leadership workshops, Pantiss equips women
              with the skills needed to achieve economic independence.
            </p>
          </div>

          {/* Section 3 */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Cultural Diversity
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We celebrate cultural diversity at Pantiss by fostering an
              inclusive workplace that respects the traditions and values of
              every individual. Our workforce includes people from various
              ethnic, linguistic, and cultural backgrounds, which strengthens
              our ability to deliver impactful solutions to complex social
              challenges.
            </p>
          </div>

          {/* Section 4 */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Diversity in Action
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Inclusion is more than a policy at Pantiss; it is embedded in our
              everyday actions. Through initiatives like the Skill and
              Employment Drive, we’ve trained over 10,000 youth from tribal and
              rural backgrounds, equipping them with employable skills and
              opportunities to thrive in competitive job markets.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InclusivenessAndDiversity;
