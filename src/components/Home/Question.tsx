import React, {useState} from 'react';

const Question = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="my-4">
      <div className="flex flex-row">
        <div className="text-md font-sfproregular w-4/5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </div>
        <div className="w-1/5">
          { isOpen == false ? (
            <img className="mt-2 float-right clear-right" src="/assets/images/plus.png" onClick={() => setIsOpen(true)}/>
          ) : (
            <img className="float-right clear-right" src="/assets/images/minus.png" onClick={() => setIsOpen(false)}/>
          )
          }
        </div>
      </div>
      { isOpen && (
        <div className="mt-5 w-4/5 font-sfprolight text-sm text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet
        </div>
      )
      }
    </div>
  );
};
export default Question;
