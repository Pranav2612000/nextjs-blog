import React, {useState, useEffect} from "react"; 
import Link from 'next/link';
import Image from 'next/image';

import PasswordLogin from '../components/Login/PasswordLogin';
import OTPLogin from '../components/Login/OTPLogin';
import LoginSignupBtn from '../components/LoginSignupBtn';

const Login = () => {
  const [username, setUsername] = useState("");
  const [isDataValid, setIsDataValid] = useState(false);
  const [loginType, setLoginType] = useState(0); // 0 - password, 1 - OTP


  return (
    <div className="flex items-top w-full bg-blue-50">
      <div className="w-full bg-white rounded shadow-lg md:max-w-sm md:mx-auto md:mt-5 md:mb-5">
        <div>
          <img src="/assets/images/Login-top.png" alt="login-header" className="w-full"/>
        </div>
      <form>
        <div className="mx-5 my-10">
          { loginType == 0 ? (
              <PasswordLogin username={username} setUsername={setUsername} setIsDataValid={setIsDataValid} setLoginType={setLoginType}/>
            ) : (
              <OTPLogin username={username} setIsDataValid={setIsDataValid}/>
            )
          }

            <div className="mt-10">
              <span className="font-sfprolight">New to Stamp my visa?</span>
              <Link href="/signup">
                <span className="cursor-pointer mx-2 font-sfprobold text-green-700"> Sign Up</span>
              </Link>
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
