import React, {useState, useEffect} from "react"; 
import Image from 'next/image';
import Input from '../components/form/Input';
import LoginSignupBtn from '../components/LoginSignupBtn';
import {isEmailValid, isMobNoValid, isPasswordValid} from '../utils/validations';

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isDataValid, setIsDataValid] = useState(false);

  useEffect(() => {
    if((isEmailValid(username) || 
       isMobNoValid(username)) &&
       isPasswordValid(password)) {
      setIsDataValid(true);
    } else {
      setIsDataValid(false);
    }
  }, [username, password]);

  return (
    <div className="flex items-top w-full bg-blue-50">
      <div className="w-full bg-white rounded shadow-lg md:max-w-sm md:mx-auto md:mt-5 md:mb-5">
        <div>
          <img src="/assets/images/Login-top.png" alt="login-header" className="w-full"/>
        </div>
        <form>
          <div className="mx-5 my-10">
              <div className="font-sfprobold text-2xl my-2">
                Login
              </div>
              <div className="font-sfprolight text-gray-900 text-sm">
                This is just to ensure that you continue from where you left every single time.
              </div>
              <div className="mt-10">
                <Input type="text" placeholder="Phone no. or email address" value={username} onChange={setUsername}/>
              </div>
              <div className="mt-1">
                <Input type="password" placeholder="Password" value={password} onChange={setPassword}/>
              </div>
              <div className="text-right">
                <span className="font-sfprosemibold text-blue-600 text-sm">Login with OTP instead</span>
              </div>
              <div className="mt-10">
                <span className="font-sfprolight">New to Stamp my visa?</span>
                <span className="mx-2 font-sfprobold text-green-700"> Sign Up</span>
              </div>
          </div>
          <div className="mt-5 w-full">
            <LoginSignupBtn text={"Login"} isDataValid={isDataValid}/>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Login;
