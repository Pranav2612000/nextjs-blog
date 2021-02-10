import React from 'react';
import ProcessCard from './ProcessCard';

const Process = () => {
  return (
    <div className="mx-5 mt-10 text-white">
      <div className="px-5 py-5 bg-ochre-200">
        <div className="font-sfprobold text-2xl mb-2">
          Our Process
        </div>
        <div className="font-sfprolight text-sm pr-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        </div>
      </div>
      <div className="bg-ochre-400 pl-5 py-5 flex flex-row flex-nowrap overflow-auto">
        <ProcessCard/>
        <ProcessCard/>
      </div>
    </div>
  );
};
export default Process;
