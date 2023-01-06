import React from "react";
import "./Tabbar.css";
import tablogo from "../../Assets/Tabbarlogo.png";
import searchicon from "../../Assets/MagnifyingGlass.png";
import bell from "../../Assets/Bell@2x.png";
import gear from "../../Assets/Gear@2x.png";
import profile from "../../Assets/Mask.png";
import { useNavigate } from "react-router";

export default function Tabbar() {
  const userimg = JSON.parse(localStorage.getItem("profileUrl"));
  console.log(userimg);
  const navigate = useNavigate();

  return (
    <div className="Tabbarmain-div">
      <div className="Tabbarinside-div">
        <img
          src={tablogo}
          onClick={() => {
            navigate("/");
          }}
          style={{ cursor: "pointer" }}
        ></img>
        <div className="Tabsearchmain-div">
          <img src={searchicon} style={{ marginLeft: "2%" }}></img>
          <input
            placeholder="search"
            style={{ marginLeft: "2%" }}
            className="Tabsearchinput"
          ></input>
        </div>
        <div className="Tabbaricons">
          <img src={bell}></img>
          <img src={gear}></img>
          <div className="TabProfile">
            <img
              src={userimg}
              style={{ width: "40px", height: "40px", borderRadius: "50%" }}
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}
