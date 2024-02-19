import React, { useState } from "react";
import Tag from "../component/Tag";
import { SlArrowLeft, SlArrowRight, SlQuestion, SlOptionsVertical } from "react-icons/sl";
import { RxCross2 } from "react-icons/rx";
import "../pages/createAcoount.css";

function CreateAccount({ handleAddAccount }) {
  const [selectedOption, setSelectedOption] = useState("account");
  const [selectedOptionComapny, setSelectedOptionCompany] = useState("company");
  const [showAccountInfo, setShowAccountInfo] = useState(false);
  const handleRadioChange = (option) => {
    setSelectedOption(option);
  };
  const handleContactsButtonClick = () => {
    setShowAccountInfo(true);
  };

  return (
    <div className="createAccount col-12">
      <div className="header_title">{/* <div className="title">Account</div> */}</div>
      <div className="account-container2 col-12">
        <div className="account-header col-12">
          <h3 className="account_title">New Account</h3>
          <button className="header-button" onClick={() => handleAddAccount()}>
            <RxCross2 />
          </button>
        </div>

        <div className="accounttype_container col-12">
          <div className="sub-account col-6">
            <div className="account_info" style={{ fontWeight: selectedOption === "account" ? "bold" : "normal" }}>
              <input type="radio" id="account_info_radio" name="account_info_radio" checked={selectedOption === "account"} onChange={() => handleRadioChange("account")} />

              <lable for="account_info_radio">Account info</lable>
              {showAccountInfo && <span>1</span>}
            </div>
            <div className="rotate-btn">{selectedOption === "account" ? <SlArrowRight /> : <SlArrowLeft />}</div>

            <div className="company_info" style={{ fontWeight: selectedOption === "company" ? "bold" : "normal" }}>
              <input type="radio" id="company_info_radio" name="company_info_radio" checked={selectedOption === "company"} onChange={() => handleRadioChange("company")} />
              <lable for="company_info_radio">Comapny</lable>
            </div>
          </div>
        </div>

        <div className="clienttype_container col-12">
          <div className="title_client col-6">
            <h3 style={{ fontSize: "14px", fontFamily: "sans-serif", fontWeight: "600" }}>
              Client type <SlQuestion style={{ color: "#007bff", fontSize: "12px", verticalAlign: "top", paddingLeft: "2px" }} />
            </h3>
            <div className="accountsub_type">
              <div className="type1_individual">
                <input type="radio" id="individual_radio" name="client_type" />
                <label htmlFor="individual_radio" style={{ fontSize: "14px", fontFamily: "sans-serif", marginLeft: "5px" }}>
                  Individual
                </label>
              </div>
              <div className="companysub_type">
                <input type="radio" id="company_radio" name="client_type" />
                <label htmlFor="company_radio" style={{ fontSize: "14px", fontFamily: "sans-serif", marginLeft: "5px" }}>
                  Company
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className="individual_input-container col-12">
          <div className="form-accountinfo col-6">
            <h3 style={{ fontSize: "14px", fontFamily: "sans-serif", fontWeight: "600" }}>
              Account info <SlQuestion style={{ color: "#007bff", fontSize: "12px", verticalAlign: "top" }} /> <SlOptionsVertical style={{ marginLeft: "50px" }} />
            </h3>
          </div>

          <label for="fname">Account Name</label>
          <input type="text" id="fname" name="firstname" placeholder="Your name.." />

          <label for="lname">Tag </label>
          <select id="tag" name="tag"></select>

          <label for="team member">Team Members</label>
          <select id="team member" name="team member"></select>

          <label for="floder template"> Floder Template</label>
          <select id="floder template" name="floder template"></select>

          <div className="btn_continue col-3">
            <input type="continue" value="continue" />
          </div>
          <div className="tag">
            <Tag />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateAccount;
