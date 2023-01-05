import React, { useEffect, useState } from "react";
import "./Userlogin.css";

import { Link, useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import axios from "axios";

const Userlogin = () => {
  const [usernamevalue, setusername] = useState("");
  const [passwordvalue, setpassword] = useState("");

  const navigate = useNavigate();
  const handleLogin = async () => {
    let result = await fetch(
      "https://app-virtuallearning-221207091853.azurewebsites.net/auth/login",
      {
        method: "post",

        headers: {
          "Content-Type": "application/JSON",
          username: usernamevalue,
          password: passwordvalue,
        },
      }
    );
    result = await result.json();
    console.warn(result);
    if (result) {
      localStorage.setItem("token", JSON.stringify(result.token));
      localStorage.setItem("profileUrl", JSON.stringify(result.profileUrl));
      localStorage.setItem("name", JSON.stringify(result.name));
      localStorage.setItem("emailId", JSON.stringify(result.emailId));
      localStorage.setItem("Number", JSON.stringify(result.phoneNumber));

      navigate("/");
    } else {
      alert("Please enter the correct details");
    }
  };

  useEffect(() => {
    const auth = localStorage.getItem("token");
    if (auth) {
      navigate("/");
    }
  }, []);

  return (
    <div>
      <div className="login-form">
        <div className="form-input">
          <Box
            className="form-box"
            component="form"
            sx={{
              "& > :not(style)": {
                m: 1,
                width: "38ch",
                borderColor: "red",
              },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="standard-basic 1"
              InputProps={{
                style: {
                  color: "white",
                  fontFamily: "Avenir",
                  fontSize: "20px",
                  letterSpacing: "0.4px",
                  // paddingLeft: "0.5rem",
                  lineHeight: "27.32PX",
                  fontWeight: "500",
                },
              }}
              label="User Name"
              InputLabelProps={{
                style: {
                  color: "#7A7A7A",
                  fontSize: "16px",
                  fontWeight: "400",
                  fontFamily: "Avenir",
                  fontStyle: "Roman",
                  lineHeight: "21.86px",
                  letterSpacing: "0.4px",
                },
              }}
              variant="standard"
              value={usernamevalue}
              onChange={(e) => {
                setusername(e.target.value);
              }}
            />

            <TextField
              id="standard-basic 2"
              InputProps={{
                style: {
                  color: "white",
                  fontFamily: "Avenir",
                  fontSize: "20px",
                  letterSpacing: "0.4px",
                  // paddingLeft: "0.5rem",
                  lineHeight: "27.32PX",
                  fontWeight: "500",
                  borderBottom: "red !important",
                },
              }}
              type="password"
              InputLabelProps={{
                style: {
                  color: "#7A7A7A",
                  fontSize: "16px",
                  fontWeight: "400",
                  fontFamily: "Avenir",
                  fontStyle: "Roman",
                  lineHeight: "21.86px",
                  letterSpacing: "0.4px",
                },
              }}
              label="Password"
              variant="standard"
              value={passwordvalue}
              onChange={(e) => {
                setpassword(e.target.value);
              }}
            />
          </Box>
        </div>
        <div className="fogrot-password">
          <Link to="/forgotpassword">Forgot Password?</Link>
        </div>

        <button className="login-btn">
          <span
            className="login-text"
            onClick={() => {
              handleLogin();
            }}
            style={{ cursor: "pointer" }}
          >
            Login
          </span>
        </button>
      </div>
    </div>
  );
};
export default Userlogin;
