import React from "react";
import Link from 'next/link';
import { useRouter } from 'next/router';

import LoginSignupBtn from '../components/LoginSignupBtn';

const Welcome = () => {
  const router = useRouter();
  return (
    <div className="flex items-top w-full bg-blue-50">
      <div className="w-full bg-white rounded shadow-lg md:max-w-sm md:mx-auto md:mt-5 md:mb-5">
        <div className="mt-10 flex items-center justify-center">
          <div className="w-2/4">
            <div className="shadow-2xl">
              <img className="w-full" src="/assets/images/welcome_banner.png"/>
            </div>
            <div className="mt-10">
              <div className="font-sfprobold text-md">
                Add travellers
              </div>
              <div className="mt-2 font-sfprolight text-sm">
                <p>
                Lorem ipsum dolor sit amet, consectetur .Lorem ipsum dolor sit amet, consectetur adipiscing 
                </p>
              </div>
              <div className="mt-2 font-sfproregular text-sm text-blue-500">
                <p>
                  what all do i need for this stage? 
                </p>
              </div>
              <div className="w-2/4 border-yellow-300 border-1 p-1 mt-2 rounded-2xl flex flex-row">
                <div className="px-1">
                  <img src="/assets/images/clock_icon.png"/>
                </div>
                <div className="px-2 flex items-center font-sfprobold text-xs text-golden-400">
                  <p>
                    10 mins
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center p-10">
                <div className="flex flex-row">
                  <div className="h-2.5 w-2.5 bg-green-700 mx-1 rounded-full"></div>
                  <div className="h-2.5 w-2.5 bg-green-200 mx-1 rounded-full"></div>
                  <div className="h-2.5 w-2.5 bg-green-200 mx-1 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-5 w-full">
            <LoginSignupBtn text={"Signup/Login to continue"} isDataValid={true} onClick={() => {router.push("/login")}}/>
        </div>
      </div>
    </div>
  );
};
export default Welcome;
