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
        <button className="py-5 w-full text-center font-sfprobold bg-green-700 text-white" onClick={handleButtonClick}>
          {props.loading ? (
            <div className="lds-dual-ring"></div>
          ) : (
            <span>
              {props.text}
            </span>
          )}
        </button>
        ) : (
        <button className="py-5 w-full text-center font-sfprobold bg-white text-gray-500 login-signup-submit-btn" disabled>{props.text} </button>
      )}
    </>
   )
}
export default LoginSignupBtn;
