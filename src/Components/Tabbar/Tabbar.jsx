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
import searchimage from "../../Assets/illustration-in-UI.png";

export default function Tabbar() {
  const [search, setSearch] = useState(false);
  const [searchinput, setSearchinput] = useState("");
  console.log("search", searchinput);

  const userimg = JSON.parse(localStorage.getItem("profileUrl"));
  console.log(userimg);
  const navigate = useNavigate();

  const handleSearch = async () => {
    let result = await fetch(
      "https://app-virtuallearning-230106135903.azurewebsites.net/user/view/search",
      {
        method: "post",
        body: JSON.stringify({
          searchOption: "desig",

          categories: ["design"],

          durationRequestList: [
            {
              startDuration: 3,

              endDuration: 10,
            },

            {
              startDuration: 3,

              endDuration: 20,
            },
          ],
        }),
      }
    );
    result = await result.json();
    console.warn(result);
    if (result) {
      console.log("res", result);
    } else {
      alert("result not found");
    }
  };

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
              value={searchinput}
              onChange={(e) => {
                setSearchinput(e.target.value);
                document.getElementById("TopSearch").style.display = "none";
                document.getElementById("categorySearch").style.display =
                  "none";
                document.getElementById("Searchresults").style.display = "flex";
                handleSearch();
              }}
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
        <div
          className="TopSearch"
          id="TopSearch"
          style={{ display: searchinput === "" ? "flex" : "none" }}
        >
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
        <div
          className="categorySearch"
          id="categorySearch"
          style={{ display: searchinput === "" ? "flex" : "none" }}
        >
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
      {search ? (
        <div
          className="Searchresults"
          id="Searchresults"
          style={{ display: searchinput === "" ? "none" : "flex" }}
        >
          <div className="ResultContainer-div">
            <div className="ResultContainer">
              <div className="Resultimg">
                <img className="SearchImage" src={searchimage}></img>
              </div>
              <div className="ResultDetails-div">
                <span className="TopSearchText">
                  Digital Marketing for 2021 Masterclass
                </span>
                <span className="ResultChapters">sddasd</span>
                <div className="ResultCategory">
                  designdddsssssssssssssssdddddd
                </div>
              </div>
            </div>
          </div>
          <div className="ResultContainer-div">
            <div className="ResultContainer">
              <div className="Resultimg">
                <img className="SearchImage" src={searchimage}></img>
              </div>
              <div className="ResultDetails-div">
                <span className="TopSearchText">
                  Digital Marketing for 2021 Masterclass
                </span>
                <span className="ResultChapters">sddasd</span>
                <div className="ResultCategory">
                  designdddsssssssssssssssdddddd
                </div>
              </div>
            </div>
          </div>
          <div className="ResultContainer-div">
            <div className="ResultContainer">
              <div className="Resultimg">
                <img className="SearchImage" src={searchimage}></img>
              </div>
              <div className="ResultDetails-div">
                <span className="TopSearchText">
                  Digital Marketing for 2021 Masterclass
                </span>
                <span className="ResultChapters">sddasd</span>
                <div className="ResultCategory">
                  designdddsssssssssssssssdddddd
                </div>
              </div>
            </div>
          </div>
          <div className="ResultContainer-div">
            <div className="ResultContainer">
              <div className="Resultimg">
                <img className="SearchImage" src={searchimage}></img>
              </div>
              <div className="ResultDetails-div">
                <span className="TopSearchText">
                  Digital Marketing for 2021 Masterclass
                </span>
                <span className="ResultChapters">sddasd</span>
                <div className="ResultCategory">
                  designdddsssssssssssssssdddddd
                </div>
              </div>
            </div>
          </div>
          <div className="ResultContainer-div">
            <div className="ResultContainer">
              <div className="Resultimg">
                <img className="SearchImage" src={searchimage}></img>
              </div>
              <div className="ResultDetails-div">
                <span className="TopSearchText">
                  Digital Marketing for 2021 Masterclass
                </span>
                <span className="ResultChapters">sddasd</span>
                <div className="ResultCategory">
                  designdddsssssssssssssssdddddd
                </div>
              </div>
            </div>
          </div>
          <div className="ResultContainer-div">
            <div className="ResultContainer">
              <div className="Resultimg">
                <img className="SearchImage" src={searchimage}></img>
              </div>
              <div className="ResultDetails-div">
                <span className="TopSearchText">
                  Digital Marketing for 2021 Masterclass
                </span>
                <span className="ResultChapters">sddasd</span>
                <div className="ResultCategory">
                  designdddsssssssssssssssdddddd
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
