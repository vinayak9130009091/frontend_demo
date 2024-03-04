import React, { useState, useRef, useEffect } from "react";
import logo from "./static/logo.png";
import Select from "react-select";
//import "./adminSignup.css";
import "./signup.css";
//import "./static/confirmation.css";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { AiFillEdit } from "react-icons/ai";
import { ToastContainer, toast } from "react-toastify";
import OtpInput from "react-otp-input";

import { FaEye, FaEyeSlash } from "react-icons/fa";
import DatePicker from "react-datepicker";
import MultiStage from "../component/MultiStepProgressBar";
import startsWith from "lodash.startswith";

//import "./static/datepicker.css";

// import "../pages/static/formslider.css";
// import "../pages/static/servicessoffers.css";
// import "../pages/static/firminfo.css";
// import "../pages/static/firmrole.css";
// import "../pages/static/firmsetting.css";
import firmsetting from "../pages/static/firm setting.png";

const SignUp = () => {
  //!send all sign up data to backend API

  // let data = JSON.stringify({
  //   firstName: firstname,
  //   lastName: lastName,
  //   phoneNumber: phoneNumber,
  //   email: "email@gmail.com",
  //   password: password,
  //   cpassword: cfpassword,
  //   firmName: firmName,
  //   state: selectedState,
  //   country: selectedCountry,
  //   firmSize: svalue,
  //   referenceFrom: selectedOption,
  //   services: [
  //     {
  //       selectedButtons,
  //     },
  //   ],
  //   role: roleOption,
  //   firmURL: url,
  //   currency: currency,
  //   language: language,
  // });
  // let config = {
  //   method: "post",
  //   maxBodyLength: Infinity,
  //   url: "http://127.0.0.1:6000/admin/",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   data: data,
  // };
  // axios
  //   .request(config)
  //   .then((response) => {
  //     console.log(JSON.stringify(response.data));
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });

  const setVal = (e) => {
    // console.log(e.target.value);
    const { name, value } = e.target;

    setInpval(() => {
      return {
        ...inpval,
        [name]: value,
      };
    });
  };

  //todo ========    #page control  logic   No1 =======

  //!chang state for testing
  const [currentStep, setCurrentStep] = useState(2);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form");
  };

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  //todo ========    #page control  logic   No1 =======

  //? ========    #navigation control   No2 =======

  const navigate = useNavigate();

  const LoginButton = () => {
    navigate("/adminlogin");
  };
  //? ========    #navigation control   No2 =======

  //todo ========    #send mail to backend for varification code  case 1: =======

  //*checkbox
  const [isChecked, setIsChecked] = useState(false);

  const setValbox = (event) => {
    setIsChecked(event.target.checked);
    console.log(event.target.checked);
  };

  const [inpval, setInpval] = useState({
    email: "",
  });

  const createAccount = async (e) => {
    e.preventDefault();

    const { email, password, terms } = inpval;

    if (email === "") {
      toast.error("email is required!", {
        position: "top-center",
      });
    } else if (!email.includes("@")) {
      toast.warning("includes @ in your email!", {
        position: "top-center",
      });
    } else if (isChecked === false) {
      toast.error("Accept terms and condtion ", {
        position: "top-center",
      });
    } else {
      e.preventDefault();

      let data = JSON.stringify({
        email: inpval.email,
      });

      let config = {
        method: "post",
        maxBodyLength: Infinity,
        url: "http://127.0.0.1:8000/request-otp",
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      };

      axios
        .request(config)
        .then((response) => {
          console.log(JSON.stringify(response.data));
          //toast.success("Check your email ID for OTP", { position: "top-right" });

          alert("Check your email ID for OTP");

          //   setInpval({ ...inpval, email: "" });
          setIsChecked(false);
          nextStep();
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  //todo ========    #send mail to backend for varification code  case 2: =======

  //? ========    #otp varification    Page:2 =======

  const [otp, setOtp] = useState("");
  const handleClearOtp = () => {
    console.log(otp);
    setOtp("");
  };
  const sendOtpVerify = async (e) => {
    e.preventDefault();

    const { email } = inpval;

    if (otp === "") {
      toast.error(" OTP required! ", {
        position: "top-center",
      });
    } else {
      e.preventDefault();

      let data = JSON.stringify({
        email: inpval.email,
        otp: otp,
      });

      let config = {
        method: "post",
        maxBodyLength: Infinity,
        url: "http://127.0.0.1:8000/verify-otp",
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      };

      axios
        .request(config)
        .then((response) => {
          console.log(JSON.stringify(response.data));
          // toast.success("Check your email ID for OTP", { position: "top-right" });

          alert("Email verified sucessfully");
          setOtp("");

          nextStep();
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  //? ========    #otp varification    Page:2 =======
  //! ========    #otp varification    Page:2 =======
  //todo ========    #send mail to backend for varification code  case 3: =======

  const [firstname, setFirstname] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [valid, setValid] = useState(true);
  const [value, setValue] = useState();
  const totalSteps = 4; // Set the desired number of steps
  const [currentStepForm, setcurrentStepForm] = useState(2);
  const stageNames = ["Email", "Information", "Settings", "Book a seassion"];
  const isValidPhoneNumber = (value) => {
    // Add your phone number validation logic here
    // For example, you can use a regular expression to check for a valid US phone number
    const phoneNumberRegex = /^\+(?:[0-9] ?){6,14}[0-9]$/;
    return phoneNumberRegex.test(value);
  };

  const handleNext = () => {
    if (currentStepForm < totalSteps) {
      setcurrentStepForm(currentStepForm + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setcurrentStepForm(currentStepForm - 1);
    }
  };
  const handlePhoneNumberChange = (value) => {
    setPhoneNumber(value);

    // Log the phone number to the console
    console.log("Entered Phone Number:", value);
  };
  const submitUserinfo = async (e) => {
    e.preventDefault();

    if (firstname === "") {
      toast.error(" First Name Required ! ", {
        position: "top-center",
      });
    } else if (lastName === "") {
      toast.error(" Last Name Required ! ", {
        position: "top-center",
      });
    } else if (lastName === "") {
      toast.error(" Last Name Required ! ", {
        position: "top-center",
      });
    } else if (phoneNumber === "") {
      toast.error(" Phone number required ", {
        position: "top-center",
      });
    } else {
      e.preventDefault();

      let data = JSON.stringify({
        firstname: firstname,
        lastName: lastName,
        phoneNumber: phoneNumber,
      });

      let config = {
        method: "post",
        maxBodyLength: Infinity,
        url: "http://127.0.0.1:8000/adminInfo",
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      };

      axios
        .request(config)
        .then((response) => {
          console.log(JSON.stringify(response.data));

          //toast.success("Check your email ID for OTP", { position: "top-right" });

          alert("Info send scuceesfully");
          nextStep();
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  //todo ========    #send mail to backend for varification code Page:3 =======

  //todo ========    #send mail to backend for varification code  case 4: =======

  //case 4  =======================================================================
  //Country State API

  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [states, setStates] = useState([]);
  const [firmName, setFirmName] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCountryD, setSelectedCountryD] = useState("");

  const countryStates = states.find((country) => country.name === selectedCountry)?.states || [];

  // Transform the states data into options for React Select
  const stateOptions = countryStates.map((state, index) => ({
    value: state.name,
    label: state.name,
  }));

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://countriesnow.space/api/v0.1/countries/positions");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const data = await response.json();

        const countryOptions = data.data.map((country) => ({
          //value: country.country,
          label: country.name,
        }));

        setCountries(countryOptions);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const getStatesData = async () => {
      try {
        const response = await axios.get("https://countriesnow.space/api/v0.1/countries/states");
        setStates(response.data.data);
      } catch (error) {
        console.error("Error fetching state data:", error);
      }
    };

    getStatesData();
  }, [countries]);

  // useEffect to do something when selectedCountry changes
  useEffect(() => {
    console.log("Selected Country:", selectedCountry);
    // You can perform additional actions or API calls here based on the selected country
  }, [selectedCountry]);

  const handleCountryChange = (e) => {
    setSelectedCountry(e.target.value);
  };
  const handleStateChange = (e) => {
    setSelectedState(e.target.value);
  };

  //?validation
  const submitFerminfo = async (e) => {
    e.preventDefault();
    console.log("vinayak");

    if (firmName === "") {
      toast.error(" Firm Name Required ! ", {
        position: "top-center",
      });
    } else if (selectedCountry === "") {
      toast.warning(" Select Country ! ", {
        position: "top-center",
      });
    } else if (selectedState === "") {
      toast.warning(" Select state ! ", {
        position: "top-center",
      });
    } else {
      e.preventDefault();

      let data = JSON.stringify({
        firmName: firmName,
        selectedCountry: selectedCountry,
        selectedState: selectedState,
      });

      let config = {
        method: "post",
        maxBodyLength: Infinity,
        url: "http://127.0.0.1:8000/adminInfo",
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      };

      axios
        .request(config)
        .then((response) => {
          console.log(JSON.stringify(response.data));
          // toast.success("Check your email ID for OTP", { position: "top-right" });

          alert("Info send scuceesfully");
          setOtp("");

          nextStep();
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  //todo ========    #send mail to backend for varification code  case 5: =======
  //slider

  const [sliderValue, setSliderValue] = useState(0);
  const fixedValues = [0, 5, 10, 15, 50, 100, 200];
  const colors = ["Google Search", "Capterra/Getapp/G2", "From friend", "Offline event", "Social media", "PMS Solutions Consultant / Patner", "Other"];
  const [buttonStates, setButtonStates] = useState([false, false, false, false, false, false, false]);
  const [selectedButton, setSelectedButton] = useState(null);

  const handleToggle = (index) => {
    const updatedStates = buttonStates.map((state, i) => (i === index ? !state : false));
    setButtonStates(updatedStates);
    setSelectedButton(index);
  };

  const handleSliderChange = (event) => {
    setSliderValue(parseInt(event.target.value, 10));
  };

  const [svalue, setSValue] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  // useEffect to do something when selectedServices changes
  useEffect(() => {
    console.log(svalue);

    // You can perform additional actions or API calls here based on the selected services
  }, [svalue]);
  useEffect(() => {
    // console.log(selectedOption);
    // You can perform additional actions or API calls here based on the selected services
  }, [selectedOption]);

  const handleChange = (event) => {
    setSValue(event.target.value);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  //?validation
  const submitFirmDetail = async (e) => {
    e.preventDefault();

    if (svalue === 0) {
      toast.error(" Select Firm Size  ! ", {
        position: "top-center",
      });
    } else if (selectedOption === "") {
      toast.warning(" Select How did you hear about us ? ", {
        position: "top-center",
      });
    } else {
      e.preventDefault();

      let data = JSON.stringify({
        svalue: svalue,
        selectedOption: selectedOption,
      });

      let config = {
        method: "post",
        maxBodyLength: Infinity,
        url: "http://127.0.0.1:8000/adminInfo",
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      };

      axios
        .request(config)
        .then((response) => {
          console.log(JSON.stringify(response.data));
          // toast.success("Check your email ID for OTP", { position: "top-right" });

          alert("Firm Details send scuceesfully");

          nextStep();
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  //=============================================================
  //todo  Services offers case 6:

  const [selectedButtons, setSelectedButtons] = useState([]);
  const [selectAllChecked, setSelectAllChecked] = useState(false);

  const handleButtonClick = (buttonName) => {
    const index = selectedButtons.indexOf(buttonName);
    if (index === -1) {
      setSelectedButtons([...selectedButtons, buttonName]);
    } else {
      setSelectedButtons(selectedButtons.filter((name) => name !== buttonName));
    }
  };
  // useEffect to do something when selectedServices changes
  useEffect(() => {
    // console.log(selectedButtons);
    // You can perform additional actions or API calls here based on the selected services
  }, [selectedButtons]);

  const handleSelectAllChange = () => {
    setSelectAllChecked(!selectAllChecked);
    if (!selectAllChecked) {
      const allButtonNames = ["TaxPreparation", "Planning", "Advisory", "Resolution", "Payroll", "Accounting", "Audit", "Lawfirm", "Bookkeeping", "Other"];
      setSelectedButtons(allButtonNames);
    } else {
      setSelectedButtons([]);
    }
  };
  //?validation
  const submitService = async (e) => {
    e.preventDefault();

    if (selectedButtons === []) {
      toast.error(" Select Service  ! ", {
        position: "top-center",
      });
    } else {
      e.preventDefault();

      let data = JSON.stringify({
        selectedButtons: selectedButtons,
      });

      let config = {
        method: "post",
        maxBodyLength: Infinity,
        url: "http://127.0.0.1:8000/adminInfo",
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      };

      axios
        .request(config)
        .then((response) => {
          // console.log(JSON.stringify(response.data));
          // toast.success("Check your email ID for OTP", { position: "top-right" });

          alert("Services submitted scuceesfully");

          nextStep();
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  const [buttonStates2, setButtonStates2] = useState({
    TaxPrepration: false,
    TaxPlanning: false,
    Advisory: false,
    Resolution: false,
    Payroll: false,
    Accounting: false,
    Audit: false,
    LawFirm: false,
    Bookkeeping: false,
    Other: false,
  });

  const [selectAll, setSelectAll] = useState(false);
  const buttonsOn = Object.keys(buttonStates2).filter((button) => buttonStates2[button]);
  const handleButtonClick2 = (buttonName) => {
    setButtonStates2((prevStates) => ({
      ...prevStates,
      [buttonName]: !prevStates[buttonName],
    }));
  };
  const handleSelectAll = () => {
    setSelectAll((prevSelectAll) => !prevSelectAll);
    // Set the state of all buttons based on the "Select All" checkbox
    setButtonStates2((prevStates) => {
      const newButtonStates = {};
      Object.keys(prevStates).forEach((button) => {
        newButtonStates[button] = !selectAll;
      });
      return newButtonStates;
    });
  };

  //======================================

  //todo role selection case 7

  const [roleOption, setRoleOption] = useState();

  const handleRoleClick = (option) => {
    setRoleOption(option);
  };
  // useEffect to do something when selectedServices changes
  useEffect(() => {
    // console.log(roleOption);
    // You can perform additional actions or API calls here based on the selected services
  }, [roleOption]);
  //?validation
  const submitRole = async (e) => {
    e.preventDefault();

    if (selectedButtons === "") {
      toast.error(" Select Service  ! ", {
        position: "top-center",
      });
    } else {
      e.preventDefault();

      let data = JSON.stringify({
        selectedButtons: selectedButtons,
      });

      let config = {
        method: "post",
        maxBodyLength: Infinity,
        url: "http://127.0.0.1:8000/adminInfo",
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      };

      axios
        .request(config)
        .then((response) => {
          // console.log(JSON.stringify(response.data));
          // toast.success("Check your email ID for OTP", { position: "top-right" });

          alert("Services Role scuceesfully");

          nextStep();
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const colors3 = ["Owner or patner", "Bookkeeper or Accountant", "Operations/Office Manager", "Admin", "Asistant", "Other"];
  const [buttonStates3, setButtonStates3] = useState([false, false, false, false, false, false]);
  const [selectedButton3, setSelectedButton3] = useState(null);

  const handleToggle3 = (index) => {
    const updatedStates = buttonStates3.map((state, i) => (i === index ? !state : false));
    setButtonStates3(updatedStates);
    setSelectedButton3(index);
  };

  //============================

  //case 8 ============================
  const [currencies, setCurrencies] = useState("");
  const [currency, setCurrency] = useState("");
  const [language, setLanguage] = useState("");
  const [url, setUrl] = useState("");

  const [selectedCurrency, setSelectedCurrency] = useState("");

  useEffect(() => {
    const fetchCurrencies = async () => {
      try {
        const response = await axios.get("https://api.coingecko.com/api/v3/simple/supported_vs_currencies");
        const currencyOptions = Object.keys(response.data).map((currency) => ({
          value: currency,
          label: response.data[currency].toUpperCase(),
        }));

        setCurrencies(currencyOptions);
      } catch (error) {
        console.error("Error fetching currencies:", error);
      }
    };

    fetchCurrencies();
  }, []);

  const handleCurrencyChange = (selectedOption) => {
    setSelectedCurrency(selectedOption);
  };
  const handleUrlChange = (e) => {
    setUrl(e.target.value);
  };

  const handleSubmitUrl = (e) => {
    e.preventDefault();
    const label = document.getElementById("domin_lable").textContent;
    const combinedValue = url + label;
    console.log("Combined value:", combinedValue);
  };

  // const handleCurrencyChange = (e) => {
  //   const selectedCurrency = e.target.value;
  //   setCurrency(selectedCurrency);
  //   console.log("Selected currency:", selectedCurrency);
  // };

  const handleLanguageChange = (e) => {
    const selectedLanguage = e.target.value;
    setLanguage(selectedLanguage);
    console.log("Selected language:", selectedLanguage);
  };

  // const handleSendData = () => {
  //   const combinedData = {
  //     url: url,
  //     currency: currency,
  //     language: language,
  //   };
  //   console.log("Combined data:", combinedData);
  //   console.log(url);
  //   // You can send combinedData to backend here
  // };
  const [languages, setLanguages] = useState([]);
  const [selectedLanguage, setSelectedLanguage] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://query.wikidata.org/sparql?query=SELECT%20%3Flanguage%20%3FlanguageLabel%20WHERE%20%7B%0A%20%20%3Flanguage%20wdt%3AP31%20wd%3AQ34770.%0A%20%20SERVICE%20wikibase%3Alabel%20%7B%0A%20%20%20%20bd%3AserviceParam%20wikibase%3Alanguage%20%22%5BAUTO_LANGUAGE%5D%2Cen%22.%0A%20%20%7D%0A%7D&format=json");
        if (!response.ok) {
          throw new Error("Failed to fetch languages");
        }
        const data = await response.json();
        const languages = data.results.bindings.map((binding) => ({
          value: binding.language.value.split("/").pop(),
          label: binding.languageLabel.value.toUpperCase(),
        }));
        setLanguages(languages);
      } catch (error) {
        console.error("Error fetching languages:", error);
      }
    };

    fetchData();
  }, []);

  //?validation
  const submiturl = async (e) => {
    e.preventDefault();
    console.log("vinayak");

    if (url === "") {
      toast.error(" Choose web URL ! ", {
        position: "top-center",
      });
    } else if (currency === "") {
      toast.warning(" Select Currency ! ", {
        position: "top-center",
      });
    } else if (language === "") {
      toast.warning(" Select language ! ", {
        position: "top-center",
      });
    } else {
      toast.success(" Web url selected  ! ", {
        position: "top-center",
      });
      nextStep();
    }
  };

  //todo password confermation case 9:
  //==============================================================

  const [passShow, setPassShow] = useState(false);
  const [cpassShow, setCPassShow] = useState(false);

  const [inppass, setInppass] = useState({
    password: "",
    cpassword: "",
  });

  //console.log
  const setValP = (e) => {
    // console.log(e.target.value);
    const { name, value } = e.target;

    setInppass(() => {
      return {
        ...inppass,
        [name]: value,
      };
    });
  };

  const submitPassword = async (e) => {
    e.preventDefault();

    const { password, cpassword } = inppass;

    if (password === "") {
      alert("password is required!", {
        position: "top-center",
      });
    } else if (password.length < 8) {
      alert("password must be 6 char!", {
        position: "top-center",
      });
    } else if (cpassword === "") {
      alert("cpassword is required!", {
        position: "top-center",
      });
    } else if (cpassword.length < 8) {
      alert("confirm password must be 6 char!", {
        position: "top-center",
      });
    } else if (password !== cpassword) {
      alert("pass and Cpass are not matching!", {
        position: "top-center",
      });
    } else {
      toast.success(" Account created successfully  ", {
        position: "top-right",
      });
      nextStep();

      //call final
      adminalldata();
    }
  };

  //Console Log Data ConstWise=========
  console.log(inpval.email);
  console.log(firstname);
  console.log(lastName);
  console.log(phoneNumber);

  console.log(firmName);
  console.log(selectedCountry);
  console.log(selectedState);
  console.log(svalue);
  console.log(selectedOption);
  console.log(selectedButtons);
  console.log(roleOption);

  console.log(url);
  console.log(currency);
  console.log(language);

  console.log(inppass.password);
  console.log(inppass.cpassword);

  //=====================

  // const adminalldata = () => {
  //   let data = JSON.stringify({
  //     email: "vinayakkumbhar@hotmail.com",
  //     firstName: firstname,
  //     lastName: lastName,
  //     phoneNumber: phoneNumber,
  //     firmName: firmName,
  //     country: selectedCountry,
  //     state: selectedState,
  //     firmSize: svalue,
  //     referenceFrom: selectedOption,
  //     services: [
  //       {
  //         service: "Tax preparation",
  //       },
  //       {
  //         service: "Tax planning",
  //       },
  //     ],
  //     role: roleOption,
  //     firmURL: url,
  //     currency: currency,
  //     language: language,
  //     password: inppass.password,
  //     cpassword: inppass.cpassword,
  //   });

  //   let config = {
  //     method: "post",
  //     maxBodyLength: Infinity,
  //     url: "http://127.0.0.1:8080/admin/",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     data: data,
  //   };

  //   axios
  //     .request(config)
  //     .then((response) => {
  //       console.log(JSON.stringify(response.data));
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  //===================================================
  const adminalldata = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      email: inpval.email,
      firstName: firstname,
      lastName: lastName,
      phoneNumber: phoneNumber,
      firmName: firmName,
      country: selectedCountry,
      state: selectedState,
      firmSize: svalue,
      referenceFrom: selectedOption,
      services: [
        {
          service: selectedButtons,
        },
      ],
      role: roleOption,
      firmURL: url,
      currency: currency,
      language: language,
      password: inppass.password,
      cpassword: inppass.cpassword,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("http://127.0.0.1:8080/admin/", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.error(error));
  };

  //todo book session for demo  case 10:

  const [selectedDate, setSelectedDate] = useState(null);

  const renderFormFields = () => {
    switch (currentStep) {
      //sign up
      case 1:
        return (
          <>
            <div className=" col-12">
              <div style={{ margin: "20px" }}>
                <img style={{ width: "30px" }} src={logo} alt="" />
                <b>PMS Solutions</b>
              </div>
              <div className="col-12 case1">
                <div className="container">
                  <h2 style={{ color: "black" }}>Signup</h2>
                  <p className="subtitle">Sign up your firm and start upgrading your workflow</p>
                  <br />
                  <form>
                    <div className="form-group">
                      <label htmlFor="email">Email:</label>
                      <input type="email" value={inpval.email} onChange={setVal} name="email" id="email" placeholder="Enter Your Email " />
                    </div>
                    <div style={{ display: "flex", marginTop: "40px" }}>
                      <div className="inputCheck" style={{ width: "15px", marginRight: "10px" }}>
                        <input type="checkbox" onChange={setValbox} checked={isChecked} />
                      </div>
                      <label htmlFor="checkbox">I agree to the terms and conditions</label>
                    </div>
                    <br />

                    <button onClick={createAccount}>Create Account</button>

                    <br />

                    <p className="sign-in-link">
                      Already have an account? <NavLink to="/adminlogin">Sign in</NavLink>
                    </p>
                  </form>
                </div>
                <br />
              </div>
            </div>
            <div className="toast">
              <ToastContainer />
            </div>
          </>
        );

      //code confirmation

      case 2:
        return (
          <>
            <div className=" col-12 ">
              <div style={{ margin: "20px" }}>
                <img style={{ width: "30px" }} src={logo} alt="" />
                <b>PMS Solutions</b>
              </div>
              <div className=" col-12 case2">
                <div className="container">
                  <h2>Confirmation Code</h2>
                  <p>We sent a confirmation code to your email:</p>
                  <div>
                    <b>{inpval.email}</b>
                    <span>
                      <AiFillEdit />
                    </span>
                  </div>
                  <p style={{ fontSize: "14px" }}>Please,enter it below</p>
                  <br />
                  <div>
                    <div style={{ marginLeft: "1px" }}>
                      <OtpInput
                        value={otp}
                        onChange={setOtp}
                        numInputs={6}
                      
                        renderInput={(props) => (
                          <input
                            {...props}
                            style={{
                              width: "35px", // Adjust as needed
                              height: "100px", // Adjust as needed
                              fontSize: "42px", // Adjust as needed
                              fontFamily: "Arial, sans-serif", // Replace with your desired font
                              marginRight:"10px "

                              // Add any other styling properties as needed
                            }}
                          />
                        )}
                      />
                    </div>
                  </div>
                  <div style={{ marginTop: "5%" }}>
                    <h4>Didn't receive it? Resend code</h4>
                  </div>

                  <div style={{ display: "flex", marginBottom: "50px" }}>
                    <div className="button col-12" style={{ display: "flex", marginTop: "50px" }}>
                      <button onClick={handleClearOtp} style={{ marginLeft: "auto", transform: "translatex(-30%)" }}>
                        Clear OTP
                      </button>
                      <button onClick={sendOtpVerify} style={{ marginRight: "auto", transform: "translatex(10%)" }}>
                        Verify
                      </button>
                    </div>
                  </div>

                  {/* <button onClick={emailcodersender} className="next"> */}
                  {/* <button className="next" onClick={nextStep}>
                  Next
                </button> */}
                  {/* <button  className="pre">
                  Previous
                </button> */}
                </div>
              </div>
              <div className="toast">
                <ToastContainer />
              </div>
            </div>
          </>
        );
      //!================================================================================================================================================================
      case 3:
        return (
          <>
            <div className=" col-12  ">
              <div className="col-12" style={{ display: "flex" }}>
                <div className="col-4" style={{ margin: "20px" }}>
                  <img style={{ width: "30px" }} src={logo} alt="" />
                  <b>PMS Solutions</b>
                </div>
                <div className="path col-8" style={{ marginRight: "200px" }}>
                  <MultiStage steps={totalSteps} currentStepForm={2} stageNames={stageNames} />
                </div>
              </div>
            </div>

            <div className=" col-12 case3">
              <div className="container">
                <h2>Your Information</h2>
                <form>
                  <div>
                    <div>
                      <label>First Name:</label>

                      <input required className="fname" placeholder="First name" value={firstname} onChange={(e) => setFirstname(e.target.value)} />
                    </div>

                    <div>
                      <label>Last Name:</label>

                      <div>
                        <input required className="lname" placeholder="Last name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                      </div>
                    </div>
                  </div>
                  <br />
                  <div>
                    <label>
                      <div style={{ marginLeft: "1px" }}>
                        <label htmlFor="phone">Phone Number:</label>
                        <PhoneInput
                          country={"us"}
                          placeholder="enter phone number "
                          onChange={(value) => {
                            setPhoneNumber(value);
                          }}
                          countryCodeEditabel={false}
                          isValid={(inputNumber, country, countries) => {
                            return countries.some((country) => {
                              return startsWith(inputNumber, country.dialCode) || startsWith(country.dialCode, inputNumber);
                            });
                          }}
                        />
                      </div>
                    </label>
                    {!valid && <p>Please enter a valid phone number.</p>}
                  </div>
                </form>
              </div>
            </div>

            <br />
            <button onClick={submitUserinfo} className="next">
              Next
            </button>

            <div className="toast">
              <ToastContainer />
            </div>
          </>
        );

      case 4:
        return (
          <>
            <div className=" col-12  ">
              <div className="col-12" style={{ display: "flex" }}>
                <div className="col-4" style={{ margin: "20px" }}>
                  <img style={{ width: "30px" }} src={logo} alt="" />
                  <b>PMS Solutions</b>
                </div>
                <div className="path col-8" style={{ marginRight: "200px" }}>
                  <MultiStage steps={totalSteps} currentStepForm={2} stageNames={stageNames} />
                </div>
              </div>
            </div>
            <div className=" col-12 case4">
              <div className="container">
                <h2>Firm Information</h2>
                <form>
                  <label>Firm Name</label>

                  <input type="text" placeholder="Enter firm name" value={value} onChange={(e) => setFirmName(e.target.value)} />

                  <div className="col-12">
                    <div style={{ width: "100%" }}>
                      <label style={{ marginTop: "30px" }}>Country</label>

                      <Select
                        value={selectedCountryD}
                        onChange={(option) => {
                          setSelectedCountry(option.label);
                          setSelectedCountryD(option);
                          setSelectedState(null); // Reset selected state when the country changes
                        }}
                        options={countries}
                        placeholder="Select a country"
                      />
                      <label style={{ marginTop: "30px" }}>State</label>
                      <Select
                        className="form-select"
                        aria-label="Select State"
                        value={stateOptions.find((option) => option.value === selectedState)}
                        onChange={(option) => {
                          setSelectedState(option.label);
                        }}
                        options={stateOptions}
                        placeholder="Choose State"
                      />
                    </div>
                  </div>
                  <br />
                </form>
                <button onClick={submitFerminfo}>Next</button>
              </div>
            </div>
            <br />

            {/* <button onClick={prevStep} className="pre">
              Previous
            </button> */}
            <div className="toast">
              <ToastContainer />
            </div>
          </>
        );

      case 5:
        return (
          <>
            <div className="col-12" style={{ display: "flex" }}>
              <div className="col-4" style={{ margin: "20px" }}>
                <img style={{ width: "30px" }} src={logo} alt="" />
                <b>PMS Solutions</b>
              </div>
              <div className="path col-12" style={{ marginRight: "200px" }}>
                <MultiStage steps={totalSteps} currentStepForm={2} stageNames={stageNames} />
              </div>
            </div>
            <div className="case5">
              <div className=" col-12 case5"></div>

              <div className=" col-12 selectbar  ">
                <div style={{ textAlign: "center", marginBottom: "10px" }}>Selected Value: {fixedValues[sliderValue]}</div>
                <div style={{ marginLeft: "20px", display: "flex", justifyContent: "space-between" }}>
                  {fixedValues.map((value, index) => (
                    <div key={index}>{value}</div>
                  ))}
                </div>
                <div style={{ marginBottom: "40px" }}>
                  <input type="range" min="0" max={fixedValues.length - 1} step="1" value={sliderValue} onChange={handleSliderChange} style={{ width: "100%" }} />
                </div>
              </div>
              <div className=" col-12">
                <hr className="hr" />
                {sliderValue === 0 && (
                  <p className="p" style={{ color: "red" }}>
                    Please select company size
                  </p>
                )}
              </div>

              <div className=" col-12 case5">
                <div className="container selection">
                  <h2>How did you hear about PMS Solutions? </h2>

                  <div>
                    <div>
                      {colors.map((color, index) => (
                        <button key={index} className={`toggle-button ${buttonStates[index] ? "active" : ""}`} onClick={() => handleToggle(index)}>
                          {color}
                        </button>
                      ))}
                      <div style={{ marginTop: "10px" }}>{selectedButton !== null && <p>Sorce Of Information : {colors[selectedButton]} </p>}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="toast">
              <ToastContainer />
            </div>
          </>
        );

      case 6:
        return (
          <>
            <div className="col-12" style={{ display: "flex" }}>
              <div className="col-4" style={{ margin: "20px" }}>
                <img style={{ width: "30px" }} src={logo} alt="" />
                <b>PMS Solutions</b>
              </div>
              <div className="path col-12" style={{ marginRight: "200px" }}>
                <MultiStage steps={totalSteps} currentStepForm={2} stageNames={stageNames} />
              </div>
            </div>
            <div className="col-12"></div>

            <div className=" col-12 case6">
              <div className="container">
                <button onClick={() => handleButtonClick2("TaxPrepration")} style={{ backgroundColor: buttonStates2.TaxPrepration ? "#043a77" : "#3498db" }}>
                  Tax Prepration
                </button>
                <button onClick={() => handleButtonClick2("TaxPlanning")} style={{ backgroundColor: buttonStates2.TaxPlanning ? "#043a77" : "#3498db" }}>
                  Tax Planning
                </button>
                <button onClick={() => handleButtonClick2("Advisory")} style={{ backgroundColor: buttonStates2.Advisory ? "#043a77" : "#3498db" }}>
                  Advisory
                </button>
                <button onClick={() => handleButtonClick2("Resolution")} style={{ backgroundColor: buttonStates2.Resolution ? "#043a77" : "#3498db" }}>
                  Resolution
                </button>
                <button onClick={() => handleButtonClick2("Payroll")} style={{ backgroundColor: buttonStates2.Payroll ? "#043a77" : "#3498db" }}>
                  Payroll
                </button>
                <button onClick={() => handleButtonClick2("Accounting")} style={{ backgroundColor: buttonStates2.Accounting ? "#043a77" : "#3498db" }}>
                  Accounting
                </button>
                <button onClick={() => handleButtonClick2("Audit")} style={{ backgroundColor: buttonStates2.Audit ? "#043a77" : "#3498db" }}>
                  Audit
                </button>
                <button onClick={() => handleButtonClick2("LawFirm")} style={{ backgroundColor: buttonStates2.LawFirm ? "#043a77" : "#3498db" }}>
                  Law firm
                </button>
                <button onClick={() => handleButtonClick2("Bookkeeping")} style={{ backgroundColor: buttonStates2.Bookkeeping ? "#043a77" : "#3498db" }}>
                  Bookkeeping
                </button>
                <button onClick={() => handleButtonClick2("Other")} style={{ backgroundColor: buttonStates2.Other ? "#043a77" : "#3498db" }}>
                  Other
                </button>

                <div>
                  <p>{buttonsOn.length > 0 && <p>Buttons that are ON: {buttonsOn.join(", ")}</p>}</p>
                </div>
                <div>
                  <label>
                    <input type="checkbox" onChange={handleSelectAll} />
                    Select All
                  </label>
                  <button onClick={submitFerminfo}>Next</button>
                </div>
              </div>
            </div>

            <div className="toast">
              <ToastContainer />
            </div>
          </>
        );

      case 7:
        return (
          <div>
            <div className="col-12" style={{ display: "flex" }}>
              <div className="col-4" style={{ margin: "20px" }}>
                <img style={{ width: "30px" }} src={logo} alt="" />
                <b>PMS Solutions</b>
              </div>
              <div className="path col-12" style={{ marginRight: "200px" }}>
                <MultiStage steps={totalSteps} currentStepForm={2} stageNames={stageNames} />
              </div>
            </div>

            <div className="containerf">
              <div className=" col-12 case5">
                <div className="container selection">
                  <h1>Your role in the firm </h1>

                  <div>
                    <div>
                      {colors3.map((color, index) => (
                        <button key={index} className={`toggle-button ${buttonStates3[index] ? "active" : ""}`} onClick={() => handleToggle3(index)}>
                          {color}
                        </button>
                      ))}
                      <div style={{ marginTop: "10px" }}>{selectedButton3 !== null && <p>Sorce Of Information : {colors3[selectedButton3]} </p>}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 8:
        return (
          <>
            <div className="col-12" style={{ display: "flex" }}>
              <div className="col-4" style={{ margin: "20px" }}>
                <img style={{ width: "30px" }} src={logo} alt="" />
                <b>PMS Solutions</b>
              </div>
              <div className="path col-12" style={{ marginRight: "200px" }}>
                <MultiStage steps={totalSteps} currentStepForm={2} stageNames={stageNames} />
              </div>
            </div>

            <div className=" col-12 case8">
              <div className="container">
                <div className="firm">
                  <h2>Firm Settings</h2>

                  <div className="firm-info">
                    <p>
                      A powerful,integrated platform <br /> to manage teams,clients,projects.
                    </p>
                    <p>
                      <b>from $50/mo per user</b> <br />
                      (with a 3-year subscription plan)
                    </p>
                  </div>

                  <h3>Firm Setting</h3>

                  <p>choose web URL</p>
                  <p>You will be ale to set up a fully custom domain(without.pms.com) later</p>

                  <div className="url_container">
                    <input type="text" id="url_input" value={url} onChange={handleUrlChange} className="url" placeholder="Enter your URL" />
                    <label className="label" id="domin_lable">
                      .pms.com
                    </label>
                  </div>

                  <div className="currency-container">
                    <div className="currency">
                      <label>You cannot Change it later</label>
                      <br />

                      <div>
                        <label>Select Currency: </label>
                        <Select value={selectedCurrency} onChange={handleCurrencyChange} options={currencies} placeholder="Select a currency" />
                      </div>
                    </div>
                    <br />
                    <div>
                      <label>Select Language: </label>
                      <Select value={selectedLanguage} onChange={handleLanguageChange} options={languages} placeholder="Select a language" />

                      {selectedLanguage && <p>You selected: {selectedLanguage.label}</p>}
                    </div>
                  </div>
                  {/* submiturl */}
                  <button className="button" onClick={submiturl}>
                    Continue
                  </button>
                </div>
              </div>
              <div className="image">
                <img src={firmsetting} alt="" />
              </div>
            </div>
            <br />
            {/* <button onClick={nextStep} className="next">
              Next
            </button>
            <button onClick={prevStep} className="pre">
              Previous
            </button> */}
            <div className="toast">
              <ToastContainer />
            </div>
          </>
        );
      case 9:
        return (
          <>
            <div className="header">
              <div className="logo">
                <img src={logo} alt="" />
                <b>Microtech Solutions</b>
              </div>
              <div className="setting-path">
                <p className="number1">1</p>
                <p>Email</p>
                <p className="number2">2</p>
                <p>Information</p>
                <p className="number3">3</p>
                <p>Settings</p>
                <p className="number4">4</p>
                <p>Set Password</p>
              </div>
              <div className="header-info">
                <button className="login-btn" onClick={LoginButton}>
                  Login
                </button>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA-bIT8cA6U4J_rVPIp6RXAGuzlO3X5KWSBQ&usqp=CAU" alt="" />
                <h3>EN</h3>
              </div>
            </div>
            <div>
              <div className="pass" style={{ margin: "auto", width: "30%" }}>
                <div className="form_input">
                  <div className="passvalid">
                    <h1 style={{ alignItems: "center", justifyContent: "center", textContent: "center" }}>Set Password</h1>
                  </div>

                  <div className="form_input">
                    <label htmlFor="password">Password</label>
                    <div className="two">
                      <input type={!passShow ? "password" : "text"} onChange={setValP} value={inppass.password} name="password" id="password" placeholder="Enter Your password" />
                      <div className="showpass" onClick={() => setPassShow(!passShow)}>
                        {!passShow ? <FaEyeSlash /> : <FaEye />}
                      </div>
                    </div>
                  </div>

                  <div className="form_input">
                    <label htmlFor="password">Confirm Password</label>
                    <div className="two">
                      <input type={!cpassShow ? "password" : "text"} onChange={setValP} value={inppass.cpassword} name="cpassword" id="cpassword" placeholder="Confirm password" />
                      <div className="showpass" onClick={() => setCPassShow(!cpassShow)}>
                        {!cpassShow ? <FaEyeSlash /> : <FaEye />}
                      </div>
                    </div>
                  </div>
                </div>
                <button onClick={submitPassword} style={{ justifyContent: "center", marginLeft: "200px", marginRight: "150px", marginTop: "50px" }} className="next">
                  Continue
                </button>
              </div>
            </div>
            <div className="toast">
              <ToastContainer />
            </div>
          </>
        );

      // //book session
      case 10:
        return (
          <>
            <div className="header">
              <div className="logo">
                <img src={logo} alt="" />
                <b>Microtech Solutions</b>
              </div>
              <div className="setting-path">
                <p className="number1">1</p>
                <p>Email</p>
                <p className="number2">2</p>
                <p>Information</p>
                <p className="number3">3</p>
                <p>Settings</p>
                <p className="number4">4</p>
                <p>Set Password</p>
              </div>
              <div className="header-info">
                <button className="login-btn" onClick={LoginButton}>
                  Login
                </button>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA-bIT8cA6U4J_rVPIp6RXAGuzlO3X5KWSBQ&usqp=CAU" alt="" />
                <h3>EN</h3>
              </div>
            </div>

            <div className="message" style={{ justifyContent: "center" }}>
              <h2>Your Information</h2>
              <p style={{ color: "green", width: "500PX" }}>"SNP TaxConsultant, welcome to the pinnacle of tax excellence with PMS Solutions. Together, let's redefine financial success and deliver unparalleled solutions. Your journey to seamless tax management starts here!"</p>
            </div>

            <div className="toast">
              <ToastContainer />
            </div>
          </>
        );

      default:
        return null;
    }
  };

  return <form onSubmit={handleSubmit}>{renderFormFields()}</form>;
};

export default SignUp;
