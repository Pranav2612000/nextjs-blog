const LoginSignupBtn = (props) => {
  const handleButtonClick = (e) => {
    e.preventDefault();
    if(!props.onClick) {
      return;
    }
    props.onClick();
  }

  return (
    <>
      {props.isDataValid ? (
        <button className="py-5 w-full text-center font-sfprobold bg-green-700 text-white" onClick={handleButtonClick}>{props.text}</button>
        ) : (
        <button className="py-5 w-full text-center font-sfprobold bg-white text-gray-500 login-signup-submit-btn">{props.text}</button>
      )}
    </>
   )
}
export default LoginSignupBtn;
