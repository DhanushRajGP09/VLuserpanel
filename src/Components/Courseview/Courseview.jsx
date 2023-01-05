import React, { useEffect, useState } from "react";
import "./Courseview.css";
import right from "../../Assets/chevron_right_black_24dp (1) 1.png";
import plus from "../../Assets/Arrow@2x.png";
import minus from "../../Assets/minus.png";

import redplay from "../../Assets/Red Play.png";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux/es";
import { useNavigate } from "react-router";
import { getCourseId, getOngoingCourseName } from "../../features/Courseslice";
export default function Courseview() {
  const [overview, setOverview] = useState(false);
  const [chapters, setChapters] = useState(true);

  const handleOverview = () => {
    setOverview(!overview);
    setChapters(false);
  };
  const handleChapters = () => {
    setOverview(false);
    setChapters(!chapters);
  };

  useEffect(() => {
    if (window.location.pathname === "/Courseview") {
      setChapters(true);
    }
  }, []);
  const token = JSON.parse(localStorage.getItem("token"));
  console.log("tokenfrom dash", token);

  const [coursedata, setCoursedata] = useState([]);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const getcourseid = useSelector(getCourseId);
  console.log("courseid", getcourseid);

  const getcoursename = useSelector(getOngoingCourseName);
  console.log("coursename", getcoursename);

  const [id, setid] = useState(getcourseid);
  const [name, setName] = useState(getcoursename);

  const getCourse = async () => {
    console.log("entered");
    axios({
      method: "get",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      url: `https://app-virtuallearning-221207091853.azurewebsites.net/user/view/chapter?courseId=${id}`,
    }).then(function (response) {
      console.log("recentcourss", response.data);
      setCoursedata(response.data);
    });
  };

  console.log("coursedata", coursedata);
  useEffect(() => {
    getCourse();
  }, []);

  return (
    <>
      {coursedata && coursedata?.lessonResponseList?.length > 0 ? (
        <div className="CourseviewMain-div">
          <div className="CourseviewTab">
            <span className="MyCourse-text">My Course</span>
            <img src={right}></img>
            <span className="MyCourse-text">Ongoing</span>
            <img src={right}></img>
            <span className="currentpageCourse-text">{name}</span>
          </div>
          <div className="CourseViewInner-div">
            <div className="VideoDisplay-div">
              <iframe
                className="VideoDisplay"
                src={
                  coursedata?.lessonResponseList[0]?.lessonList[0]?.videoLink
                }
              >
                <div className="VideoDisplay-gradient"></div>
              </iframe>
              <div className="VideoDescription-div">
                <div className="VideoDescriptionInner-div">
                  <span className="VideoDescription-Title">{name}</span>
                  <span className="VideoDescription-lessons">
                    {coursedata?.courseContentResponse?.chapterCount} Chapter |{" "}
                    {coursedata?.courseContentResponse?.lessonCount} lessons
                  </span>
                </div>
                <div className="VideoDescription-category">Design</div>
              </div>
            </div>
            <div className="VideoDisplaySidebar">
              <div className="VideoDisplaySideTab">
                <span
                  className="VideoDisplaySideTabOverview"
                  style={{
                    color: overview ? "#EC5D52" : "#7A7A7A",
                    borderBottom: overview ? "2px solid #EC5D52" : "none",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    handleOverview();
                  }}
                >
                  Overview
                </span>
                <span
                  className="VideoDisplaySideTabOverview"
                  style={{
                    color: chapters ? "#EC5D52" : "#7A7A7A",
                    borderBottom: chapters ? "2px solid #EC5D52" : "none",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    handleChapters();
                  }}
                >
                  Chapters
                </span>
              </div>
              <div className="CourseSidebar-header">
                <span className="CourseContentText">Course Content</span>
                <span className="CourseContentDetails">
                  7 Chapter | 46 lessons | 6 Assignment Test | 3.5h total length
                </span>
              </div>
              <div className="ChapterContainer-div" id="ChapterContainer-div">
                <div
                  style={{
                    display: "flex",
                    width: "100%",

                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <span className="ChapterName">
                    Chapter 1 - Introduction to the course
                  </span>
                  <img
                    id="img"
                    src={plus}
                    style={{ marginRight: "2%", cursor: "pointer" }}
                    onClick={() => {
                      if (
                        document.getElementById("ChaptersContainer").style
                          .display === "flex"
                      ) {
                        document.getElementById(
                          "ChaptersContainer"
                        ).style.display = "none";
                        document.getElementById("img").src = plus;
                        document.getElementById(
                          "ChapterContainer-div"
                        ).style.height = "30px";
                      } else {
                        document.getElementById(
                          "ChaptersContainer"
                        ).style.display = "flex";
                        document.getElementById(
                          "ChapterContainer-div"
                        ).style.height = "auto";
                        document.getElementById("img").src = minus;
                      }
                    }}
                  ></img>
                </div>
                <div className="ChaptersContainer" id="ChaptersContainer">
                  <div className="lessons-div">
                    <div className="ChaptersContainerMain-div">
                      <div className="ProgressContainer-div"></div>
                      <div className="lessonContainer">
                        <span className="lessonNum">20</span>
                        <div className="lessonDetails">
                          <span className="lessonName">
                            Creating a New Project and File
                          </span>
                          <span className="lessonDuration">01.38 mins</span>
                        </div>
                        <img
                          src={redplay}
                          style={{ marginRight: "2%", cursor: "pointer" }}
                        ></img>
                      </div>
                    </div>
                    <div className="ChaptersContainerMain-div">
                      <div className="ProgressContainer-div"></div>
                      <div className="lessonContainer">
                        <span className="lessonNum">20</span>
                        <div className="lessonDetails">
                          <span className="lessonName">
                            Creating a New Project and File
                          </span>
                          <span className="lessonDuration">01.38 mins</span>
                        </div>
                        <img
                          src={redplay}
                          style={{ marginRight: "2%", cursor: "pointer" }}
                        ></img>
                      </div>
                    </div>
                    <div className="ChaptersContainerMain-div">
                      <div className="ProgressContainer-div"></div>
                      <div className="lessonContainer">
                        <span className="lessonNum">20</span>
                        <div className="lessonDetails">
                          <span className="lessonName">Creating a New </span>
                          <span className="lessonDuration">01.38 mins</span>
                        </div>
                        <img
                          src={redplay}
                          style={{ marginRight: "2%", cursor: "pointer" }}
                        ></img>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="CourseviewMain-div">
          <div className="CourseviewTab">
            <span className="MyCourse-text">My Course</span>
            <img src={right}></img>
            <span className="MyCourse-text">Ongoing</span>
            <img src={right}></img>
            <span className="currentpageCourse-text">Course title</span>
          </div>
          <div className="CourseViewInner-div">
            <div className="VideoDisplay-div">
              <iframe className="VideoDisplay">
                <div className="VideoDisplay-gradient"></div>
              </iframe>
              <div className="VideoDescription-div">
                <div className="VideoDescriptionInner-div">
                  <span className="VideoDescription-Title">
                    Learn Figma - UI/UX Design Essential Training
                  </span>
                  <span className="VideoDescription-lessons">
                    7 Chapter | 46 lessons
                  </span>
                </div>
                <div className="VideoDescription-category">Design</div>
              </div>
            </div>
            <div className="VideoDisplaySidebar">
              <div className="VideoDisplaySideTab">
                <span
                  className="VideoDisplaySideTabOverview"
                  style={{
                    color: overview ? "#EC5D52" : "#7A7A7A",
                    borderBottom: overview ? "2px solid #EC5D52" : "none",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    handleOverview();
                  }}
                >
                  Overview
                </span>
                <span
                  className="VideoDisplaySideTabOverview"
                  style={{
                    color: chapters ? "#EC5D52" : "#7A7A7A",
                    borderBottom: chapters ? "2px solid #EC5D52" : "none",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    handleChapters();
                  }}
                >
                  Chapters
                </span>
              </div>
              <div className="CourseSidebar-header">
                <span className="CourseContentText">Course Content</span>
                <span className="CourseContentDetails">
                  7 Chapter | 46 lessons | 6 Assignment Test | 3.5h total length
                </span>
              </div>
              <div className="ChapterContainer-div" id="ChapterContainer-div">
                <div
                  style={{
                    display: "flex",
                    width: "100%",

                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <span className="ChapterName">
                    Chapter 1 - Introduction to the course
                  </span>
                  <img
                    id="img"
                    src={plus}
                    style={{ marginRight: "2%", cursor: "pointer" }}
                    onClick={() => {
                      if (
                        document.getElementById("ChaptersContainer").style
                          .display === "flex"
                      ) {
                        document.getElementById(
                          "ChaptersContainer"
                        ).style.display = "none";
                        document.getElementById("img").src = plus;
                        document.getElementById(
                          "ChapterContainer-div"
                        ).style.height = "30px";
                      } else {
                        document.getElementById(
                          "ChaptersContainer"
                        ).style.display = "flex";
                        document.getElementById(
                          "ChapterContainer-div"
                        ).style.height = "auto";
                        document.getElementById("img").src = minus;
                      }
                    }}
                  ></img>
                </div>
                <div className="ChaptersContainer" id="ChaptersContainer">
                  <div className="lessons-div">
                    <div className="ChaptersContainerMain-div">
                      <div className="ProgressContainer-div"></div>
                      <div className="lessonContainer">
                        <span className="lessonNum">20</span>
                        <div className="lessonDetails">
                          <span className="lessonName">
                            Creating a New Project and File
                          </span>
                          <span className="lessonDuration">01.38 mins</span>
                        </div>
                        <img
                          src={redplay}
                          style={{ marginRight: "2%", cursor: "pointer" }}
                        ></img>
                      </div>
                    </div>
                    <div className="ChaptersContainerMain-div">
                      <div className="ProgressContainer-div"></div>
                      <div className="lessonContainer">
                        <span className="lessonNum">20</span>
                        <div className="lessonDetails">
                          <span className="lessonName">
                            Creating a New Project and File
                          </span>
                          <span className="lessonDuration">01.38 mins</span>
                        </div>
                        <img
                          src={redplay}
                          style={{ marginRight: "2%", cursor: "pointer" }}
                        ></img>
                      </div>
                    </div>
                    <div className="ChaptersContainerMain-div">
                      <div className="ProgressContainer-div"></div>
                      <div className="lessonContainer">
                        <span className="lessonNum">20</span>
                        <div className="lessonDetails">
                          <span className="lessonName">Creating a New </span>
                          <span className="lessonDuration">01.38 mins</span>
                        </div>
                        <img
                          src={redplay}
                          style={{ marginRight: "2%", cursor: "pointer" }}
                        ></img>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
