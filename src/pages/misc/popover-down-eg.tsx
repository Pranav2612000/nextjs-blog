import React from "react";
import PopoverDown from "../../components/layout/PopoverDown";
import Button from "../../components/form/Button";
import OngoingVisas from "../../components/Home/OngoingVisas";
import MostCommonVisas from "../../components/Home/MostCommonVisas";


const Example = () => {
  return (
    <div className="flex items-top w-full bg-blue-50">
      <div className="w-full h-screen bg-white rounded shadow-lg md:max-w-sm md:mx-auto md:mt-5 md: mb-5">
        <PopoverDown>
          <div>
            <div className="px-7 py-10">
              <div className="font-sfprobold text-xl">
                Hey Atul, Hold on.
              </div>
              <div className="my-2 font-sfprolight text-sm">
                Bacon ipsum dolor amet sirloin chicken shoulder filet mignon cow. Pastrami jerky beef ribs tongue rump kevin.
              </div>
            </div>
            <div>
              <Button text={"Okay"} isDataValid={true}/>
            </div>
          </div>
        </PopoverDown>
        <div>
          <OngoingVisas/>
        </div>
        <div>
          <MostCommonVisas/>
        </div>
      </div>
    </div>
  );
};
export default Example;
