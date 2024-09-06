import React from 'react';

const Heading = ({ text,color,bgColor }) => {
  return (
    <div className="text-center my-10">
      <h2 className={`text-4xl font-bold ${color}`}>{text}</h2>
      <div className={`w-16 h-1 ${bgColor} mx-auto mt-2`}></div>
    </div>
  );
};

export default Heading;
