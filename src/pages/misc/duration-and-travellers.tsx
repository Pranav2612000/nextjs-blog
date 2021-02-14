import React from "react";
import Datepicker from "../../components/form/Datepicker";

const Form = () => {
  return (
    <div className="flex items-top w-full bg-blue-50">
      <div className="w-full bg-white rounded shadow-lg md:max-w-sm md:mx-auto md:mt-5 md:mb-5">
        <div className="bg-white">
          <div>
          </div>
          <div>
            <Datepicker label="Select duration"/>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Form;
