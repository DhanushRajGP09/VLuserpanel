import React, { useEffect, useState } from "react";
import "./Courseview.css";
import right from "../../Assets/chevron_right_black_24dp (1) 1.png";

import axios from "axios";
import { useDispatch, useSelector } from "react-redux/es";
import { Route, Routes, useNavigate } from "react-router";
import footerlogo from "../../Assets/certificatefooterlogo.png";

import cup from "../../Assets/cup.png";
import {
  addCourseData,
  addcourseOverview,
  getCourseId,
  getCourseOverview,
  getOngoingCourseName,
} from "../../features/Courseslice";
import ReactPlayer from "react-player";
import Chapters from "../Chapters/Chapters";
import Overview from "../Overview/Overview";
import Chapterdummy from "../Chapterdummy/Chapterdummy";
import { nanoid } from "@reduxjs/toolkit/dist";
export default function Courseview() {
  const [overview, setOverview] = useState(false);
  const [chapters, setChapters] = useState(false);

  const randomid = nanoid();

  const navigate = useNavigate();
  const handleOverview = () => {
    setOverview(!overview);
    setChapters(false);
    setOnGoingpage(false);
    navigate("/Courseview");
  };
  const handleChapters = () => {
    setOverview(false);
    setChapters(!chapters);
    setOnGoingpage(true);
    navigate("/Courseview/Chapters");
  };

  useEffect(() => {
    if (window.location.pathname === "/Courseview") {
      setOverview(true);
    } else if (window.location.pathname === "/Courseview/Chapters") {
      setChapters(true);
    }
  }, []);
  const token = JSON.parse(localStorage.getItem("token"));
  console.log("tokenfrom dash", token);

  const localid = JSON.parse(localStorage.getItem("courseid"));
  const localname = JSON.parse(localStorage.getItem("coursename"));

  const [coursedata, setCoursedata] = useState([]);
  const [courseoverview, setCourseOverview] = useState([]);

  const [onGoingpage, setOnGoingpage] = useState(false);
  const dispatch = useDispatch();

  const getcourseid = useSelector(getCourseId);
  console.log("courseid", getcourseid);

  const getcoursename = useSelector(getOngoingCourseName);
  console.log("coursename", getcoursename);

  const [id, setid] = useState(getcourseid);
  const [name, setName] = useState(getcoursename);
  const [video, setvideo] = useState(false);
  const [videourl, setVideoUrl] = useState("");

  const getCourse = async () => {
    console.log("entered");
    axios({
      method: "get",
      params: {
        courseId: localid,
      },
      headers: {
        Authorization: `Bearer ${token}`,
      },
      url: `https://app-virtuallearning-230106135903.azurewebsites.net/user/view/chapter`,
    }).then(function (response) {
      console.log("recentcourss", response.data);
      setCoursedata(response.data);
      dispatch(addCourseData(response.data));
    });
  };

  const getOverview = async () => {
    console.log("entered");
    axios({
      method: "get",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      url: `https://app-virtuallearning-230106135903.azurewebsites.net/user/view/courseOverview?courseId=${localid}`,
    }).then(function (response) {
      console.log("recentcourss", response.data);
      setCourseOverview(response.data);
      dispatch(addcourseOverview(response.data));
    });
  };
  const OverView = useSelector(getCourseOverview);

  console.log("coursedat", coursedata);
  useEffect(() => {
    getOverview();
    getCourse();
    setid(getcourseid);
  }, []);

  const Totalvideo =
    coursedata?.courseContentResponse?.totalVideoLength / 3600 + " ";

  const videolength = Totalvideo.substr(0, 4);
  const username = JSON.parse(localStorage.getItem("name"));

  return (
    <>
      {coursedata && coursedata?.lessonResponseList?.length > 0 ? (
        <div className="CourseviewMain-div">
          <div
            className="CourseviewTab"
            style={{ width: onGoingpage ? "80%" : "13%" }}
          >
            <span
              className="MyCourse-text"
              onClick={() => {
                navigate("/Mycourse/Ongoing");
              }}
            >
              My Course
            </span>
            <img src={right}></img>
            <span
              className="MyCourse-text"
              style={{ color: onGoingpage ? "#2bb5f4" : "#7A7A7A" }}
            >
              Ongoing
            </span>
            <img
              src={right}
              style={{ display: onGoingpage ? "block" : "none" }}
            ></img>
            <span
              className="currentpageCourse-text"
              style={{ display: onGoingpage ? "block" : "none" }}
            >
              {localname}
            </span>
          </div>
          <div className="CourseViewInner-div">
            <div className="VideoDisplay-div">
              <div className="video-div">
                <ReactPlayer
                  controls
                  url={video ? videourl : OverView?.overview?.videoLink}
                  width="100%"
                  height="531px"
                />
              </div>
              <div className="VideoDescription-div">
                <div className="VideoDescriptionInner-div">
                  <span className="VideoDescription-Title">{localname}</span>
                  <span className="VideoDescription-lessons">
                    {coursedata?.courseContentResponse?.chapterCount} Chapter |{" "}
                    {coursedata?.courseContentResponse?.lessonCount} lessons
                  </span>
                </div>
                <div className="VideoDescription-category">
                  {OverView?.courseHeader?.category_name}
                </div>
              </div>
              {coursedata?.certificateGenerated ? (
                <div className="CompletedCourseMain-div">
                  <div className="CourseResultMain-div">
                    <span className="CourseResultText">Course Result</span>
                    <span className="ResultPercent">
                      {coursedata?.certificateResponse?.grade}%
                    </span>
                    <span className="ApprovalText">approval rate</span>
                  </div>
                  <div className="joinComplete-div">
                    <div className="joinCompleteInner-div">
                      <div className="joinDatediv">
                        <span className="joinDateText">Joined</span>
                        <span className="joinDate">
                          {coursedata?.certificateResponse?.joinDate}
                        </span>
                      </div>
                      <div className="joinDatediv">
                        <span className="joinDateText">Completed</span>
                        <span className="joinDate">
                          {coursedata?.certificateResponse?.completedDate}
                        </span>
                      </div>
                      <div className="joinDatediv">
                        <span className="joinDateText">Duration</span>
                        <span className="joinDate">
                          {(coursedata?.certificateResponse
                            ?.completionDuration /
                            3600) *
                            60}
                          m
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="FinalCertificateMain">
                    <div className="FinalCertificateInnerdetails">
                      <span className="certificatecomplete">
                        Certificate of Completion
                      </span>
                      <span className="certificateName">{username}</span>
                      <span className="certificateTitle">
                        {coursedata?.certificateResponse?.courseName}
                      </span>
                      <span className="certificatedescdetails">
                        Joined: {coursedata?.certificateResponse?.joinDate}{" "}
                        Completed:{" "}
                        {coursedata?.certificateResponse?.completedDate}{" "}
                        {(coursedata?.certificateResponse?.completionDuration /
                          3600) *
                          60}
                        m Certificate No: {randomid}
                      </span>
                    </div>
                    <div className="certificateFooter">
                      <img src={footerlogo} style={{ marginLeft: "5%" }}></img>
                    </div>
                    <img src={cup} className="cup"></img>
                  </div>
                </div>
              ) : (
                ""
              )}
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
              <Routes>
                <Route
                  path="/"
                  element={<Overview courseoverview={courseoverview} />}
                ></Route>
                <Route
                  path="/Chapters"
                  element={
                    <Chapters
                      coursedata={coursedata}
                      setVideoUrl={setVideoUrl}
                      setvideo={setvideo}
                    />
                  }
                ></Route>
              </Routes>
            </div>
          </div>
        </div>
      ) : (
        <div className="CourseviewMain-div">
          <div
            className="CourseviewTab"
            style={{ width: onGoingpage ? "80%" : "13%" }}
          >
            <span
              className="MyCourse-text"
              onClick={() => {
                navigate("/Mycourse/Ongoing");
              }}
            >
              My Course
            </span>
            <img src={right}></img>
            <span
              className="MyCourse-text"
              style={{ color: onGoingpage ? "#2bb5f4" : "#7A7A7A" }}
            >
              Ongoing
            </span>
            <img
              src={right}
              style={{ display: onGoingpage ? "block" : "none" }}
            ></img>
            <span
              className="currentpageCourse-text"
              style={{ display: onGoingpage ? "block" : "none" }}
            >
              Loading...
            </span>
          </div>
          <div className="CourseViewInner-div">
            <div className="VideoDisplay-div">
              <div className="VideoDisplay">
                <div className="VideoDisplay-gradient">Loading..</div>
              </div>
              <div className="VideoDescription-div">
                <div className="VideoDescriptionInner-div">
                  <span className="VideoDescription-Title">Loading...</span>
                  <span className="VideoDescription-lessons">Loading...</span>
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
              <Routes>
                <Route path="/" element={<Overview />}></Route>
                <Route path="/Chapters" element={<Chapterdummy />}></Route>
              </Routes>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
