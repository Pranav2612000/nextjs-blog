const Input = (props) => {
  return (
    <div className="searchformfld w-full">
      <input value={props.value} type={props.type} className="login-input font-sfproregular text-black" placeholder=" " onChange={(e) => {props.onChange && props.onChange(e.target.value)}}/>
      <label className="font-sfprolight text-xs">{props.placeholder}</label>
    </div>
  );
};
export default Input;
