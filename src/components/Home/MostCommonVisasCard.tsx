import React from 'react';

const MostCommonVisasCard = (props) => {
  return (
    <div className="mr-5 my-3">
      <div>
        <img src="/assets/images/aus_common_visa_card.png"/>
      </div>
      <div>
        <div className="font-sfproregular text-lg">
          Australia
        </div>
        <div className="font-sfprolight text-sm text-gray-600">
          5-6 days
        </div>
      </div>
    </div>
  )
};
export default MostCommonVisasCard;
