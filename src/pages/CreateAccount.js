import React from "react";
import { useState, useEffect } from "react";
import "../pages/createAcoount.css";
import Tag from "../component/Tag";
import TeamMember from "../component/AddTeamMember";
import AddFolderTemplate from "../component/AddFolderTemplate";
import axios from "axios";
import SlideButton from "../component/SlideButton";

//?icon
import { RxCross2 } from "react-icons/rx";
import { SlArrowLeft, SlArrowRight, SlQuestion } from "react-icons/sl";
//?icon stage 2
import { useNavigation } from "react";
import { FaCirclePlus } from "react-icons/fa6";
import { SlNotebook } from "react-icons/sl";
import { FaPlusCircle } from "react-icons/fa";

function CreateAccount({ handleAddAccount }) {
  const [currentStage, setCurrentStage] = useState(3);

  const nextStage = () => {
    setCurrentStage((prevStage) => prevStage + 1);
  };

  const prevStage = () => {
    setCurrentStage((prevStage) => prevStage - 1);
  };

  //todo header
  const [formStage, setFormStage] = useState("stage1");
  const [showAccountInfo, setShowAccountInfo] = useState(false);

  const handleFormStage = (option) => {
    setFormStage(option);
  };
  //todo stage individual
  const [clientType, setClientType] = useState("individual", "company");
  const [accountName, setAccountName] = useState("");
  const [addTag, setAddTag] = useState(null);
  const [teamMember, SetTeamMember] = useState("");
  const [folderTemplate, SetFolderTemplate] = useState("");
  const handleClientTypeChange = (type) => {
    setClientType(type);
  };
  const handleAccountName = (event) => {
    setAccountName(event.target.value);
  };
  const handleAddTag = (selectedOption) => {
    setAddTag(selectedOption);
  };
  const handleAddTeamMember = (selectedOption) => {
    SetTeamMember(selectedOption);
  };
  const handleAddFolderTemplate = (selectedOption) => {
    SetFolderTemplate(selectedOption);
  };
  useEffect(() => {
    console.log(accountName);
    console.log(addTag);
    console.log(teamMember);
    console.log(folderTemplate);
  }, [accountName, addTag, folderTemplate, teamMember]);

  //todo handle submit
  const handleSubmit = () => {
    let data = JSON.stringify({
      clientType: "i",
      accountName: "Seema Datta",
      companyName: "Microtech Solutions",
      tags: addTag,
      teamMembers: teamMember,
      folderTemplate: folderTemplate,
      active: true,
    });

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "http://127.0.0.1:8080/account/",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };
  //todo contact

  const [contacts, setContacts] = useState([{ fname: "", mname: "", lname: "", contactName: "", companyName: "", note: "", email: "", phoneNumber: null, tags: null, country: "", streetAddress: "", city: "", stateProvince: "", zipPostalCode: null }]);
  const [submittedContacts, setSubmittedContacts] = useState([]);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleInputChange = (index, event) => {
    const newContacts = [...contacts];
    newContacts[index][event.target.name] = event.target.value;
    setContacts(newContacts);
  };

  const handleCoctactAddTag = (selectedOption) => {
    setAddTag(selectedOption);
  };

  const handleAddContact = () => {
    setContacts([...contacts, { fname: "", mname: "", lname: "", contactName: "", companyName: "", note: "", email: "", phoneNumber: null, tags: null, country: "", streetAddress: "", city: "", stateProvince: "", zipPostalCode: null }]);
  };

  const handleRemoveContact = (index) => {
    const newContacts = [...contacts];
    newContacts.splice(index, 1);
    setContacts(newContacts);
  };

  const handleSubmitContact = (index) => {
    const updatedSubmittedContacts = [...submittedContacts, contacts[index]];

    setSubmittedContacts(updatedSubmittedContacts);
    setContacts([{ fname: "", mname: "", lname: "", contactName: "", companyName: "", note: "", email: "", phoneNumber: null, tags: null, country: "", streetAddress: "", city: "", stateProvince: "", zipPostalCode: null }]);
    setFormSubmitted(true);
  };

  const handleRemoveSubmittedContact = (index) => {
    const updatedSubmittedContacts = [...submittedContacts];
    updatedSubmittedContacts.splice(index, 1);
    setSubmittedContacts(updatedSubmittedContacts);
  };

  const handleSendContact = (index) => {
    handleRemoveSubmittedContact(index);
    // Log data before removing the contact
    console.log("Sending contact:", submittedContacts[index]);

    let data = JSON.stringify(submittedContacts[index]);

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "http://127.0.0.1:8080/con",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleRoleChange = (index, selectedOption) => {
    const newContacts = [...contacts];
    newContacts[index].tags = selectedOption;
    setContacts(newContacts);
  };

  const renderCurrentStage = () => {
    switch (currentStage) {
      case 1:
        return (
          <div className="createContact">
            <h3 style={{ fontSize: "14px", fontFamily: "sans-serif", fontWeight: "600", color: "rgb(121, 116, 116)", marginLeft: "2%" }}>
              Conatcts <SlQuestion style={{ color: "#007bff", fontSize: "12px", verticalAlign: "top", paddingLeft: "2px" }} />
            </h3>

            <div className="last_section col-12">
              <div className="middle-section-container col-12">
                <div className="icon-section col-12">
                  <SlNotebook style={{ width: "50px", height: "50px", color: "#b7b7b7", marginLeft: "40%" }} />
                  <div className="icon_info" style={{ display: "flex", alignItems: "center", fontSize: "14px", fontFamily: "sans-serif", color: "rgb(121, 116, 116)", marginLeft: "35%" }}>
                    <h5>No linked contacts</h5>
                    <br />
                  </div>
                  <div className="csub-account-last col-12" style={{ marginTop: "20%" }}>
                    <div className="contact_info-last" style={{ display: "flex", alignItems: "center" }}>
                      <FaCirclePlus />
                      <label htmlFor="account_info_radio" style={{ marginLeft: "5px", fontSize: "14px", fontFamily: "sans-serif", fontWeight: "600", color: "rgb(58, 145, 245)" }}>
                        Link existing account
                      </label>
                    </div>

                    <div className="contact_info-last" style={{ display: "flex", alignItems: "center" }}>
                      <FaCirclePlus />
                      <label htmlFor="company_info_radio" style={{ marginLeft: "5px", fontSize: "14px", fontFamily: "sans-serif", fontWeight: "600", color: "rgb(58, 145, 245)" }}>
                        Add new contacts
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case 2:
        return (
          <>
            <div className="individual">
              <div className="clienttype_container col-12">
                <div className="title_client col-6">
                  <div style={{ display: "flex" }}>
                    <div>
                      <h3 style={{ fontSize: "14px", fontFamily: "sans-serif", fontWeight: "600", color: "gray" }}>Client type</h3>
                    </div>
                    <div style={{ marginLeft: "5px", marginTop: "-1px", color: "blue" }}>
                      <SlQuestion />
                    </div>
                  </div>

                  <div className="account_subtype">
                    <div className="individual_subtype">
                      <input type="radio" id="individual_radio" name="client_type" checked={clientType === "individual"} onChange={() => handleClientTypeChange("individual")} />
                      <label htmlFor="individual_radio" style={{ fontSize: "14px", fontFamily: "sans-serif", marginLeft: "5px" }}>
                        Individual
                      </label>
                    </div>

                    <div className="company_subtype" style={{ marginLeft: "20px" }}>
                      <input type="radio" id="company_radio" name="client_type" checked={clientType === "company"} onChange={() => handleClientTypeChange("company")} />
                      <label htmlFor="company_radio" style={{ fontSize: "14px", fontFamily: "sans-serif", marginLeft: "5px" }}>
                        Company
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="individualInfo" style={{ padding: "15px" }}>
                  <div>
                    <div>
                      <h3 style={{ fontSize: "14px", fontFamily: "sans-serif", fontWeight: "600", color: "gray" }}>Account Info</h3>
                    </div>
                    <div style={{ marginLeft: "90px", marginTop: "-20px", color: "blue" }}>
                      <SlQuestion />
                    </div>
                  </div>

                  <div>
                    <label className="label">Account Name:</label>
                    <input className="col-12 input" type="text" name="name" placeholder="first name" onChange={handleAccountName} />
                  </div>

                  <div>
                    <label className="label">Tags:</label>
                    <Tag addTag={handleAddTag} />
                  </div>
                  <div>
                    <label className="label">Team Member:</label>
                    <TeamMember addTeamMember={handleAddTeamMember} />
                  </div>
                  <div>
                    <label className="label">Folder Template :</label>
                    <AddFolderTemplate addFolderTemplate={handleAddFolderTemplate} />
                  </div>
                  <div>
                    <button
                      className="submit-btn col-6"
                      onClick={() => {
                        handleSubmit();
                        handleFormStage("stage2");
                      }}
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      case 3:
        return (
          <div>
            {formSubmitted ? (
              <div>
                {submittedContacts.map((contact, index) => (
                  <div key={index}>
                    <p>Contact {index + 1}:</p>
                    <p>Name: {contact.fname}</p>
                    <p>Email: {contact.email}</p>
                    <button className="submit-btn col-6" style={{ marginLeft: "10px" }} onClick={() => handleRemoveSubmittedContact(index)}>
                      Remove
                    </button>
                    <button className="submit-btn col-6" style={{ marginLeft: "10px" }} onClick={() => handleSendContact(index)}>
                      Send
                    </button>
                  </div>
                ))}

                <div className=" col-12">
                  <div className="addContact" style={{ margin: "20px" }}>
                    <div className=" col-1" style={{ color: "blue" }} onClick={() => setFormSubmitted(false)}>
                      <FaPlusCircle />
                    </div>
                    <div className=" col-11" style={{ margin: "-2px" }}>
                      Add New Contact
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div>
                <form>
                  {contacts.map((contact, index) => (
                    <div key={index}>
                      <div className="dynamicContact" style={{ padding: "0 10px 0 10px" }}>
                        <div className=" col-12" style={{ padding: "0 10px 0 10px" }}>
                          <h5>Info:</h5>
                        </div>
                        <div className=" col-4" style={{ padding: "0 10px 0 10px" }}>
                          <label htmlFor={`fname${index}`}>First Name:</label>
                          <input style={{ display: "flex" }} className="col-4 input" type="text" name="fname" id={`fname${index}`} value={contact.fname} onChange={(e) => handleInputChange(index, e)} />
                        </div>
                        <div className=" col-4" style={{ padding: "0 10px 0 10px" }}>
                          <label htmlFor={`mname${index}`}>Middle Name:</label>
                          <input style={{ display: "flex" }} className="col-4 input" type="text" name="mname" id={`mname${index}`} value={contact.mname} onChange={(e) => handleInputChange(index, e)} />
                        </div>
                        <div className=" col-4" style={{ padding: "0 10px 0 10px" }}>
                          <label htmlFor={`lname${index}`}>Last Name:</label>
                          <input style={{ display: "flex" }} className="col-4 input" type="text" name="lname" id={`lname${index}`} value={contact.lname} onChange={(e) => handleInputChange(index, e)} />
                        </div>
                        <div className=" col-12" style={{ padding: "0 10px 0 10px" }}>
                          <label htmlFor={`contactName${index}`}>Contact Name:</label>
                          <input style={{ display: "flex" }} className="col-4 input" type="text" name="contactName" id={`contactName${index}`} value={contact.contactName} onChange={(e) => handleInputChange(index, e)} />
                        </div>
                        <div className=" col-12" style={{ padding: "0 10px 0 10px " }}>
                          <label htmlFor={`companyName${index}`}>Company Name:</label>
                          <input style={{ display: "flex" }} className="col-4 input" type="text" name="companyName" id={`companyName${index}`} value={contact.companyName} onChange={(e) => handleInputChange(index, e)} />
                        </div>
                        <div className=" col-12" style={{ padding: "0 10px 0 10px " }}>
                          <label htmlFor={`note${index}`}>Note:</label>
                          <input style={{ display: "flex" }} className="col-4 input" type="text" name="note" id={`note${index}`} value={contact.note} onChange={(e) => handleInputChange(index, e)} />
                        </div>
                        <div className=" col-12" style={{ padding: "0 10px 10px 10px" }}>
                          <label htmlFor={`email${index}`}>Email:</label>
                          <input style={{ display: "flex" }} className="col-4 input" type="email" name="email" id={`email${index}`} value={contact.email} onChange={(e) => handleInputChange(index, e)} />
                        </div>
                        <div className="btnSlide col-12" style={{ padding: "0 6% 0 10% " }}>
                          <div className="col-2" style={{ width: "15%" }}>
                            <SlideButton />
                          </div>
                          <div className=" col-2">
                            <label style={{ fontSize: "12px", color: "black" }}>Login</label>
                          </div>
                          <div className="col-2" style={{ width: "15%" }}>
                            <SlideButton />
                          </div>
                          <div className=" col-2">
                            <label style={{ fontSize: "12px", color: "black" }}>Notify</label>
                          </div>
                          <div className="col-2" style={{ width: "15%" }}>
                            <SlideButton />
                          </div>
                          <div className=" col-2">
                            <label style={{ fontSize: "12px", color: "black" }}>Email Sync</label>
                          </div>
                        </div>

                        <div className=" col-12" style={{ padding: "0 10px 10px 10px" }}>
                          <label>Tags:</label>
                          {/* <Tag addTag={handleAddTag} /> */}
                          <label htmlFor={`role${index}`}>Role:</label>
                          <Tag value={contact.tag} onChange={(selectedOption) => handleRoleChange(index, selectedOption)} />
                        </div>
                        <div className=" col-12" style={{ padding: "0 10px 0 10px" }}>
                          <h5>Phone Number</h5>
                        </div>
                        <div className=" col-12" style={{ padding: "0 10px 0 10px " }}>
                          <input style={{ display: "flex" }} className="col-4 input" type="text" name="phoneNumber" id={`phoneNumber${index}`} value={contact.phoneNumber} onChange={(e) => handleInputChange(index, e)} />
                        </div>
                        <div className=" col-12" style={{ padding: "0 10px 0 10px" }}>
                          <h5>Address:</h5>
                        </div>
                        <div className=" col-12" style={{ padding: "0 10px 0 10px " }}>
                          <label htmlFor={`country${index}`}>Country:</label>
                          <input style={{ display: "flex" }} className="col-4 input" type="text" name="country" id={`country${index}`} value={contact.country} onChange={(e) => handleInputChange(index, e)} />
                        </div>
                        <div className=" col-12" style={{ padding: "0 10px 0 10px " }}>
                          <label htmlFor={`streetAddress${index}`}>Street address:</label>
                          <input style={{ display: "flex" }} className="col-4 input" type="text" name="streetAddress" id={`streetAddress${index}`} value={contact.streetAddress} onChange={(e) => handleInputChange(index, e)} />
                        </div>
                        <div className=" col-4" style={{ padding: "0 10px 0 10px" }}>
                          <label htmlFor={`city${index}`}>City:</label>
                          <input style={{ display: "flex" }} className="col-4 input" type="text" name="city" id={`city${index}`} value={contact.city} onChange={(e) => handleInputChange(index, e)} />
                        </div>
                        <div className=" col-4" style={{ padding: "0 10px 0 10px" }}>
                          <label htmlFor={`stateProvince${index}`}>State/Province:</label>
                          <input style={{ display: "flex" }} className="col-4 input" type="text" name="stateProvince" id={`stateProvince${index}`} value={contact.stateProvince} onChange={(e) => handleInputChange(index, e)} />
                        </div>
                        <div className=" col-4" style={{ padding: "0 10px 0 10px" }}>
                          <label htmlFor={`zipPostalCode${index}`}>ZIP/Postal Code</label>
                          <input style={{ display: "flex" }} className="col-4 input" type="number" name="zipPostalCode" id={`zipPostalCode${index}`} value={contact.zipPostalCode} onChange={(e) => handleInputChange(index, e)} />
                        </div>
                        <div className=" col-12">
                          <hr />
                        </div>
                      </div>

                      <button className="submit-btn col-6" style={{ marginLeft: "10px" }} onClick={() => handleSubmitContact(index)}>
                        Submit
                      </button>
                    </div>
                  ))}
                </form>
              </div>
            )}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <div>
        <div className="account-header col-12">
          <h3 className="account_title">New Account</h3>
          <button className="header-button">
            <RxCross2 onClick={() => handleAddAccount()} />
          </button>
        </div>

        <div className="accounttype_container col-12">
          <div className="sub-account col-6">
            <div className="account_info" style={{ fontWeight: formStage === "stage1" ? "bold" : "normal" }}>
              <input type="radio" id="account_info_radio" name="account_info_radio" checked={formStage === "stage1"} />
              <label htmlFor="account_info_radio">Account info</label>
              {showAccountInfo && <span>1</span>}
            </div>
            <div className="rotate-btn">{formStage === "stage1" ? <SlArrowRight /> : <SlArrowLeft />}</div>

            <div className="company_info" style={{ fontWeight: formStage === "stage2" ? "bold" : "normal" }}>
              <input type="radio" id="company_info_radio" name="company_info_radio" checked={formStage === "stage2"} />
              <label htmlFor="company_info_radio">Contacts</label>
            </div>
          </div>
        </div>
      </div>

      {renderCurrentStage()}

      <div className="col-12">
        {currentStage > 1 && <button onClick={prevStage}>Previous</button>}
        {currentStage < 3 && <button onClick={nextStage}>Next</button>}
      </div>
    </div>
  );
}

export default CreateAccount;
