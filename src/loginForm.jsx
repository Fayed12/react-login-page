import InputField from "./components/input";
import HeaderForm from "./components/header";
import ButtonFrom from "./components/button";
import { useState } from "react";
import "./loginForm.css"

function AllPage() {
    // usestate variabel
    const [username, setUserName] = useState("");
    const [PhoneNumber, setPhoneNumber] = useState("");
    const [AgeNumber, setAgeNumber] = useState("");
    const [buttonCheckStatus , setButtonCheckStatus] = useState(false)

    // prevent the default submit
    function handleDefaultSubmit(e) {
        e.preventDefault();
    }

    // handel button checker
    function handleButtonChecker() {
        if (username && PhoneNumber && AgeNumber) {
            setButtonCheckStatus(true)
            alert("all is done")
        } else {
            alert("please fill all input field !")
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
              value={username}
              onChange={(e) => setUserName(e.target.value)}
            ></InputField>
            <InputField
              label="Phone Number"
              type="number"
              forId="phoneNumber"
              name="phoneNumber"
              value={PhoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            ></InputField>
            <InputField
              label="Age"
              type="number"
              forId="age"
              name="age"
              value={AgeNumber}
              onChange={(e) => setAgeNumber(e.target.value)}
            ></InputField>

            <ButtonFrom
              buttonName="Submit"
              onclick={handleButtonChecker}
              status={buttonCheckStatus}
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default AllPage;
