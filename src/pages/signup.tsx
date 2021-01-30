import React, {useState, useEffect} from "react"; 
import Link from 'next/link';
import Image from 'next/image';

import Input from '../components/form/Input';
import LoginSignupBtn from '../components/LoginSignupBtn';
import {isNameValid, isEmailValid, isMobNoValid, isPasswordValid} from '../utils/validations';

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobNo, setMobNo] = useState("");
  const [password, setPassword] = useState("");
  const [isDataValid, setIsDataValid] = useState(false);

  useEffect(() => {
    if(isNameValid(name) &&
       isEmailValid(email) &&
       isMobNoValid(mobNo) &&
       isPasswordValid(password)) {
      setIsDataValid(true);
    } else {
      setIsDataValid(false);
    }
  }, [name, email, mobNo, password]);

  return (
    <div className="flex items-top w-full bg-blue-50">
      <div className="w-full bg-white rounded shadow-lg md:max-w-sm md:mx-auto md:mt-5 md:mb-5">
        <div>
          <img src="/assets/images/Login-top.png" alt="login-header" className="w-full"/>
        </div>
        <form>
          <div className="mx-5 my-10">
              <div className="font-sfprobold text-2xl my-2">
                Sign Up
              </div>
              <div className="font-sfprolight text-gray-900 text-sm">
                This is just to ensure that you continue from where you left every single time.
              </div>
              <div className="mt-10">
                <Input type="text" placeholder="Name" value={name} onChange={setName}/>
              </div>
              <div className="mt-10">
                <Input type="text" placeholder="Phone no." value={mobNo} onChange={setMobNo}/>
              </div>
              <div className="mt-10">
                <Input type="text" placeholder="Email address" value={email} onChange={setEmail}/>
              </div>
              <div className="mt-1">
                <Input type="password" placeholder="Password" value={password} onChange={setPassword}/>
              </div>
              <div className="mt-10">
                <span className="font-sfprolight">Already onboard?</span>
                <Link href="/login">
                  <span className="cursor-pointer mx-2 font-sfprobold text-green-700"> Login</span>
                </Link>
              </div>
          </div>
          <div className="mt-5 w-full">
            <LoginSignupBtn text={"Sign up"} isDataValid={isDataValid}/>
          </div>
        </form>
      </div>
    </div>
  );
}
export default SignUp;
