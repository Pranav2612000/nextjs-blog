import React, {useState, useEffect} from "react"; 
import { useRouter } from 'next/router';
import Link from 'next/link';

import PasswordLogin from '../components/Login/PasswordLogin';
import OTPLogin from '../components/Login/OTPLogin';
import LoginSignupBtn from '../components/LoginSignupBtn';
import {isEmailValid, isMobNoValid, isPasswordValid} from '../utils/validations';

import {loginMock} from '../mocks/login.js';

const Login = () => {
  const router = useRouter();
  
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isDataValid, setIsDataValid] = useState(false);
  const [loginType, setLoginType] = useState(0); // 0 - password, 1 - OTP
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if(loginType === 0) {
      if((isEmailValid(username) || 
         isMobNoValid(username)) &&
         isPasswordValid(password)) {
        setIsDataValid(true);
      } else {
        setIsDataValid(false);
      }
    }
  }, [username, password]);

  const login = () => {
    if(loginType === 0) {
      passwordLogin();
    }
  }

  const passwordLogin = async () => {
    const body = {
      username,
      password,
    }
    setLoading(true);
    const res = await loginMock(body);
    if(res === true) {
      router.push("/home");
    } else {
      setLoading(false);
    }
  }

  return (
    <div className="flex items-top w-full bg-blue-50">
      <div className="w-full bg-white rounded shadow-lg md:max-w-sm md:mx-auto md:mt-5 md:mb-5">
        <div>
          <img src="/assets/images/Login-top.png" alt="login-header" className="w-full"/>
        </div>
      <form>
        <div className="mx-5 my-10">
          { loginType == 0 ? (
              <PasswordLogin username={username} setUsername={setUsername} password={password} setPassword={setPassword} setIsDataValid={setIsDataValid} setLoginType={setLoginType}/>
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
          <LoginSignupBtn text={"Login"} isDataValid={isDataValid} onClick={login} loading={loading}/>
        </div>
      </form>
      </div>
    </div>
  );
}
export default Login;
