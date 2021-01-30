const LoginSignupBtn = (props) => {
  return (
    <>
      {props.isDataValid ? (
        <button className="py-5 w-full text-center font-sfprobold bg-green-700 text-white">Sign up</button>
        ) : (
        <button className="py-5 w-full text-center font-sfprobold bg-white text-gray-500 login-signup-submit-btn">{props.text}</button>
      )}
    </>
   )
}
export default LoginSignupBtn;
