import React, { useState } from "react";
import "./Tabbar.css";
import tablogo from "../../Assets/Tabbarlogo.png";
import searchicon from "../../Assets/MagnifyingGlass.png";
import bell from "../../Assets/Bell@2x.png";
import gear from "../../Assets/Gear@2x.png";
import profile from "../../Assets/Mask.png";
import { useNavigate } from "react-router";
import design from "../../Assets/Design.png";
import development from "../../Assets/Development.png";
import business from "../../Assets/Business.png";
import Music from "../../Assets/Music.png";
import finance from "../../Assets/Finance.png";
import health from "../../Assets/HealthandFitness.png";
import Itandsoftware from "../../Assets/Itandsoftware.png";
import Marketing from "../../Assets/Marketing.png";
import Lifestyle from "../../Assets/Lifestyle.png";
import Photography from "../../Assets/Photography.png";
import close from "../../Assets/X.png";

export default function Tabbar() {
  const [search, setSearch] = useState(false);

  const userimg = JSON.parse(localStorage.getItem("profileUrl"));
  console.log(userimg);
  const navigate = useNavigate();

  return (
    <div className="Tabbarmain-div" id="tabbarmain">
      <div className="Tabbarinside-div">
        <img
          src={tablogo}
          onClick={() => {
            navigate("/");
          }}
          style={{ cursor: "pointer" }}
        ></img>
        {search ? (
          <div
            className="Tabsearchmain-div"
            onClick={() => {
              document.getElementById("tabbarmain").style.height = "580px";
            }}
          >
            <input
              placeholder="search"
              style={{ marginLeft: "2%" }}
              className="Tabsearchinputactive"
            ></input>
            <div className="activesearchCover">
              <img src={searchicon} style={{ marginLeft: "2%" }}></img>
            </div>
          </div>
        ) : (
          <div
            className="Tabsearchmain-div"
            onClick={() => {
              document.getElementById("tabbarmain").style.height = "580px";
              setSearch(true);
            }}
          >
            <img src={searchicon} style={{ marginLeft: "2%" }}></img>
            <input
              placeholder="search"
              style={{ marginLeft: "2%" }}
              className="Tabsearchinput"
            ></input>
          </div>
        )}

        {search ? (
          <div className="Tabbaricons">
            <div className="TabProfile">
              <img
                src={close}
                style={{ width: "26px", height: "26px", cursor: "pointer" }}
                onClick={() => {
                  setSearch(false);
                  document.getElementById("tabbarmain").style.height = "100px";
                }}
              ></img>
            </div>
          </div>
        ) : (
          <div className="Tabbaricons">
            <div className="TabProfile">
              <img
                src={userimg}
                style={{ width: "40px", height: "40px", borderRadius: "50%" }}
              ></img>
            </div>
          </div>
        )}
      </div>
      {search ? (
        <div className="TopSearch">
          <span className="TopSearchText">Top Search</span>
          <div className="TopSearchIcons-div">
            <button className="TopSearchButton">
              <span className="TopSearchButtonText">Python</span>
            </button>
            <button className="TopSearchButton">
              <span className="TopSearchButtonText">Java</span>
            </button>
            <button className="TopSearchButton">
              <span className="TopSearchButtonText">Javascript</span>
            </button>
            <button className="TopSearchButton">
              <span className="TopSearchButtonText">Leadership</span>
            </button>
            <button className="TopSearchButton">
              <span className="TopSearchButtonText">Photoshop</span>
            </button>
            <button className="TopSearchButton">
              <span className="TopSearchButtonText">React</span>
            </button>
            <button className="TopSearchButton">
              <span className="TopSearchButtonText">Communication</span>
            </button>
          </div>
        </div>
      ) : (
        ""
      )}
      {search ? (
        <div className="categorySearch">
          <span className="TopSearchText">Search from Categories</span>
          <div className="categorySearchIconDiv">
            <img
              src={design}
              style={{
                cursor: "pointer",
                backgroundColor: "white",
                borderRadius: "6px",
                mixBlendMode: "normal",
              }}
            ></img>
            <img
              src={development}
              style={{
                cursor: "pointer",
                backgroundColor: "white",
                borderRadius: "6px",
                mixBlendMode: "normal",
              }}
            ></img>
            <img
              src={business}
              style={{
                cursor: "pointer",
                backgroundColor: "white",
                borderRadius: "6px",
                mixBlendMode: "normal",
              }}
            ></img>
            <img
              src={Music}
              style={{
                cursor: "pointer",
                backgroundColor: "white",
                borderRadius: "6px",
                mixBlendMode: "normal",
              }}
            ></img>
            <img
              src={finance}
              style={{
                cursor: "pointer",
                backgroundColor: "white",
                borderRadius: "6px",
                mixBlendMode: "normal",
              }}
            ></img>
            <img
              src={health}
              style={{
                cursor: "pointer",
                backgroundColor: "white",
                borderRadius: "6px",
                mixBlendMode: "normal",
              }}
            ></img>
            <img
              src={Itandsoftware}
              style={{
                cursor: "pointer",
                backgroundColor: "white",
                borderRadius: "6px",
                mixBlendMode: "normal",
              }}
            ></img>
            <img
              src={Marketing}
              style={{
                cursor: "pointer",
                backgroundColor: "white",
                borderRadius: "6px",
                mixBlendMode: "normal",
              }}
            ></img>
            <img
              src={Lifestyle}
              style={{
                marginTop: "1%",
                cursor: "pointer",
                backgroundColor: "white",
                borderRadius: "6px",
                mixBlendMode: "normal",
              }}
            ></img>
            <img
              src={Photography}
              style={{
                marginRight: "77%",
                marginTop: "1%",
                cursor: "pointer",
                backgroundColor: "white",
                borderRadius: "6px",
                mixBlendMode: "normal",
              }}
            ></img>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
