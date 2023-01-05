import React from "react";
import "./Homepage.css";
import hello from "../../Assets/Hello.png";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import topimage1 from "../../Assets/Bitmap.png";
import Active from "../../Assets/Activepage.png";
import notactive from "../../Assets/inactivepage.png";
import Ongoing from "../../Assets/Ongoingcourses.png";
import { useState } from "react";
import seeall from "../../Assets/SeeAll.png";
import continuebutton from "../../Assets/continuebutton.png";
import ongoingcourse from "../../Assets/ongoingcourse.png";
import categories from "../../Assets/Categories.png";
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
import Choiceyourcourse from "../../Assets/Choiceyourcourse.png";
import { Link, NavLink } from "react-router-dom";
import choiceimg from "../../Assets/choiceimg.png";
import topbusiness from "../../Assets/TopBusiness.png";
import topdesign from "../../Assets/TopDesign.png";
import play from "../../Assets/play.png";
import clock from "../../Assets/Clock.png";

export default function Homepage() {
  const arr = [0, 1, 2, 3, 4];

  const handleChange = (num) => {
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] === num) {
        console.log("entered");
        document.getElementById(`page${num}`).src = Active;
      } else {
        document.getElementById(`page${i}`).src = notactive;
      }
    }
  };

  return (
    <div className="Homepagemain-div">
      <img src={hello} style={{ marginTop: "2%" }}></img>
      <span className="UserNameText">Mahendra Singh Dhoni</span>
      <div className="TopCoursesMain-div">
        <div className="TopCoursesContainer">
          <img src={topimage1} style={{ borderRadius: "6px" }}></img>
          <div className="gradient"></div>
          <span className="TopCoursesContainerText">
            Product UX Design Course Sale
          </span>
        </div>
        <div className="TopCoursesContainer">
          <img src={topimage1} style={{ borderRadius: "6px" }}></img>
          <div className="gradient"></div>
          <span className="TopCoursesContainerText">Marketing Courses</span>
        </div>
        <div className="TopCoursesContainer">
          <img src={topimage1} style={{ borderRadius: "6px" }}></img>
          <div className="gradient"></div>
          <span className="TopCoursesContainerText">
            Digital Marketing Strategies
          </span>
        </div>
      </div>
      <div className="SliderContainer-div">
        <div className="SliderPagination">
          <img
            id="page1"
            src={Active}
            style={{ cursor: "pointer" }}
            onClick={() => {
              handleChange(1);
            }}
          ></img>
          <img
            id="page2"
            src={notactive}
            style={{ cursor: "pointer" }}
            onClick={() => {
              handleChange(2);
            }}
          ></img>
          <img
            id="page3"
            src={notactive}
            style={{ cursor: "pointer" }}
            onClick={() => {
              handleChange(3);
            }}
          ></img>
          <img
            id="page4"
            src={notactive}
            style={{ cursor: "pointer" }}
            onClick={() => {
              handleChange(4);
            }}
          ></img>
        </div>
      </div>
      <div className="OngoingCoursesHeader">
        <img src={Ongoing}></img>
        <img
          src={seeall}
          style={{ cursor: "pointer", marginRight: "2%" }}
        ></img>
      </div>
      <div className="OnGoingCoursesMain-div">
        <div className="OnGoingCoursesContainer">
          <img src={ongoingcourse} style={{ borderRadius: "6px" }}></img>
          <span className="OnGoingCoursesContainerText">
            Art & Illustration
          </span>
          <span className="CompletedOutOfText">15/20 chapters</span>
          <img src={continuebutton} className="continuebutton"></img>
        </div>
        <div className="OnGoingCoursesContainer">
          <img src={ongoingcourse} style={{ borderRadius: "6px" }}></img>
          <span className="OnGoingCoursesContainerText">User Interface</span>
          <span className="CompletedOutOfText">15/20 chapters</span>
          <img src={continuebutton} className="continuebutton"></img>
        </div>
        <div className="OnGoingCoursesContainer">
          <img src={ongoingcourse} style={{ borderRadius: "6px" }}></img>
          <span className="OnGoingCoursesContainerText">
            Learn Figma - UI/UX...
          </span>
          <span className="CompletedOutOfText">15/20 chapters</span>
          <img src={continuebutton} className="continuebutton"></img>
        </div>
      </div>
      <div className="CategoriesMain-div">
        <div className="CategoriesCoursesHeader">
          <img src={categories}></img>
          <img
            src={seeall}
            style={{ cursor: "pointer", marginRight: "2%" }}
          ></img>
        </div>
        <div className="CategoriesOptions-div">
          <img src={design} style={{ cursor: "pointer" }}></img>
          <img src={development} style={{ cursor: "pointer" }}></img>
          <img src={business} style={{ cursor: "pointer" }}></img>
          <img src={Music} style={{ cursor: "pointer" }}></img>
          <img src={finance} style={{ cursor: "pointer" }}></img>
          <img src={health} style={{ cursor: "pointer" }}></img>
          <img src={Itandsoftware} style={{ cursor: "pointer" }}></img>
          <img src={Marketing} style={{ cursor: "pointer" }}></img>
          <img
            src={Lifestyle}
            style={{ marginTop: "1%", cursor: "pointer" }}
          ></img>
          <img
            src={Photography}
            style={{ marginRight: "77%", marginTop: "1%", cursor: "pointer" }}
          ></img>
        </div>
      </div>
      <div className="OngoingCoursesHeader">
        <img src={Choiceyourcourse}></img>
        <img
          src={seeall}
          style={{ cursor: "pointer", marginRight: "2%" }}
        ></img>
      </div>
      <div className="ChoiceTabBar-div">
        <div className="Tabdiv">
          <Link className="ChoiceTab" to="/">
            All
          </Link>
        </div>
        <div className="Tabdiv">
          <Link className="ChoiceTab" to="/popular">
            Popular
          </Link>
        </div>
        <div className="Tabdiv">
          <Link className="ChoiceTab">Newest</Link>
        </div>
      </div>
      <div className="ChoiceDisplayMain-div">
        <div className="ChoiceContainer">
          <div className="ChoiceContainerImg">
            <img src={choiceimg}></img>
            <div className="ChoiceCategory">Design</div>
          </div>
          <div className="ChoiceContainerText-div">
            <span className="ChoiceContainerText">
              Learn Figma - UI/UX Design Essential Training
            </span>
            <span className="ChoiceChapter">7 Chapters</span>
          </div>
        </div>
        <div className="ChoiceContainer">
          <div className="ChoiceContainerImg">
            <img src={choiceimg}></img>
            <div className="ChoiceCategory">Marketing</div>
          </div>
          <div className="ChoiceContainerText-div">
            <span className="ChoiceContainerText">
              Digital Marketing for 2021 Masterclass
            </span>
            <span className="ChoiceChapter">7 Chapters</span>
          </div>
        </div>
        <div className="ChoiceContainer">
          <div className="ChoiceContainerImg">
            <img src={choiceimg}></img>
            <div className="ChoiceCategory">Business</div>
          </div>
          <div className="ChoiceContainerText-div">
            <span className="ChoiceContainerText">Smart Tips: Leadership</span>
            <span className="ChoiceChapter">7 Chapters</span>
          </div>
        </div>
        <div className="ChoiceContainer">
          <div className="ChoiceContainerImg">
            <img src={choiceimg}></img>
            <div className="ChoiceCategory">Music</div>
          </div>
          <div className="ChoiceContainerText-div">
            <span className="ChoiceContainerText">What makes epic musics?</span>
            <span className="ChoiceChapter">7 Chapters</span>
          </div>
        </div>
      </div>
      <div className="OngoingCoursesHeader">
        <img src={topbusiness}></img>
        <img
          src={seeall}
          style={{ cursor: "pointer", marginRight: "2%" }}
        ></img>
      </div>
      <div className="ChoiceDisplayMain-div">
        <div className="ChoiceContainer">
          <div className="ChoiceContainerImg">
            <img src={choiceimg}></img>
            <img src={play} className="Play"></img>
          </div>
          <div className="ChoiceContainerText-div">
            <span className="ChoiceContainerText">
              Learn Figma - UI/UX Design Essential Training
            </span>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "60%",
              }}
            >
              <span className="ChoiceChapter">7 Chapters</span>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "89.09px",
                  height: "26px",
                }}
              >
                <img src={clock}></img>
                <span
                  style={{
                    width: "69px",
                    height: "26px",
                    fontFamily: "Proxima Nova Soft",
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "16px",
                    lineHeight: "26px",
                    color: "#7A7A7A",
                  }}
                >
                  1:30:20
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="ChoiceContainer">
          <div className="ChoiceContainerImg">
            <img src={choiceimg}></img>
            <img src={play} className="Play"></img>
          </div>
          <div className="ChoiceContainerText-div">
            <span className="ChoiceContainerText">
              Digital Marketing for 2021 Masterclass
            </span>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "60%",
              }}
            >
              <span className="ChoiceChapter">7 Chapters</span>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "89.09px",
                  height: "26px",
                  backgroundColor: "lightblue",
                }}
              >
                <img src={clock}></img>
                <span
                  style={{
                    width: "69px",
                    height: "26px",
                    fontFamily: "Proxima Nova Soft",
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "16px",
                    lineHeight: "26px",
                    color: "#7A7A7A",
                  }}
                >
                  1:30:20
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="ChoiceContainer">
          <div className="ChoiceContainerImg">
            <img src={choiceimg}></img>
            <img src={play} className="Play"></img>
          </div>
          <div className="ChoiceContainerText-div">
            <span className="ChoiceContainerText">Smart Tips: Leadership</span>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "60%",
              }}
            >
              <span className="ChoiceChapter">7 Chapters</span>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "89.09px",
                  height: "26px",
                  backgroundColor: "lightblue",
                }}
              >
                <img src={clock}></img>
                <span
                  style={{
                    width: "69px",
                    height: "26px",
                    fontFamily: "Proxima Nova Soft",
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "16px",
                    lineHeight: "26px",
                    color: "#7A7A7A",
                  }}
                >
                  1:30:20
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="ChoiceContainer">
          <div className="ChoiceContainerImg">
            <img src={choiceimg}></img>
            <img src={play} className="Play"></img>
          </div>
          <div className="ChoiceContainerText-div">
            <span className="ChoiceContainerText">
              New Graphic Design Tutorials & Tips | Tutorials | Graphic Design
              Junction
            </span>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "60%",
              }}
            >
              <span className="ChoiceChapter">7 Chapters</span>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "89.09px",
                  height: "26px",
                  backgroundColor: "lightblue",
                }}
              >
                <img src={clock}></img>
                <span
                  style={{
                    width: "69px",
                    height: "26px",
                    fontFamily: "Proxima Nova Soft",
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "16px",
                    lineHeight: "26px",
                    color: "#7A7A7A",
                  }}
                >
                  1:30:20
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="OngoingCoursesHeader">
        <img src={topdesign}></img>
        <img
          src={seeall}
          style={{ cursor: "pointer", marginRight: "2%" }}
        ></img>
      </div>
      <div className="ChoiceDisplayMain-div">
        <div className="ChoiceContainer">
          <div className="ChoiceContainerImg">
            <img src={choiceimg}></img>
            <img src={play} className="Play"></img>
          </div>
          <div className="ChoiceContainerText-div">
            <span className="ChoiceContainerText">
              Learn Figma - UI/UX Design Essential Training
            </span>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "60%",
              }}
            >
              <span className="ChoiceChapter">7 Chapters</span>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "89.09px",
                  height: "26px",
                  backgroundColor: "lightblue",
                }}
              >
                <img src={clock}></img>
                <span
                  style={{
                    width: "69px",
                    height: "26px",
                    fontFamily: "Proxima Nova Soft",
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "16px",
                    lineHeight: "26px",
                    color: "#7A7A7A",
                  }}
                >
                  1:30:20
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="ChoiceContainer">
          <div className="ChoiceContainerImg">
            <img src={choiceimg}></img>
            <img src={play} className="Play"></img>
          </div>
          <div className="ChoiceContainerText-div">
            <span className="ChoiceContainerText">
              Digital Marketing for 2021 Masterclass
            </span>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "60%",
              }}
            >
              <span className="ChoiceChapter">7 Chapters</span>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "89.09px",
                  height: "26px",
                  backgroundColor: "lightblue",
                }}
              >
                <img src={clock}></img>
                <span
                  style={{
                    width: "69px",
                    height: "26px",
                    fontFamily: "Proxima Nova Soft",
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "16px",
                    lineHeight: "26px",
                    color: "#7A7A7A",
                  }}
                >
                  1:30:20
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="ChoiceContainer">
          <div className="ChoiceContainerImg">
            <img src={choiceimg}></img>
            <img src={play} className="Play"></img>
          </div>
          <div className="ChoiceContainerText-div">
            <span className="ChoiceContainerText">Smart Tips: Leadership</span>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "60%",
              }}
            >
              <span className="ChoiceChapter">7 Chapters</span>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "89.09px",
                  height: "26px",
                  backgroundColor: "lightblue",
                }}
              >
                <img src={clock}></img>
                <span
                  style={{
                    width: "69px",
                    height: "26px",
                    fontFamily: "Proxima Nova Soft",
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "16px",
                    lineHeight: "26px",
                    color: "#7A7A7A",
                  }}
                >
                  1:30:20
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="ChoiceContainer">
          <div className="ChoiceContainerImg">
            <img src={choiceimg}></img>
            <img src={play} className="Play"></img>
          </div>
          <div className="ChoiceContainerText-div">
            <span className="ChoiceContainerText">
              New Graphic Design Tutorials & Tips | Tutorials | Graphic Design
              Junction
            </span>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "60%",
              }}
            >
              <span className="ChoiceChapter">7 Chapters</span>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "89.09px",
                  height: "26px",
                  backgroundColor: "lightblue",
                }}
              >
                <img src={clock}></img>
                <span
                  style={{
                    width: "69px",
                    height: "26px",
                    fontFamily: "Proxima Nova Soft",
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "16px",
                    lineHeight: "26px",
                    color: "#7A7A7A",
                  }}
                >
                  1:30:20
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
