import React from 'react';

const ProcessCard = (props) => {
  return (
    <div className="bg-white flex flex-row px-4 py-4 mr-5">
      <div className="bg-ochre-200 w-10 h-10 rounded-full flex items-center justify-center">
        1
      </div>
      <div className="ml-3 font-sfprolight text-sm text-black w-36">
        <span className="flex items-center h-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </span>
      </div>
    </div>
  );
};
export default ProcessCard;
