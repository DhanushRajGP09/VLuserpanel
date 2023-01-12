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
  getTheLessonID,
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
    navigate("/home/Courseview");
  };
  const handleChapters = () => {
    setOverview(false);
    setChapters(!chapters);
    setOnGoingpage(true);
    navigate("/home/Courseview/Chapters");
  };

  useEffect(() => {
    if (window.location.pathname === "/home/Courseview") {
      setOverview(true);
    } else if (window.location.pathname === "/home/Courseview/Chapters") {
      setChapters(true);
    }
  }, []);
  const token = JSON.parse(localStorage.getItem("token"));

  const localid = JSON.parse(localStorage.getItem("courseid"));
  const localname = JSON.parse(localStorage.getItem("coursename"));

  const [coursedata, setCoursedata] = useState([]);
  const [courseoverview, setCourseOverview] = useState([]);

  const [onGoingpage, setOnGoingpage] = useState(false);
  const dispatch = useDispatch();

  const getcourseid = useSelector(getCourseId);
  console.log("courseid", getcourseid);

  const getcoursename = useSelector(getOngoingCourseName);
  console.log("coursenam", getcoursename);

  const [id, setid] = useState(getcourseid);
  const [name, setName] = useState(getcoursename);
  const [video, setvideo] = useState(false);
  const [videourl, setVideoUrl] = useState("");
  const [image, setImage] = useState(false);
  const [imageurl, setImageUrl] = useState("");

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
      if (response.data.currentLesson === null) {
        setTheLessonId(
          response.data.lessonResponseList[0]?.lessonList[0]?.lessonId
        );
      } else if (response.data.currentLesson !== null) {
        setTheLessonId(response.data.currentLesson.lessonId);
      }
      dispatch(addCourseData(response.data));
    });
  };
  const [played, setPlayed] = useState(0);

  console.log("plaaa", played);

  const getOverview = async () => {
    console.log("entere");
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

  const [theLessonId, setTheLessonId] = useState(0);

  const getthelessonid = useSelector(getTheLessonID);
  console.log("getthelessoni", getthelessonid);

  const handleOnPause = async (time) => {
    console.log("entered");
    axios({
      method: "post",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        lessonId: image
          ? getthelessonid
          : coursedata?.currentLesson !== null
          ? coursedata?.currentLesson?.lessonId
          : coursedata?.lessonResponseList[0]?.lessonList[0]?.lessonId,
        duration: time,
      },
      url: `https://app-virtuallearning-230106135903.azurewebsites.net/user/lesson`,
    }).then(function (response) {
      console.log(response);
    });
  };

  const [changeLight, setChangeLight] = useState(true);

  const localVideoURL = JSON.parse(localStorage.getItem("videoURL"));

  const handleOnEnd = async (time) => {
    console.log("entered");
    axios({
      method: "post",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        lessonId: image
          ? getthelessonid + 1
          : coursedata?.currentLesson !== null
          ? coursedata?.currentLesson?.lessonId + 1
          : coursedata?.lessonResponseList[0]?.lessonList[0]?.lessonId + 1,
        duration: time,
      },
      url: `https://app-virtuallearning-230106135903.azurewebsites.net/user/lesson`,
    }).then(function (response) {
      console.log("End", response);
      console.log("onenddata", coursedata);
    });
  };

  const OverView = useSelector(getCourseOverview);
  const [thumbtext, setThumbtext] = useState(true);

  console.log("courseda", coursedata);
  useEffect(() => {
    getOverview();
    getCourse();
    setid(getcourseid);
  }, []);

  console.log("played", played);

  const handlerender = () => {
    console.log("rendered");
  };

  const Totalvideo =
    coursedata?.courseContentResponse?.totalVideoLength / 3600 + " ";

  const [nextvideo, setNextvideo] = useState("");
  console.log("nex", nextvideo);

  const videolength = Totalvideo.substr(0, 4);
  const username = JSON.parse(localStorage.getItem("name"));

  const playerRef = React.useRef();

  const [TheRef, setTheRef] = useState(false);

  const onReady = React.useCallback(() => {
    const timeToStart =
      coursedata?.currentLesson !== null
        ? coursedata?.currentLesson?.durationCompleted
        : 0;
    playerRef.current.seekTo(timeToStart, "seconds");
  }, [playerRef.current]);

  const onHandlePause = React.useCallback(() => {
    const time = playerRef.current.getCurrentTime();
    setPlayed(Math.round(time));
    handleOnPause(Math.round(time));
    handlerender();
  }, [playerRef.current]);
  console.log("thelid,du", theLessonId, played);

  const onHandleEnd = React.useCallback(() => {
    const time = playerRef.current.getCurrentTime();
    setPlayed(Math.round(time));
    setVideoUrl(true);

    handleOnEnd(1);
  }, [playerRef.current]);

  console.log("video", video);

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
                navigate("/home/Mycourse/Ongoing");
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
              <div
                className="video-div"
                onClick={() => {
                  setThumbtext(false);
                }}
              >
                <ReactPlayer
                  onStart={() => {
                    setTheRef(true);
                  }}
                  playing={true}
                  onPause={() => {
                    onHandlePause();
                  }}
                  onEnded={() => {
                    onHandlePause();
                    onHandleEnd();
                    getCourse();
                    localStorage.setItem("videoURL", JSON.stringify(nextvideo));
                  }}
                  ref={playerRef}
                  controls
                  light={
                    changeLight
                      ? coursedata?.currentLesson !== null
                        ? coursedata?.currentLesson.videoLink.replace(
                            ".mp4",
                            ".jpg"
                          )
                        : OverView?.overview?.videoLink.replace(".mp4", ".jpg")
                      : false
                  }
                  url={
                    video
                      ? localVideoURL
                      : coursedata?.currentLesson !== null
                      ? coursedata?.currentLesson?.videoLink
                      : OverView?.overview?.videoLink
                  }
                  width="100%"
                  height="531px"
                  onReady={TheRef ? onHandlePause : onReady}
                />
                <div
                  className="video-heading"
                  style={{
                    display: thumbtext ? "flex" : "none",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    setChangeLight(false);
                  }}
                >
                  {coursedata?.joinedCourse ? (
                    <>
                      {" "}
                      <p className="video-heading-style">
                        Continue Chapter{" "}
                        {coursedata?.currentLesson?.chapterNumber} Lesson{" "}
                        {coursedata?.currentLesson?.lessonNumber}
                      </p>{" "}
                    </>
                  ) : (
                    <>
                      {" "}
                      <p className="video-heading-style">
                        Course Introduction
                      </p>{" "}
                    </>
                  )}
                </div>
                <div
                  className="video-footer"
                  style={{
                    display: thumbtext ? "block" : "none",
                  }}
                >
                  {coursedata?.currentLesson?.lessonName}
                </div>
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
                          {(
                            (coursedata?.certificateResponse
                              ?.completionDuration /
                              3600) *
                              60 +
                            " "
                          ).substr(0, 2)}
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
                        {(
                          (coursedata?.certificateResponse?.completionDuration /
                            3600) *
                            60 +
                          " "
                        ).substr(0, 2)}
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
                  exact
                  path="/"
                  element={<Overview courseoverview={courseoverview} />}
                ></Route>
                <Route
                  exact
                  path="/Chapters"
                  element={
                    <Chapters
                      coursedata={coursedata}
                      setVideoUrl={setVideoUrl}
                      setvideo={setvideo}
                      setTheLessonId={setTheLessonId}
                      setNextvideo={setNextvideo}
                      setImage={setImage}
                      setImageUrl={setImageUrl}
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
                navigate("/home/Mycourse/Ongoing");
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
