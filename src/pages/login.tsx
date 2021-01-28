import Image from 'next/image';
import Input from '../components/form/Input';
const Login = () => {
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
                <Input type="text" placeholder="Phone no. or email address"/>
              </div>
              <div className="mt-1">
                <Input type="password" placeholder="Password"/>
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
            <button className="py-5 w-full text-center font-sfprobold bg-green-700 text-white">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Login;
