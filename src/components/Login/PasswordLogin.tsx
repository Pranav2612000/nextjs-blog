import React, {useState, useEffect} from "react"; 
import {isMobNoValid} from "../../utils/validations";

import Input from '../form/Input';

const PasswordLogin = (props) => {

  const loginWithOTP = () => {
    if(!isMobNoValid(props.username)) {
      alert("Enter a valid number");
      return;
    }
    props.setLoginType(1);
  }

  return (
    <>
      <div className="font-sfprobold text-2xl my-2">
        Login
      </div>
      <div className="font-sfprolight text-gray-900 text-sm">
        This is just to ensure that you continue from where you left every single time.
      </div>
      <div className="mt-10">
        <Input type="text" placeholder="Phone no. or email address" value={props.username} onChange={props.setUsername}/>
      </div>
      <div className="mt-1">
        <Input type="password" placeholder="Password" value={props.password} onChange={props.setPassword}/>
      </div>
      <div className="text-right">
        <span className="cursor-pointer font-sfprosemibold text-blue-600 text-sm" onClick={loginWithOTP}>Login with OTP instead</span>
      </div>
    </>
  )
};
export default PasswordLogin;
