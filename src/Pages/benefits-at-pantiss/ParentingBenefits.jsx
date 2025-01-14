import React from 'react';

const ParenthoodArticle = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-600 mb-4">
        <ol className="list-reset flex">
          <li><a href="/careers" className="text-red-600 font-semibold hover:underline">Careers</a></li>
          <li><span className="mx-2">/</span></li>
          <li className="font-semibold text-gray-800">Benefits</li>
          <li><span className="mx-2">/</span></li>
          <li className="font-semibold text-gray-800">Parenting Benefits</li>
        </ol>
      </nav>

      {/* Header */}
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        Ensuring the best start to parenthood
      </h1>

      {/* Image */}
      <div className="mb-6">
        <img
          src="https://res.cloudinary.com/dgtc2fvgu/image/upload/v1735392306/pexels-william-fortunato-6392819_speall.jpg"
          alt="Father with his daughter at daycare"
          className="rounded-lg shadow-md w-full"
        />
        <p className="text-sm text-gray-600 mt-2">
          Happy father Sanzid Hasan Himel pictured with his daughter at Dolna, Pantiss Foundation's daycare center at the Head Office. Himel is a Project Manager in Pantiss's Technology department.
        </p>
      </div>

      {/* Content */}
      <div className="text-gray-700 space-y-4">
        <p>
          <strong>Being actively present in every aspect of my newborn's life is a priority for me.</strong>
          Both parents must play equal roles in raising a child.
        </p>
        <p>
          As a Pantiss employee, I was entitled to a month of paid paternity leave from work. I was able to spend 
          uninterrupted time with my partner and newborn after her birth. I had the option of availing paternity leave 
          within six months from the date of delivery, and it makes me happy that the same policy applies to 
          colleagues who choose to adopt children.
        </p>
        <p>
          <strong>As a new father, it was more than just leave</strong> - it allowed me to be a constant presence during 
          the early days of our newborn's life, as well as support my partner who was recovering from childbirth. 
          My wife, who also works at Pantiss, availed six months of paid maternity leave, and she also had the 
          option to extend her leave for six months. When we both went back to work, we kept our baby in Dolna, 
          Pantiss Foundation's head office-based childcare center - so we were still close to her. It made the 
          transition back to the office much easier, and we could still drop in to see her at lunchtimes.
        </p>
        <p>
          Managing work and parenthood simultaneously can be stressful and difficult in the initial months. Pantiss 
          recognizes the needs of new parents to bond with their newborn or adopted child. Maternity and 
          paternity benefit policies offer our staff with gender-inclusive, comprehensive, and need-driven benefits 
          to support all staff during this important life chapter, including support in the case of demise of the 
          newborn. Staff in the head office can avail spots at Dolna, Pantiss's in-house childcare facility to ensure 
          safe supervision of their children within the office premises.
        </p>
      </div>
    </div>
  );
};

export default ParenthoodArticle;