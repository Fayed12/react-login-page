import "./Popups.css"

function DonePopup({ message, onClose }) {
  return (
    <div className="overlay">
      <div className="popup-box popup-success">
        <p>{message}</p>
        <button className="popup-btn popup-btn-success" onClick={onClose}>
          OK
        </button>
      </div>
    </div>
  );
}

export default DonePopup;