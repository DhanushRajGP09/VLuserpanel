import React from "react";
import "./Login.css";
import descimg from "../../Assets/img_onboarding_illustration3.png";
import engagement from "../../Assets/Learner Engagement.png";
import engagement2 from "../../Assets/Learner Engagement (1).png";
import engagement3 from "../../Assets/Learner Engagement (2).png";
import engagement4 from "../../Assets/Learner Engagement (3).png";
import logo from "../../Assets/img_virtuallearn logo_splash 2 (1).png";
import Userlogin from "../../Components/Userlogin/Userlogin";

export default function Login() {
  return (
    <div className="LoginMain-div">
      <div className="loginDesc-div">
        <div
          style={{
            display: "flex",
            height: "60%",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <img src={descimg}></img>
          <img src={engagement}></img>
          <img src={engagement2}></img>
        </div>
      </div>
      <div className="LoginSidebar">
        <div
          style={{
            display: "flex",
            height: "60%",

            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <img src={logo}></img>
          <img src={engagement3}></img>
          <img src={engagement4}></img>
          <Userlogin />
        </div>
      </div>
    </div>
  );
}
