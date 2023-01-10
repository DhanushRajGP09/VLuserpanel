import React, { useEffect } from "react";
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
import { Link, NavLink, json, useNavigate } from "react-router-dom";
import choiceimg from "../../Assets/choiceimg.png";
import topbusiness from "../../Assets/TopBusiness.png";
import topdesign from "../../Assets/TopDesign.png";
import play from "../../Assets/play.png";
import clock from "../../Assets/Clock.png";
import axios from "axios";
import {
  addChoiceCourse,
  addTheChoice,
  addTopcategory1,
  addTopcategory2,
  addcategoryid,
  addcourseId,
  addcourseName,
  getChoiceCourse,
  getTopcategory1,
  getTopcategory2,
} from "../../features/Courseslice";
import { useDispatch, useSelector } from "react-redux/es";

export default function Homepage() {
  const [activeall, setactiveall] = useState(true);
  const [activepopular, setactivepopular] = useState(false);
  const [activenewest, setactivenewest] = useState(false);

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

  const navigate = useNavigate();

  const username = JSON.parse(localStorage.getItem("name"));

  const token = JSON.parse(localStorage.getItem("token"));
  console.log("tokenfrom dash", token);

  const [Banner, setBanner] = useState([]);
  const [ongoingdata, setonGoingdata] = useState([]);
  const [TheChoice, SetTheChoice] = useState("courses");

  const getBanners = async () => {
    console.log("entered");
    axios({
      method: "get",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      url: "https://app-virtuallearning-230106135903.azurewebsites.net/user/view/banner",
    }).then(function (response) {
      console.log("recentcourses", response.data);
      setBanner(response.data);
    });
  };

  const getOngoing = async () => {
    console.log("entered");
    axios({
      method: "get",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      url: "https://app-virtuallearning-230106135903.azurewebsites.net/user/ongoing-courses",
    }).then(function (response) {
      console.log("recentcourses", response.data);
      setonGoingdata(response.data);
    });
  };
  const getAll = async () => {
    console.log("entered");
    axios({
      method: "get",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      url: "https://app-virtuallearning-230106135903.azurewebsites.net/user/view/courses?limit=100&page=1",
    }).then(function (response) {
      console.log("recentcourses", response.data);
      dispatch(addChoiceCourse(response.data));
      SetTheChoice("courses");
    });
  };
  const getPopular = async () => {
    console.log("entered");
    axios({
      method: "get",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      url: "https://app-virtuallearning-230106135903.azurewebsites.net/user/view/popularCourse?limit=100&page=1",
    }).then(function (response) {
      console.log("recentcourses", response.data);
      dispatch(addChoiceCourse(response.data));
      SetTheChoice("popularCourse");
    });
  };
  const getnewest = async () => {
    console.log("entered");
    axios({
      method: "get",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      url: "https://app-virtuallearning-230106135903.azurewebsites.net/user/view/newestCourse?limit=100&page=1",
    }).then(function (response) {
      console.log("recentcourses", response.data);
      dispatch(addChoiceCourse(response.data));
      SetTheChoice("newestCourse");
    });
  };

  const getchoice = useSelector(getChoiceCourse);
  console.log("choic", getchoice);

  const getcategory1 = async () => {
    console.log("entered");
    axios({
      method: "get",

      url: "https://app-virtuallearning-230106135903.azurewebsites.net/user/view/course/category1?limit=5&page=1",
    }).then(function (response) {
      console.log("recentcourses", response.data);
      dispatch(addTopcategory1(response.data));
    });
  };

  const getcategory2 = async () => {
    console.log("entered");
    axios({
      method: "get",
      params: {
        limit: 5,
        page: 1,
      },

      url: "https://app-virtuallearning-230106135903.azurewebsites.net/user/view/course/category2",
    }).then(function (response) {
      console.log("recentcourses", response.data);
      dispatch(addTopcategory2(response.data));
    });
  };

  const gettopcategory1 = useSelector(getTopcategory1);
  console.log("cat1", gettopcategory1);
  const gettopcategory2 = useSelector(getTopcategory2);
  console.log("cat2", gettopcategory2);

  const dispatch = useDispatch();
  const handleContinue = (id, name) => {
    dispatch(addcourseId(id));
    dispatch(addcourseName(name));
    localStorage.setItem("courseid", JSON.stringify(id));
    localStorage.setItem("coursename", JSON.stringify(name));
    navigate("/home/Courseview");
  };

  useEffect(() => {
    getBanners();
    getOngoing();
    getAll();
  }, []);

  useEffect(() => {
    getcategory1();
    getcategory2();
  }, []);

  console.log("banner", Banner);
  console.log("ongoingdata", ongoingdata);

  function handleAll() {
    setactiveall(true);
    setactivenewest(false);
    setactivepopular(false);
    getAll();
  }
  function handlePopular() {
    setactiveall(false);
    setactivenewest(false);
    setactivepopular(true);
    getPopular();
  }
  function handleNewest() {
    setactiveall(false);
    setactivenewest(true);
    setactivepopular(false);
    getnewest();
  }

  return (
    <div className="Homepagemain-div">
      <img src={hello} style={{ marginTop: "2%" }}></img>
      <span className="UserNameText">{username}</span>
      {Banner.length > 0 ? (
        <div className="TopCoursesMain-div">
          <div className="TopCoursesContainer">
            <img
              src={Banner[0].imageLink}
              style={{
                borderRadius: "6px",
                width: "540px",
                height: "332px",
                marginTop: "4%",
              }}
            ></img>
            <div className="gradient"></div>
          </div>
          <div className="TopCoursesContainer">
            <img
              src={Banner[1].imageLink}
              style={{
                borderRadius: "6px",
                width: "540px",
                height: "332px",
                marginTop: "4%",
              }}
            ></img>
            <div className="gradient"></div>
          </div>
          {Banner?.length > 2 ? (
            <div className="TopCoursesContainer">
              <img src={topimage1} style={{ borderRadius: "6px" }}></img>
              <div className="gradient"></div>
              <span className="TopCoursesContainerText">
                Digital Marketing Strategies
              </span>
            </div>
          ) : (
            ""
          )}
        </div>
      ) : (
        ""
      )}

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
          {Banner?.length > 3 ? (
            <img
              id="page2"
              src={notactive}
              style={{ cursor: "pointer" }}
              onClick={() => {
                handleChange(2);
              }}
            ></img>
          ) : (
            ""
          )}
          {Banner?.length > 6 ? (
            <img
              id="page3"
              src={notactive}
              style={{ cursor: "pointer" }}
              onClick={() => {
                handleChange(3);
              }}
            ></img>
          ) : (
            ""
          )}
          {Banner?.length > 9 ? (
            <img
              id="page4"
              src={notactive}
              style={{ cursor: "pointer" }}
              onClick={() => {
                handleChange(4);
              }}
            ></img>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="OngoingCoursesHeader">
        <img src={Ongoing}></img>
        <img
          src={seeall}
          style={{ cursor: "pointer", marginRight: "2%" }}
          onClick={() => {
            navigate("/home/Mycourse/Ongoing");
          }}
        ></img>
      </div>

      {ongoingdata?.length > 0 ? (
        <div className="OnGoingCoursesMain-div">
          <div className="OnGoingCoursesContainer">
            <img
              src={ongoingdata[0]?.course_image}
              style={{
                borderRadius: "6px",
                width: "519px",
                height: "332px",
                marginTop: "4%",
              }}
            ></img>
            <span className="OnGoingCoursesContainerText">
              {ongoingdata[0]?.course_name.length > 23
                ? ongoingdata[0]?.course_name.substr(0, 23) + "..."
                : ongoingdata[0]?.course_name}
            </span>
            <span className="CompletedOutOfText">
              {ongoingdata[0]?.completed_chapter_count}/
              {ongoingdata[0]?.chapter_count}
              chapters
            </span>
            <img
              src={continuebutton}
              className="continuebutton"
              onClick={() => {
                handleContinue(
                  ongoingdata[0]?.course_id,
                  ongoingdata[0]?.course_name
                );
              }}
            ></img>
          </div>
          <div className="OnGoingCoursesContainer">
            <img
              src={ongoingdata[1]?.course_image}
              style={{
                borderRadius: "6px",
                width: "519px",
                height: "332px",
                marginTop: "4%",
              }}
            ></img>
            <span className="OnGoingCoursesContainerText">
              {ongoingdata[1]?.course_name.length > 23
                ? ongoingdata[1]?.course_name.substr(0, 23) + "..."
                : ongoingdata[1]?.course_name}
            </span>
            <span className="CompletedOutOfText">
              {ongoingdata[1]?.completed_chapter_count}/
              {ongoingdata[1]?.chapter_count}
              chapters
            </span>
            <img
              src={continuebutton}
              className="continuebutton"
              onClick={() => {
                handleContinue(
                  ongoingdata[1]?.course_id,
                  ongoingdata[1]?.course_name
                );
              }}
            ></img>
          </div>
          <div className="OnGoingCoursesContainer">
            <img
              src={ongoingdata[2]?.course_image}
              style={{
                borderRadius: "6px",
                width: "519px",
                height: "332px",
                marginTop: "4%",
              }}
            ></img>
            <span className="OnGoingCoursesContainerText">
              {ongoingdata[2]?.course_name.length > 23
                ? ongoingdata[2]?.course_name.substr(0, 23) + "..."
                : ongoingdata[2]?.course_name}
            </span>
            <span className="CompletedOutOfText">
              {ongoingdata[2]?.completed_chapter_count}/
              {ongoingdata[2]?.chapter_count}
              chapters
            </span>
            <img
              src={continuebutton}
              className="continuebutton"
              onClick={() => {
                handleContinue(
                  ongoingdata[2]?.course_id,
                  ongoingdata[2]?.course_name
                );
              }}
            ></img>
          </div>
        </div>
      ) : (
        ""
      )}

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
          onClick={() => {
            dispatch(addTheChoice(TheChoice));
            navigate("/home/Choice");
          }}
        ></img>
      </div>
      <div className="ChoiceTabBar-div">
        <div className="Tabdiv">
          <span
            className="ChoiceTab"
            style={{
              backgroundColor: activeall ? "#dfe7f4" : "white",
              color: activeall ? "#092963" : "#7a7a7a",
            }}
            onClick={() => {
              handleAll();
            }}
          >
            All
          </span>
        </div>
        <div className="Tabdiv">
          <span
            className="ChoiceTab"
            style={{
              backgroundColor: activepopular ? "#dfe7f4" : "white",
              color: activepopular ? "#092963" : "#7a7a7a",
            }}
            onClick={() => {
              handlePopular();
            }}
          >
            Popular
          </span>
        </div>
        <div className="Tabdiv">
          <span
            className="ChoiceTab"
            style={{
              backgroundColor: activenewest ? "#dfe7f4" : "white",
              color: activenewest ? "#092963" : "#7a7a7a",
            }}
            onClick={() => {
              handleNewest();
            }}
          >
            Newest
          </span>
        </div>
      </div>
      {getchoice?.length > 0 ? (
        <div className="ChoiceDisplayMain-div">
          <div className="ChoiceContainer">
            <div className="ChoiceContainerImg">
              <img
                src={getchoice[0]?.course_image}
                style={{
                  borderRadius: "6px",
                  width: "342px",
                  height: "193px",
                }}
              ></img>
              <div className="ChoiceCategory">
                {getchoice[0]?.category_name}
              </div>
            </div>
            <div className="ChoiceContainerText-div">
              <span
                className="ChoiceContainerText"
                style={{ cursor: "pointer" }}
                onClick={() => {
                  handleContinue(
                    getchoice[0]?.course_id,
                    getchoice[0]?.course_name
                  );
                }}
              >
                {getchoice[0]?.course_name}
              </span>
              <span className="ChoiceChapter">
                {getchoice[0]?.chapter_count} Chapters
              </span>
            </div>
          </div>
          <div className="ChoiceContainer">
            <div className="ChoiceContainerImg">
              <img
                src={getchoice[1]?.course_image}
                style={{
                  borderRadius: "6px",
                  width: "342px",
                  height: "193px",
                }}
              ></img>
              <div className="ChoiceCategory">
                {getchoice[1]?.category_name}
              </div>
            </div>
            <div className="ChoiceContainerText-div">
              <span
                className="ChoiceContainerText"
                style={{ cursor: "pointer" }}
                onClick={() => {
                  handleContinue(
                    getchoice[1]?.course_id,
                    getchoice[1]?.course_name
                  );
                }}
              >
                {getchoice[1]?.course_name}
              </span>
              <span className="ChoiceChapter">
                {getchoice[1]?.chapter_count} Chapters
              </span>
            </div>
          </div>
          <div className="ChoiceContainer">
            <div className="ChoiceContainerImg">
              <img
                src={getchoice[2]?.course_image}
                style={{
                  borderRadius: "6px",
                  width: "342px",
                  height: "193px",
                }}
              ></img>
              <div className="ChoiceCategory">
                {getchoice[2]?.category_name}
              </div>
            </div>
            <div className="ChoiceContainerText-div">
              <span
                className="ChoiceContainerText"
                style={{ cursor: "pointer" }}
                onClick={() => {
                  handleContinue(
                    getchoice[2]?.course_id,
                    getchoice[2]?.course_name
                  );
                }}
              >
                {getchoice[2]?.course_name}
              </span>
              <span className="ChoiceChapter">
                {getchoice[2]?.chapter_count} Chapters
              </span>
            </div>
          </div>
          <div className="ChoiceContainer">
            <div className="ChoiceContainerImg">
              <img
                src={getchoice[3]?.course_image}
                style={{
                  borderRadius: "6px",
                  width: "342px",
                  height: "193px",
                }}
              ></img>
              <div className="ChoiceCategory">
                {getchoice[3]?.category_name}
              </div>
            </div>
            <div className="ChoiceContainerText-div">
              <span
                className="ChoiceContainerText"
                style={{ cursor: "pointer" }}
                onClick={() => {
                  handleContinue(
                    getchoice[3]?.course_id,
                    getchoice[3]?.course_name
                  );
                }}
              >
                {getchoice[3]?.course_name}
              </span>
              <span className="ChoiceChapter">
                {getchoice[3]?.chapter_count} Chapters
              </span>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      {gettopcategory2.length > 0 ? (
        <div className="OngoingCoursesHeader">
          <span className="Topcategory2text">
            Top courses in {gettopcategory2[0]?.category_name}{" "}
          </span>
          {gettopcategory2.length > 4 ? (
            <img
              src={seeall}
              style={{ cursor: "pointer", marginRight: "2%" }}
              onClick={() => {
                dispatch(addcategoryid(gettopcategory2[0]?.categoryId));
                navigate("/home/Topcategory");
              }}
            ></img>
          ) : (
            " "
          )}
        </div>
      ) : (
        ""
      )}
      {gettopcategory2.length > 0 ? (
        <div className="ChoiceDisplayMain-div">
          <div className="ChoiceContainer">
            <div className="ChoiceContainerImg">
              <img src={gettopcategory2[0]?.course_image}></img>
              <img
                src={play}
                className="Play"
                onClick={() => {
                  handleContinue(
                    gettopcategory2[0]?.course_id,
                    gettopcategory2[0]?.course_name
                  );
                }}
              ></img>
            </div>
            <div className="ChoiceContainerText-div">
              <span className="ChoiceContainerText">
                {gettopcategory2[0]?.course_name}
              </span>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "60%",
                }}
              >
                <span className="ChoiceChapter">
                  {gettopcategory2[0]?.chapter_count} Chapters
                </span>
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
                      marginLeft: "5%",
                      lineHeight: "26px",
                      color: "#7A7A7A",
                    }}
                  >
                    {(gettopcategory2[0]?.totalVideoLength / 3600 + " ").substr(
                      0,
                      5
                    )}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="ChoiceContainer">
            <div className="ChoiceContainerImg">
              <img src={gettopcategory2[1]?.course_image}></img>
              <img
                src={play}
                className="Play"
                onClick={() => {
                  handleContinue(
                    gettopcategory2[1]?.course_id,
                    gettopcategory2[1]?.course_name
                  );
                }}
              ></img>
            </div>
            <div className="ChoiceContainerText-div">
              <span className="ChoiceContainerText">
                {gettopcategory2[1]?.course_name}
              </span>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "60%",
                }}
              >
                <span className="ChoiceChapter">
                  {gettopcategory2[1]?.chapter_count} Chapters
                </span>
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
                      marginLeft: "5%",
                      fontWeight: "400",
                      fontSize: "16px",
                      lineHeight: "26px",
                      color: "#7A7A7A",
                    }}
                  >
                    {(gettopcategory2[1]?.totalVideoLength / 3600 + " ").substr(
                      0,
                      5
                    )}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="ChoiceContainer">
            <div className="ChoiceContainerImg">
              <img src={gettopcategory2[2]?.course_image}></img>
              <img
                src={play}
                className="Play"
                onClick={() => {
                  handleContinue(
                    gettopcategory2[2]?.course_id,
                    gettopcategory2[2]?.course_name
                  );
                }}
              ></img>
            </div>
            <div className="ChoiceContainerText-div">
              <span className="ChoiceContainerText">
                {gettopcategory2[2]?.course_name}
              </span>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "60%",
                }}
              >
                <span className="ChoiceChapter">
                  {gettopcategory2[2]?.chapter_count} Chapters
                </span>
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
                      marginLeft: "5%",
                      lineHeight: "26px",
                      color: "#7A7A7A",
                    }}
                  >
                    {(gettopcategory2[2]?.totalVideoLength / 3600 + " ").substr(
                      0,
                      5
                    )}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="ChoiceContainer">
            <div className="ChoiceContainerImg">
              <img src={gettopcategory2[3]?.course_image}></img>
              <img
                src={play}
                className="Play"
                onClick={() => {
                  handleContinue(
                    gettopcategory2[3]?.course_id,
                    gettopcategory2[3]?.course_name
                  );
                }}
              ></img>
            </div>
            <div className="ChoiceContainerText-div">
              <span className="ChoiceContainerText">
                {gettopcategory2[3]?.course_name}
              </span>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "60%",
                }}
              >
                <span className="ChoiceChapter">
                  {gettopcategory2[2]?.chapter_count} Chapters
                </span>
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
                      marginLeft: "5%",
                      color: "#7A7A7A",
                    }}
                  >
                    {(gettopcategory2[3]?.totalVideoLength / 3600 + " ").substr(
                      0,
                      5
                    )}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        " "
      )}
      {gettopcategory1.length > 0 ? (
        <div className="OngoingCoursesHeader">
          <span className="Topcategory2text">
            Top courses in {gettopcategory1[0]?.category_name}{" "}
          </span>

          {gettopcategory1.length > 4 ? (
            <img
              src={seeall}
              style={{ cursor: "pointer", marginRight: "2%" }}
              onClick={() => {
                dispatch(addcategoryid(gettopcategory1[0]?.categoryId));
                navigate("/home/Topcategory");
              }}
            ></img>
          ) : (
            ""
          )}
        </div>
      ) : (
        ""
      )}

      {gettopcategory1.length > 0 ? (
        <div
          className="ChoiceDisplayMain-div"
          style={{
            width: gettopcategory1.length > 3 ? "100%" : "75%",
          }}
        >
          <div className="ChoiceContainer">
            <div className="ChoiceContainerImg">
              <img
                src={gettopcategory1[0]?.course_image}
                style={{
                  borderRadius: "6px",
                  width: "342px",
                  height: "193px",
                }}
              ></img>
              <img
                src={play}
                className="Play"
                onClick={() => {
                  handleContinue(
                    gettopcategory1[0]?.course_id,
                    gettopcategory1[0]?.course_name
                  );
                }}
              ></img>
            </div>
            <div className="ChoiceContainerText-div">
              <span className="ChoiceContainerText">
                {gettopcategory1[0]?.course_name}
              </span>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "60%",
                }}
              >
                <span className="ChoiceChapter">
                  {gettopcategory1[0]?.chapter_count} Chapters
                </span>
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
                      marginLeft: "5%",
                      lineHeight: "26px",
                      color: "#7A7A7A",
                    }}
                  >
                    {(gettopcategory1[0]?.totalVideoLength / 3600 + " ").substr(
                      0,
                      5
                    )}
                  </span>
                </div>
              </div>
            </div>
          </div>
          {gettopcategory1?.length > 1 ? (
            <div className="ChoiceContainer">
              <div className="ChoiceContainerImg">
                <img
                  src={gettopcategory1[1]?.course_image}
                  style={{
                    borderRadius: "6px",
                    width: "342px",
                    height: "193px",
                  }}
                ></img>
                <img
                  src={play}
                  className="Play"
                  onClick={() => {
                    handleContinue(
                      gettopcategory1[1]?.course_id,
                      gettopcategory1[1]?.course_name
                    );
                  }}
                ></img>
              </div>
              <div className="ChoiceContainerText-div">
                <span className="ChoiceContainerText">
                  {gettopcategory1[1]?.course_name}
                </span>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "60%",
                  }}
                >
                  <span className="ChoiceChapter">
                    {gettopcategory1[1]?.chapter_count} Chapters
                  </span>
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
                        marginLeft: "5%",
                        fontWeight: "400",
                        fontSize: "16px",
                        lineHeight: "26px",
                        color: "#7A7A7A",
                      }}
                    >
                      {(
                        gettopcategory1[1]?.totalVideoLength / 3600 +
                        " "
                      ).substr(0, 5)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
          {gettopcategory1?.length > 2 ? (
            <div className="ChoiceContainer">
              <div className="ChoiceContainerImg">
                <img
                  src={gettopcategory1[2]?.course_image}
                  style={{
                    borderRadius: "6px",
                    width: "342px",
                    height: "193px",
                  }}
                ></img>
                <img
                  src={play}
                  className="Play"
                  onClick={() => {
                    handleContinue(
                      gettopcategory1[2]?.course_id,
                      gettopcategory1[2]?.course_name
                    );
                  }}
                ></img>
              </div>
              <div className="ChoiceContainerText-div">
                <span className="ChoiceContainerText">
                  {gettopcategory1[2]?.course_name}
                </span>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "60%",
                  }}
                >
                  <span className="ChoiceChapter">
                    {gettopcategory1[2]?.chapter_count} Chapters
                  </span>
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
                        marginLeft: "5%",
                        lineHeight: "26px",
                        color: "#7A7A7A",
                      }}
                    >
                      {(
                        gettopcategory1[2]?.totalVideoLength / 3600 +
                        " "
                      ).substr(0, 5)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
          {gettopcategory1?.length > 3 ? (
            <div className="ChoiceContainer">
              <div className="ChoiceContainerImg">
                <img
                  src={gettopcategory1[3]?.course_image}
                  style={{
                    borderRadius: "6px",
                    width: "342px",
                    height: "193px",
                  }}
                ></img>
                <img
                  src={play}
                  className="Play"
                  onClick={() => {
                    handleContinue(
                      gettopcategory1[3]?.course_id,
                      gettopcategory1[3]?.course_name
                    );
                  }}
                ></img>
              </div>
              <div className="ChoiceContainerText-div">
                <span className="ChoiceContainerText">
                  {gettopcategory1[3]?.course_name}
                </span>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "60%",
                  }}
                >
                  <span className="ChoiceChapter">
                    {gettopcategory1[3]?.chapter_count} Chapters
                  </span>
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
                        marginLeft: "5%",
                        color: "#7A7A7A",
                      }}
                    >
                      {(
                        gettopcategory1[3]?.totalVideoLength / 3600 +
                        " "
                      ).substr(0, 5)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      ) : (
        " "
      )}
    </div>
  );
}
