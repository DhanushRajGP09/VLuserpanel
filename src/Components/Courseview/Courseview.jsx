import React, { useEffect, useState } from "react";
import "./Courseview.css";
import right from "../../Assets/chevron_right_black_24dp (1) 1.png";

import axios from "axios";
import { useDispatch, useSelector } from "react-redux/es";
import { Route, Routes, useNavigate } from "react-router";
import { getCourseId, getOngoingCourseName } from "../../features/Courseslice";
import ReactPlayer from "react-player";
import Chapters from "../Chapters/Chapters";
import Overview from "../Overview/Overview";
import Chapterdummy from "../Chapterdummy/Chapterdummy";
export default function Courseview() {
  const [overview, setOverview] = useState(false);
  const [chapters, setChapters] = useState(false);

  const navigate = useNavigate();
  const handleOverview = () => {
    setOverview(!overview);
    setChapters(false);
    navigate("/Courseview");
  };
  const handleChapters = () => {
    setOverview(false);
    setChapters(!chapters);
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

  const [coursedata, setCoursedata] = useState([]);

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

  const Totalvideo =
    coursedata?.courseContentResponse?.totalVideoLength / 3600 + " ";

  const videolength = Totalvideo.substr(0, 4);

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
              <div className="video-div">
                <ReactPlayer
                  controls
                  url={
                    video
                      ? videourl
                      : coursedata?.lessonResponseList[0]?.lessonList[0]
                          ?.videoLink
                  }
                  width="100%"
                  height="531px"
                />
              </div>
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
              <Routes>
                <Route path="/" element={<Overview />}></Route>
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
          <div className="CourseviewTab">
            <span className="MyCourse-text">My Course</span>
            <img src={right}></img>
            <span className="MyCourse-text">Ongoing</span>
            <img src={right}></img>
            <span className="currentpageCourse-text">Loading.....</span>
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
