import React from 'react';
import Input from '../form/Input';

const Hello = () => {
  return (
    <div className="bg-white shadow-lg mx-5 relative -top-5">
      <div className="px-5 pt-5">
        <div className="font-sfprobold text-2xl">
          Hello Atul,
        </div>
        <div className="font-sfprolight text-sm">
          Which country would you like to apply a visa for
        </div>
        <div className="flex my-5">
          <Input placeholder="Seach for any country here"/>
        </div>
      </div>
    </div>
  );
};
export default Hello;
