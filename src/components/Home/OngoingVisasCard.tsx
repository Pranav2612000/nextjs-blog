import React from 'react';

const OngoingVisasCard = (props) => {
  return (
    <div className="flex bg-white w-max">
      <div>
        <img src='/assets/images/aus_ongoing_visa_card.png'/>
      </div>
      <div>
        <div className="font-sfprolight text-gray-500 text-xs px-2 py-1">
          <div className="pb-2 border-b-2 border-gray-300">
            5 Jan 2019 - 10 Jan 2019
          </div>
        </div>
        <div className="px-2 pt-1 font-sfprobold text-sm">
          Australia
        </div>
        <div className="px-2 font-sfprolight text-gray-700 text-xs">
          2 Travellers
        </div>
      </div>
    </div>
  );
};
export default OngoingVisasCard;
