import React from 'react';
import Question from './Question';

const FAQs = () => {
  return (
    <div className="mx-5 mt-10">
      <div>
        <div className="font-sfprobold text-2xl my-2">
          Frequently Asked Questions
        </div>
      </div>
      <div>
        <Question/>
        <span className="h-0.5 w-full block bg-gray-200"/>
        <Question/>
        <span className="h-0.5 w-full block bg-gray-200"/>
        <Question/>
        <span className="h-0.5 w-full block bg-gray-200"/>
        <Question/>
        <span className="h-0.5 w-full block bg-gray-200"/>
        <Question/>
      </div>
    </div>
  );
};
export default FAQs;
