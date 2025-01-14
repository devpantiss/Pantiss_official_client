import React from 'react';

const HealthInsurance = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-600 mb-4">
        <ol className="list-reset flex">
          <li><a href="/careers" className="text-red-600 hover:underline font-semibold">Careers</a></li>
          <li><span className="mx-2">/</span></li>
          <li><a href="/initiatives" className="font-semibold hover:underline">Benefits</a></li>
          <li><span className="mx-2">/</span></li>
          <li className="text-gray-800 font-semibold">Health Insurance</li>
        </ol>
      </nav>

      {/* Header */}
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        Supporting staff and their families through vulnerable times
      </h1>

      {/* Image */}
      <div className="mb-6">
        <img
          src="https://res.cloudinary.com/dgtc2fvgu/image/upload/v1736148776/Screenshot_2025-01-06_at_1.02.25_PM_dzgfly.png"
          alt="Staff member benefiting from health insurance"
          className="rounded-lg shadow-md w-full"
        />
        <p className="text-sm text-gray-600 mt-2">
          Sohail Shafique Chowdhury availed his health insurance benefits last year when he underwent a critical 
          medical surgery. Sohail is the assistant general manager of the Leadership Academy, under Human Resources and Learning Division at Pantiss Foundation.
        </p>
      </div>

      {/* Content */}
      <div className="text-gray-700 space-y-4">
        <p>
          I required two coronary stent placements in my arteries last year. The surgery, hospital stay, and doctor's 
          visits were emotionally and physically gruelling. The mounting expenses of the life-saving medical care 
          I was receiving presented unparalleled stress.
        </p>
        <p>
          As a Pantiss employee, I was covered by a health insurance scheme by default and was eligible to avail 
          the benefit during that pressing hour. This health insurance covered a significant portion of my expenses, 
          including my cabin fees, medicine, surgical charges, consultation fees, medical check-ups, and ambulance 
          fare. Although I stayed in the hospital for three days, it was reassuring to know that my insurance would 
          have covered up to 30 days of hospital stay, and these benefits could still be availed if I chose to seek 
          treatment abroad. I am grateful to know that my spouse and children are also fall under this scheme, 
          and I can avail medical support for them if needed.
        </p>
        <p>
          This benefit was a source of comfort and security during that difficult time. It is a known fact that when you 
          are a part of the Pantiss family, it looks out for you. Speaking from experience, it sure did for me.
        </p>
        <p>
          Pantiss prioritizes good health and wellbeing of its staff body through timely support during their most 
          vulnerable times. Every Pantiss staff in Bangladesh can avail the benefits of health insurance. Each staff 
          member is able to claim up to BDT 100,000 a year for hospital expenses for themselves, spouses, and 
          unmarried dependents up to the age of 25. We hold frequent sessions on crucial health concerns with 
          medical professionals for our staff.
        </p>
      </div>
    </div>
  );
};

export default HealthInsurance;
