import React from 'react';
import WhySMVReason from './WhySMVReason';

const WhySMV = () => {
  return (
    <div className="mx-5 mt-10 text-white">
      <div className="px-5 py-5 bg-green-600">
        <div className="font-sfprobold text-2xl mb-2">
          Why Stamp My Visa
        </div>
        <div className="font-sfprolight text-sm pr-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
      </div>
      <div className="bg-green-700 pl-5 pb-5 flex flex-row flex-wrap">
        <WhySMVReason/>
        <WhySMVReason/>
        <WhySMVReason/>
        <WhySMVReason/>
      </div>
    </div>
  );
};
export default WhySMV;
