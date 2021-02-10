import React from 'react';

const TestimonialCard = (props) => {
  return (
    <div className="mr-4 my-3">
      <div className="w-80 text-sm font-sfprolight text-gray-900 mb-3">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </div>
      <div>
        <div>
          <img src="/assets/images/testimonials_profile_pic.png"/>
        </div>
        <div>
          <div className="text-md font-sfproregular text-gray-700">
            Atul Khola
          </div>
          <div className="text-xs font-sfprolight text-gray-700">
            Product Designer
          </div>
        </div>
      </div>
    </div>
  );
};
export default TestimonialCard;
