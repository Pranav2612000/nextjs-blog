import React from "react";

const PopoverDown = (props) => {
  return (
    <>
      <div className="bg-black bg-opacity-80 absolute top-0 left-0 h-full w-full z-10 md:max-w-s md:mx-auto">
      </div>
      <div className="bg-white absolute bottom-0 md:max-w-sm z-20">
        {props.children}
      </div>
    </>
  );
};
export default PopoverDown;
