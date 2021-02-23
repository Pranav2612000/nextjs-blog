import React from "react";

const ErrorModal = (props) => {
  return (
      <div className="absolute bottom-0 md:max-w-sm z-10 bg-gradient-to-t from-red-400 bg-opacity-80 h-60 w-full flex align-center justify-center">
        <div className="absolute bottom-5 bg-white h-16 w-3/4 rounded-2xl">
          <div className="flex h-full">
            <div className="w-1/6 px-2">
            </div>
            <div className="w-5/6 h-full flex items-center justify-center my-auto px-2 font-sfprolight text-md">
              <span>
                {props.text}
              </span>
            </div>
          </div>
        </div>
      </div>
  );
};
export default ErrorModal;
