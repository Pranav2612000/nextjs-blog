import React, {useState} from "react";

const Numberpicker = (props) => {

  const [value,setValue] = useState(1);

  const increaseValue = () => setValue(value + 1);

  const decreaseValue = () => {
    if(value == 1) {
      return;
    }
    setValue(value - 1);
  };

  return (
    <div>
      <div className="font-sfprolight text-2xl text-gray-500 pt-10 pl-5">
        {props.label}
      </div>
      <div>
        <div className="flex flex-row justify-center align-center my-5 px-10">
          <div className="flex flex-row w-full">
            <div className="cursor-pointer flex justify-center align-center w-1/5" onClick={() => decreaseValue()}>
              <img src="/assets/images/less_than.png"/>
            </div>
            <div className="flex justify-center align-center mx-7 font-sfprosemibold text-xl w-3/5">{value}</div>
            <div className="flex justify-center align-center w-1/5 cursor-pointer" onClick={() => increaseValue()}>
              <img src="/assets/images/greater_than.png"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Numberpicker;
