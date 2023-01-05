import React from "react";
import "./Tabbar.css";
import tablogo from "../../Assets/Tabbarlogo.png";
import searchicon from "../../Assets/MagnifyingGlass.png";
import bell from "../../Assets/Bell@2x.png";
import gear from "../../Assets/Gear@2x.png";
import profile from "../../Assets/Mask.png";

export default function Tabbar() {
  return (
    <div className="Tabbarmain-div">
      <div className="Tabbarinside-div">
        <img src={tablogo}></img>
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
            <img src={profile}></img>
          </div>
        </div>
      </div>
    </div>
  );
}
