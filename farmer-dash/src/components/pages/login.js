import React, { useState, useEffect } from "react";
import "./login.css";

const AnimatedForm = () => {
  const [isLoginFormVisible, setLoginFormVisibility] = useState(true);
  const [userType, setUserType] = useState("");

  const handleUserTypeChange = (e) => {
    setUserType(e.target.value);
  };

  useEffect(() => {
    const inputs = document.querySelectorAll("input");

    const handleInputFocus = (e) => {
      const parentElement = e.target.parentElement.parentElement;
      parentElement.classList.add("box-animation");
    };

    const handleInputBlur = (e) => {
      const parentElement = e.target.parentElement.parentElement;
      parentElement.classList.remove("box-animation");
    };

    inputs.forEach((input) => {
      input.addEventListener("focus", handleInputFocus);
      input.addEventListener("blur", handleInputBlur);
    });

    return () => {
      inputs.forEach((input) => {
        input.removeEventListener("focus", handleInputFocus);
        input.removeEventListener("blur", handleInputBlur);
      });
    };
  }, []);

  const handleButtonClick = () => {
    setLoginFormVisibility(!isLoginFormVisible);
  };
  

  return (
    <div className="customBody">
      <div className="main-form-container">
        <div
          id="form_section"
          className={`form-container ${isLoginFormVisible ? "" : "left-right"}`}
        >
          {isLoginFormVisible ? (
            <div className={`login-form form-wraper `}>
              <div>
                <div className="form-title">
                  <h2>Login</h2>
                </div>
                {/* <div className="">
                  <div className="box-dropdown">
                    <span>
                      <select 
                        placeholder="User Type"
                        className="myInput"
                        defaultValue={"customer"}
                      >
                        <option value="hello" >
                          User Type
                        </option>
                        <option value="customer">Farmers</option>
                        <option value="govtOfficial">Govt Officials</option>
                        <option value="headOfficial">Head Officials</option>
                      </select>
                    </span>
                  </div>
                </div> */}
                <div className="input-group">
                  <div className="box">
                    <span>
                      <input
                        placeholder="Email"
                        className="myInput"
                        type="text"
                      />
                    </span>
                  </div>
                </div>
                <div className="input-group">
                  <div className="box">
                    <span>
                      <input
                        placeholder="Password"
                        className="myInput"
                        type="password"
                      />
                    </span>
                  </div>
                </div>
                <div className="forget-password">
                  <a href="">Forget-password</a>
                </div>
                <div className="action-button">
                  <button>Login</button>
                </div>
              </div>
            </div>
          ) : (
            <div className={`signUp-form form-wraper`}>
              <div>
                <div className="form-title">
                  <h2>Sign Up</h2>
                </div>
                <div className="input-group">
                  <div className="box">
                    <span>
                      <input
                        placeholder="Full Name"
                        className="myInput"
                        type="text"
                      />
                    </span>
                  </div>
                </div>
                <div className="input-group">
                  <div className="box">
                    <span>
                      <input
                        placeholder="Email"
                        className="myInput"
                        type="text"
                      />
                    </span>
                  </div>
                </div>
                <div className="input-group">
                  <div className="box">
                    <span>
                      <input
                        placeholder="Mobile No."
                        className="myInput"
                        type="number"
                      />
                    </span>
                  </div>
                </div>
                <div style={{ marginBottom: "0px" }} className="input-group">
                  <div className="box">
                    <span>
                      <input
                        placeholder="Password"
                        className="myInput"
                        type="password"
                      />
                    </span>
                  </div>
                </div>
                <div className="action-button">
                  <button>Sign Up</button>
                </div>
              </div>
            </div>
          )}
        </div>
        <div id="multiple-btn" className="bg-btn-container">
          <div className="action-button">
            <button onClick={handleButtonClick}>Login</button>
          </div>
          <div className="action-button">
            <button onClick={handleButtonClick}>Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedForm;
