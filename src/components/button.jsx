import "./button.css"

function ButtonFrom(props) {
    return (
      <>
        <div className="button-from">
          <button
            onClick={props.onclick}
            disabled={props.disabled}
            className={`my-button ${props.disabled && "disabled"}`}
            >{props.buttonName}
          </button>
        </div>
      </>
    );
}

export default ButtonFrom;