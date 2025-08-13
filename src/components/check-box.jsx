import "./check-box.css"

function CheckBoxField({ label, checked, onChange }) {
  return (
    <div className="checkbox-container">
      <label className="checkbox-label">
        <input
          type="checkbox"
          checked={checked}
          onChange={onChange}
          className="checkbox-input"
        />
        <span className="custom-checkbox"></span>
        {label}
      </label>
    </div>
  );
}

export default CheckBoxField;