import React, {useState, useEffect} from "react"; 

import Input from '../form/Input';

const OTPLogin = (props) => {
  return (
    <>
      <div className="font-sfprobold text-2xl my-2">
        Login
      </div>
      <div className="font-sfprolight text-gray-900 text-sm">
        This is just to ensure that you continue from where you left every single time.
      </div>
      {/*
      <div className="mt-10">
        <Input type="text" placeholder="Phone no. or email address" value={props.username} onChange={props.setUsername}/>
      </div>
      */}
      <div className="mt-1 mb-40">
        <Input type="text" placeholder="Enter the OTP" value={props.otp} onChange={props.setOTP}/>
      </div>
    </>
  )
};
export default OTPLogin;
