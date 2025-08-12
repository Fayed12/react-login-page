import "./button.css"

function ButtonFrom(props) {
    return (
      <>
        <div className="button-from">
          <button onClick={props.onclick} style={{ color: props.status ? "teal" : "rgb(147, 189, 189)"}}>
            {props.buttonName}
          </button>
        </div>
      </>
    );
}

export default ButtonFrom;