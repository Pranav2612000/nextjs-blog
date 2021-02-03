import React from 'react';
import MostCommonVisasCard from './MostCommonVisasCard';

const MostCommonVisas = () => {
  return (
    <div className="mx-5 mt-10">
      <div>
        <div className="font-sfprobold text-2xl my-2">
          Most Common Visas
        </div>
        <div className="font-sfprolight text-sm">
          Lorem ipsum dolor sit amet, consectetur
        </div>
      </div>
      <div className="flex flex-row">
        <MostCommonVisasCard/>
        <MostCommonVisasCard/>
      </div>
    </div>
  );
}
export default MostCommonVisas;
