import React, {useState, useEffect} from "react"; 
import { useRouter } from 'next/router';
import Link from 'next/link';

import PasswordLogin from '../components/Login/PasswordLogin';
import OTPLogin from '../components/Login/OTPLogin';
import LoginSignupBtn from '../components/LoginSignupBtn';
import ErrorModal from '../components/layout/ErrorModal';
import {isEmailValid, isMobNoValid, isPasswordValid, isOTPValid} from '../utils/validations';

import {loginMock, OTPLoginMock} from '../mocks/login';

const Login = () => {
  const router = useRouter();
  
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOTP] = useState("");
  const [isDataValid, setIsDataValid] = useState(false);
  const [loginType, setLoginType] = useState(0); // 0 - password, 1 - OTP
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    if(loginType === 0) {
      if((isEmailValid(username) || 
         isMobNoValid(username)) &&
         isPasswordValid(password)) {
        setIsDataValid(true);
      } else {
        setIsDataValid(false);
      }
    } else if(loginType === 1) {
      if((isEmailValid(username) || 
         isMobNoValid(username)) &&
         isOTPValid(otp)) {
        setIsDataValid(true);
      } else {
        setIsDataValid(false);
      }
    }
  }, [username, password, otp]);

  const login = () => {
    if(loginType === 0) {
      sendPasswordLoginRequest();
    } else if(loginType === 1) {
      sendOTPLoginRequest();
    }
  }

  const loginSuccessful = () => {
    router.push("/home");
  };

  const loginFailed = (err) => {
    setLoading(false);
    setError(true);
    setErrorMsg(err.message);
  };

  const sendPasswordLoginRequest = async () => {
    const body = {
      username,
      password,
    }
    setLoading(true);
    const res = await loginMock(body);
    if(res === true) {
      loginSuccessful();
    } else {
      const err = {
        message: "Incorrect Username or Password"
      }
      loginFailed(err);
    }
  }

  const sendOTPLoginRequest = async() => {
    const body = {
      username,
      otp,
    }
    setLoading(true);
    const res = await OTPLoginMock(body);
    if(res === true) {
      loginSuccessful();
    } else {
      const err = {
        message: "Incorrect otp" 
      }
      loginFailed(err);
    }
  }

  return (
    <div className="flex items-top w-full bg-blue-50">
      <div className="w-full bg-white rounded shadow-lg md:max-w-sm md:mx-auto md:mt-5 md:mb-5 relative">
        <div>
          <img src="/assets/images/Login-top.png" alt="login-header" className="w-full"/>
        </div>
        <form>
          <div className="mx-5 my-10">
            { loginType == 0 ? (
                <PasswordLogin username={username} setUsername={setUsername} password={password} setPassword={setPassword} setIsDataValid={setIsDataValid} setLoginType={setLoginType}/>
              ) : (
                <OTPLogin username={username} otp={otp} setOTP={setOTP} setIsDataValid={setIsDataValid}/>
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
        { error && <ErrorModal text={errorMsg}/> }
      </div>
    </div>
  );
}
export default Login;
