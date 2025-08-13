import "./input.css";
import { useState } from "react";


//max limit of writing component
function MaxLengthWrite({ onClose }) {
  return (
    <div className="overlay">
      <div className="popup-box max-length-popup">
        <p>You have reached your writing limit !!</p>
        <button className="popup-btn" onClick={onClose}>
          OK
        </button>
      </div>
    </div>
  );
}

function InvalidNumber({ onClose }) {
  return (
    <div className="overlay">
      <div className="popup-box invalid-number-popup">
        <p>Invalid number !!</p>
        <button className="popup-btn" onClick={onClose}>
          OK
        </button>
      </div>
    </div>
  );
}


// main inout component
function InputField(props) {
  const [MaxLimit, setMaxLimit] = useState(false);

  return (
    <>
      <div className="input-container">
        <input
          type={props.type}
          value={props.value}
          onChange={(e) => {
            if (props.name === "username" && e.target.value.length > 20) {
              setMaxLimit(true);
              return;
            }

            if (
              props.name === "phoneNumber" &&
              e.target.value.length > 11) {
                setMaxLimit(true);
                return;
            }

            if (props.name === "age" && e.target.value.length > 2) {
              setMaxLimit(true);
              return;
            }

            props.onChange(e);
          }}
          id={props.forId}
          name={props.name}
          placeholder=" "
        />
        <label htmlFor={props.forId}>{props.label}</label>
      </div>
      {MaxLimit && (
        <MaxLengthWrite onClose={() => setMaxLimit(false)}></MaxLengthWrite>
      )}
    </>
  );
}

export default InputField;
