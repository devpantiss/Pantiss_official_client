import React from 'react';

const CareerDevelopment = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-600 mb-4">
        <ol className="list-reset flex">
          <li><a href="/careers" className="text-red-600 font-semibold hover:underline">Careers</a></li>
          <li><span className="mx-2">/</span></li>
          <li className="text-gray-800 font-semibold">Benefits</li>
          <li><span className="mx-2">/</span></li>
          <li className="text-gray-800 font-semibold">Career Development</li>
        </ol>
      </nav>

      {/* Header */}
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        Fast-tracked career development through leadership initiatives
      </h1>

      {/* Image */}
      <div className="mb-6">
        <img
          src="https://res.cloudinary.com/dgtc2fvgu/image/upload/e_improve/v1735392458/WhatsApp_Image_2024-12-28_at_6.56.50_PM_r6gleo.jpg"
          alt="Group of leaders at a summit"
          className="rounded-lg shadow-md w-full"
        />
        <p className="text-sm text-gray-600 mt-2">
          Members of the Pantiss Foundation at the Global Leadership Summit. The foundation supports sustainable health, education, and community programs.
        </p>
      </div>

      {/* Content */}
      <div className="text-gray-700 space-y-4">
        <p>
          <strong>Pantiss Foundation prompted me to take on responsibility from the start of my career.</strong>
          I became the youngest senior coordinator in the organization in 2020.
        </p>
        <p>
          Throughout the years, I gained hands-on learning experience in finding solutions to the toughest 
          socioeconomic challenges prevalent in our society. As a young professional, I was deployed as a 
          project coordinator for Pantiss Community Outreach.
        </p>
        <p>
          I worked as a regional manager after that and eventually as a training coordinator. Being a young 
          professional, my first job after graduating was life-changing. When I was first sent to the field as a coordinator-in-training, I was out of my element. Working in remote regions strengthened my skills, and I knew that development work was the career path I wanted to follow.
        </p>
        <p>
          I traveled to the US to pursue a Master’s in Global Development with a full scholarship from the University 
          of Chicago. I rejoined the Pantiss Foundation upon returning, where I now oversee multiple leadership 
          initiatives.
        </p>
        <p>
          Pantiss Foundation has provided me with numerous opportunities to represent our community on the 
          global stage. I aspire to keep learning and help others to do the same.
        </p>
        <p>
          Pantiss has a strong focus on building seasoned development practitioners and leaders who are ready to 
          take on challenges and be a part of solutions in the development sector. Leadership initiatives provide staff 
          with fast-tracked career development prospects, offering hands-on training, sector-specific knowledge, 
          and exposure to leadership roles. High-performing staff are recognized for their potential and trained 
          through a year-long program featuring close mentorship, advanced training, and special assignments.
        </p>
      </div>
    </div>
  );
};

export default CareerDevelopment;
