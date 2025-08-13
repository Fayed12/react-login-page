import InputField from "./components/input";
import HeaderForm from "./components/header";
import ButtonFrom from "./components/button";
import NotFilled from "./components/Popup-notfilled";
import DonePopup from "./components/done-popup";
import CheckBoxField from "./components/check-box";
import { useState } from "react";
import "./loginForm.css";

function AllPage() {
  let user = {
    username: "",
    phoneNumber: "",
    age: "",
    agree: false,
  };
  // usestate variabel
  const [formData, setFormData] = useState(user);
  const [ShowDonePopup, setShowDonePopup] = useState(false);
  const [showNotFillPopup, setshowNotFillPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");

  // prevent the default submit
  function handleDefaultSubmit(e) {
    e.preventDefault();
  }

  // handel button checker
  function handleButtonChecker() {
    const { username, phoneNumber, age, agree } = formData;
    
    if (username && phoneNumber && age && agree) {
      setShowDonePopup(true);
      setFormData(user)
    } else if (!username && !phoneNumber && !age && !agree) {
      setshowNotFillPopup(true);
      setPopupMessage("Please fill in all fields !");
    } else if (!username) {
      setshowNotFillPopup(true);
      setPopupMessage("Please fill in your username !");
    } else if (!phoneNumber) {
      setshowNotFillPopup(true);
      setPopupMessage("Please fill in your phone number !");
    } else if (!age) {
      setshowNotFillPopup(true);
      setPopupMessage("Please fill in your age !");
    } else if (!agree) {
      setshowNotFillPopup(true);
      setPopupMessage("Please agree the terms first !");
    }
  }
  return (
    <div className="all-form">
      <div className="container">
        <HeaderForm className="header"></HeaderForm>
        <form onSubmit={handleDefaultSubmit}>
          <div className="form-content">
            <InputField
              label="Username"
              type="text"
              forId="username"
              name="username"
              value={formData.username}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  username: e.target.value,
                })
              }
            />

            <InputField
              label="Phone Number"
              type="number"
              forId="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  phoneNumber: e.target.value,
                })
              }
            />

            <InputField
              label="Age"
              type="number"
              forId="age"
              name="age"
              value={formData.age}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  age: e.target.value,
                })
              }
            />

            <CheckBoxField
              label="I agree to the terms!"
              checked={formData.agree}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  agree: e.target.checked,
                })
              }
            />

            <ButtonFrom
              buttonName="Submit"
              onclick={handleButtonChecker}
              disabled={
                !formData.username ||
                !formData.phoneNumber ||
                !formData.age ||
                !formData.agree
              }
            />
          </div>
        </form>
      </div>
      {showNotFillPopup && (
        <NotFilled
          message={popupMessage}
          onClose={() => setshowNotFillPopup(false)}
        ></NotFilled>
      )}
      {ShowDonePopup && (
        <DonePopup
          message="All fields are filled successfully!"
          onClose={() => setShowDonePopup(false)}
        ></DonePopup>
      )}
    </div>
  );
}

export default AllPage;
