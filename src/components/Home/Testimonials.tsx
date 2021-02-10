import React from 'react';
import TestimonialCard from './TestimonialCard';

const Testimonials = () => {
  return (
    <div className="mx-5 mt-10">
      <div>
        <div className="font-sfprobold text-2xl my-2">
          People love us
        </div>
      </div>
      <div className="flex flex-row flex-nowrap overflow-auto">
        <TestimonialCard/>
        <TestimonialCard/>
      </div>
    </div>
  );
};
export default Testimonials;
