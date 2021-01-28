const Input = (props) => {
  return (
    <div className="searchformfld w-full">
      <input type={props.type} className="login-input font-sfproregular text-black" placeholder=" "/>
      <label className="font-sfprolight text-xs">{props.placeholder}</label>
    </div>
  );
};
export default Input;
