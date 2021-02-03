import React from 'react';
import OngoingVisasCard from './OngoingVisasCard';

const OngoingVisas = () => {
  return (
    <div className="mx-5">
      <div className="px-5 py-5 bg-green-600 text-white">
        <div>
          <div className="font-sfprobold text-2xl mb-2">
            Ongoing Visas
          </div>
          <div className="font-sfprolight text-sm pr-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
          </div>
        </div>
      </div>
      <div className="bg-green-700 pl-5 py-5">
        <OngoingVisasCard/>
      </div>
    </div>
  );
};
export default OngoingVisas;
