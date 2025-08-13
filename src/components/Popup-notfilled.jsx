import "./Popups.css";

function NotFilled({ message, onClose }) {
    return (
      <div className="overlay">
        <div className="popup-box popup-error">
          <p>{message}</p>
          <button className="popup-btn popup-btn-error" onClick={onClose}>
            OK
          </button>
        </div>
      </div>
    );
}
export default NotFilled;