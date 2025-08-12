import "./input.css";

function InputField(props) {
  return (
    <>
      <div className="input-container">
        <input
          type={props.type}
          value={props.value}
          onChange={props.onChange}
          id={props.forId}
          name={props.name}
          placeholder=" "
        />
        <label htmlFor={props.forId}>{props.label}</label>
      </div>
    </>
  );
}

export default InputField;
