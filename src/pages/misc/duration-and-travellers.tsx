import React from "react";
import Datepicker from "../../components/form/Datepicker";
import Numberpicker from "../../components/form/Numberpicker";
import Button from "../../components/form/Button";

const Form = () => {
  return (
    <div className="flex items-top w-full bg-blue-50">
      <div className="w-full bg-white rounded shadow-lg md:max-w-sm md:mx-auto md:mt-5 md:mb-5">
        <div className="bg-white">
          <div>
            <Numberpicker label="Select no. of travellers"/>
          </div>
          <div className="h-px bg-black bg-gray-100">
          </div>
          <div>
            <Datepicker label="Select duration"/>
          </div>
          <div>
            <Button text="Done" isDataValid={true}/> 
          </div>
        </div>
      </div>
    </div>
  );
};
export default Form;
