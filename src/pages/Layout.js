import { Outlet, Link } from "react-router-dom";
import SidebarData from "../navbar/SidebarData";
import React, { useState, useEffect } from "react";
import "./layout.css";
import logo from "../img/logo.svg";
import { FaAngleLeft } from "react-icons/fa";
import "boxicons";
import "boxicons/css/boxicons.min.css";
import { IoSearch } from "react-icons/io5";
import { HiBars3 } from "react-icons/hi2";
import Sidebar from "../navbar/Sidebar";
import Adminlogin from "./AdminLogin";

const Layout = () => {
  const [mainSidebar, setMainSidebar] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [newsidebar, setNewSidebar] = useState(false);
  const [searchbar, setSearchbar] = useState(false);
  const [contactForm, setContactForm] = useState(false);
  const [accountform, setAccountForm] = useState(false);

  const [loggedIn, setLoggedIn] = useState(() => {
    // Check if the user is already logged in from localStorage
    const storedLoggedIn = localStorage.getItem("loggedIn");
    return storedLoggedIn ? JSON.parse(storedLoggedIn) : false;
  });
  const handleLogin = () => {
    // Logic to handle the login process
    // Set loggedIn to true when the user successfully logs in
    setLoggedIn(true);
  };
  const handleLogout = () => {
    // Logic to handle the logout process
    // Set loggedIn to false when the user logs out
    setLoggedIn(false);
  };
  // Update localStorage whenever loggedIn changes
  useEffect(() => {
    localStorage.setItem("loggedIn", JSON.stringify(loggedIn));
  }, [loggedIn]);

  const handleSidebar = () => {
    setMainSidebar(!mainSidebar);
  };
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  const handleNewSidebar = () => {
    setNewSidebar(!newsidebar);
    setSidebarOpen(false);
  };
  const handleSearchbar = () => {
    setSearchbar(!searchbar);
  };
  const handleAddNewCompanyClick = () => {
    setContactForm(!contactForm);
  };
  const handleFormClose = () => {
    setNewSidebar(false);
    setSearchbar(false);
  };
  const handleContactClose = () => {
    setContactForm(false);
  };

  const handleAddAccount = () => {
    setAccountForm(!accountform);
  };

  //const { sidebarOpen, setSidebarOpen } = state;
  const [SidebarItems, setSidebarItems] = useState(SidebarData);
  //let dark = window.localStorage.getItem("dark");

  // const toggleSidebar = () => {
  //   setSidebarOpen(!sidebarOpen);
  // };

  const toggleSubmenu = (index) => {
    const updatedSidebarItems = [...SidebarItems];
    updatedSidebarItems[index].subNavOpen = !updatedSidebarItems[index].subNavOpen;
    setSidebarItems(updatedSidebarItems);
  };

  return (
    <>
      <div>
        <button onClick={handleLogout}>Logout</button>
        {loggedIn ? (
          // Render Form 1
          <div className="row">
            <div className="bars-btn">
              <HiBars3 onClick={handleSidebar} />
              <i className="bx bx-chevron-right toggle"></i>
            </div>

            <div className={` ${sidebarOpen ? "col-2 menu" : "col-1 menu"}`}>
              <div className={`sidebar ${sidebarOpen ? "" : "close"}`}>
                <header>
                  <div className="image-text">
                    <span className="image">
                      <img src={logo} alt="" />
                    </span>
                    <div className="text logo-text">
                      <span className="name">SNP</span>
                    </div>
                  </div>
                </header>
                <div className="toggle">
                  <FaAngleLeft style={{ color: "white" }} onClick={toggleSidebar} />
                </div>

                {/* //todo sidebar map function */}
                <div className="menu-bar">
                  <div className="menus">
                    <ul className="menu-links">
                      {SidebarItems.map((item, index) => (
                        <li className="nav-link" key={index}>
                          <a href={item.path} onClick={() => item.subNav && toggleSubmenu(index)}>
                            <i className="icon " onClick={toggleSidebar}>
                              {item.icon}
                            </i>
                            <span className="text nav-text">{item.title}</span>
                            {item.subNav && <i className={`bx ${item.subNavOpen ? "bx-chevron-down" : "bx-chevron-up"} caret-icon`}></i>}
                          </a>
                          {item.subNav && item.subNavOpen && (
                            <ul className="submenu d-block">
                              {item.subNav.map((subItem, subIndex) => (
                                <li className="subnav-link" key={subIndex}>
                                  <a href={subItem.path}>
                                    <i className="icon " onClick={toggleSidebar}>
                                      {subItem.icon}
                                    </i>
                                    <span className="text nav-text">{subItem.title}</span>
                                  </a>
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* //todo sidebar map function */}
              </div>
            </div>

            <div className={` ${sidebarOpen ? "col-10 menu2" : "col-11 menu2close"} }`}>
              <Outlet />
            </div>
          </div>
        ) : (
          // Render Form 2

          <div className={` ${sidebarOpen ? "col-12 menu2" : "col-12 menu2close"} }`}>
            <Adminlogin toggleLogin={handleLogin} />
          </div>
        )}
      </div>
    </>
  );
};

export default Layout;
