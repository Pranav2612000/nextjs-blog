import React, {useState, useEffect} from "react"; 

import Input from '../form/Input';
import {isEmailValid, isMobNoValid, isOTPValid} from '../../utils/validations';

const OTPLogin = (props) => {
  const [otp, setOTP] = useState("");

  useEffect(() => {
    if((isEmailValid(props.username) || 
       isMobNoValid(props.username)) &&
       isOTPValid(otp)) {
      props.setIsDataValid(true);
    } else {
      props.setIsDataValid(false);
    }
  }, [props.username, otp]);

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
        <Input type="text" placeholder="Enter the OTP" value={otp} onChange={setOTP}/>
      </div>
    </>
  )
};
export default OTPLogin;
