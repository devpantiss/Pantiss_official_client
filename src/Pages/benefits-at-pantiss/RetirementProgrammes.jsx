import React from "react";

const RetirementProgrammes = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-md">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-600 mb-4">
        <ol className="list-reset flex">
          <li>
            <a href="/careers" className="text-red-600 hover:underline font-semibold">
              Careers
            </a>
          </li>
          <li>
            <span className="mx-2">/</span>
          </li>
          <li className="text-gray-800 font-semibold">
              Benefits
          </li>
          <li>
            <span className="mx-2">/</span>
          </li>
          <li className="text-gray-800 font-semibold">Retirement Programmes</li>
        </ol>
      </nav>

      {/* Header */}
      <h1 className="text-2xl font-bold text-gray-800 mb-6">
        Starting a New Chapter After Retirement
      </h1>

      {/* Image and Caption */}
      <div className="mb-6">
        <img
          src="https://res.cloudinary.com/dgtc2fvgu/image/upload/v1736151874/Screenshot_2025-01-06_at_1.54.11_PM_mdvxxy.png"
          alt="Retirement Celebration"
          className="w-full h-auto rounded-md"
        />
      </div>

      {/* Content */}
      <div className="text-gray-700 space-y-4">
        <p>
          The Pantiss Foundation values the contributions of its team members
          who dedicate their careers to creating a meaningful impact. As a token
          of gratitude, we ensure a smooth transition into retirement by
          offering comprehensive benefits tailored to honor their service and
          support their future.
        </p>
        <p>
          Our retirement benefits include provident funds, bonuses, and other
          financial support designed to help retirees embark on a new chapter
          with confidence. These benefits recognize the dedication and hard work
          of our team members, ensuring they feel appreciated and financially
          secure.
        </p>
        <p>
          Many of our retired team members continue to inspire the next
          generation by sharing their experiences and insights. Their legacy
          lives on through their contributions to the Foundation’s mission of
          fostering positive change in communities worldwide.
        </p>
        <p>
          The Pantiss Foundation also provides a detailed retirement guide,
          offering resources and advice to help retirees navigate this new phase
          of life. This guide reflects our commitment to supporting our team
          members, not just during their tenure but throughout their lives.
        </p>
        <p className="font-semibold text-gray-800">
          At the Pantiss Foundation, retirement is not the end of a journey but
          the beginning of a new one. We celebrate the achievements of our team
          members and ensure they feel valued, respected, and prepared for the
          next stage of their lives.
        </p>
      </div>
    </div>
  );
};

export default RetirementProgrammes;
