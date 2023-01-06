import React, { useEffect, useState } from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import ReactPlayer from "react-player";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import "./OverView.css";
import time from "../../Assets/timer.png";
import file from "../../Assets/file.png";
import files from "../../Assets/files.png";
import lock from "../../Assets/lock.png";
import globe from "../../Assets/globe.png";
import tick from "../../Assets/ticked.png";
import point from "../../Assets/point.png";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import axios from "axios";
import { fontSize } from "@mui/system";
const OverView = () => {
 const [footer,setFooter]= useState(false);
    const candidateInvite = async () => {
        try {
          const response = await axios.get(
            `https://app-virtuallearning-221207091853.azurewebsites.net/user/view/courseOverview`,
          {  params: {
                courseId: 5
              }}
          );
          console.log(response);
        } catch (error) {
          console.log(error);
        }
      };
      useEffect(() => {
        candidateInvite()
      }, []);

  return (
    <div className="Homepagemain-div">
      {/* <Breadcrumbs
        style={{ marginTop: "30px" }}
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
      >
        {breadcrumbs}
      </Breadcrumbs> */}
      <div className="breadcrumbs">
        <p style={{ color: "#2BB5F4" }}>My Course &nbsp;</p>
        {/* <i class="fa fa-angle-right" style="font-size:24px"></i> */}
        <ArrowForwardIosIcon
          style={{ marginTop: "20px", color: "#2BB5F4" }}
          fontSize="10px"
        />
        <p style={{ color: "#7A7A7A" }}> &nbsp;Ongoing</p>
      </div>
      <div className="body-mainPage">
        <div className="L-sidePage">
          <div className="video-div">
            <ReactPlayer
              controls
              url="https://res.cloudinary.com/dmobwjtw7/video/upload/v1672045217/VirtualLearning/videos/qe1b4vcmjusjqlkeimrr.mp4"
              width="100%"
              height="531px"
              onPlay={setFooter}
            />
            <div className="video-heading">
              {" "}
              <p className="video-heading-style">Preview the Course</p>{" "}
            </div>
            <div className="video-footer">
              <p className="intro-footer-video">Introduction</p>
              <p
                style={{ fontSize: "15px", fontWeight: "10" }}
                className="intro-footer-video"
              >
                3 Min
              </p>
            </div>
          </div>
          <div className="video-info-foot">
            <div className="video-head-design">
              <span className="video-info-foot-style">
                Learn Figma - UI/UX Design Essential Training
              </span>
              <button className="design-btn">Design</button>
            </div>
            <span
              style={{
                fontSize: "16px",
                fontWeight: 500,
                display: "flex",
                marginTop: "-20px",
              }}
              className="video-info-foot-style"
            >
              7 Chapter | 46 lessons
            </span>
          </div>
          <div className="border"></div>

          <span className="blue-Data">
            Learn how to design a beautiful and engaging mobile app with Figma.
            Learn-by-doing approach. Learn how to design a beautiful and
            engaging mobile app with Figma. Learn-by-doing approach.
          </span>
          <span className="black-data">
            Figma is a very powerful application that runs online. There are
            virtually no platform boundaries when it comes to using figma
            because you can design within a web browser or using their desktop
            application made for windows and macs. Figma is similar to Sketch
            and Adobe XD but is the more powerful
          </span>
        </div>
        <div className="R-sidePage">
          <div className="nav-bar">gfx</div>
          <span className="couses-Include">Courses Include</span>
          <div className="courses-folder">
            <div className="img-name">
              <img src={time} alt="" />
              <span
                style={{ marginLeft: "10px", marginTop: "4px" }}
                className="font-courses"
              >
                3.5 total hours video
              </span>
            </div>
            <div className="img-name">
              <img src={file} alt="" />
              <span
                style={{ marginLeft: "10px", marginTop: "4px" }}
                className="font-courses"
              >
                Support Files
              </span>
            </div>
            <div className="img-name">
              <img src={files} alt="" />
              <span
                style={{ marginLeft: "10px", marginTop: "4px" }}
                className="font-courses"
              >
                6 Module Test
              </span>
            </div>
            <div className="img-name">
              <img src={lock} alt="" />
              <span
                style={{ marginLeft: "10px", marginTop: "4px" }}
                className="font-courses"
              >
                Full lifetime access
              </span>
            </div>
            <div className="img-name">
              <img src={globe} alt="" />
              <span
                style={{ marginLeft: "10px", marginTop: "4px" }}
                className="font-courses"
              >
                Access on mobile, desktop and tv
              </span>
            </div>
            <div className="img-name">
              <img src={file} alt="" />
              <span
                style={{ marginLeft: "10px", marginTop: "4px" }}
                className="font-courses"
              >
                Certificate of Completion
              </span>
            </div>
          </div>
          <div style={{ marginTop: "62px" }}>
            <span className="couses-Include">What you’ll learn</span>
          </div>
          <div className="img-name">
            <img
              style={{ width: "18px", height: "17.25px", marginTop: "4px" }}
              src={tick}
              alt=""
            />
            <span
              style={{ marginLeft: "10px", color: "#111111" }}
              className="font-courses"
            >
              Design Websites
            </span>
          </div>
          <div className="img-name">
            <img
              style={{ width: "18px", height: "17.25px", marginTop: "4px" }}
              src={tick}
              alt=""
            />
            <span
              style={{ marginLeft: "10px", color: "#111111" }}
              className="font-courses"
            >
              You will have a fully interactive design and prototype at the end
              of this course
            </span>
          </div>
          <div className="img-name">
            <img
              style={{ width: "18px", height: "17.25px", marginTop: "4px" }}
              src={tick}
              alt=""
            />
            <span
              style={{ marginLeft: "10px", color: "#111111" }}
              className="font-courses"
            >
              Design mobile and desktop apps
            </span>
          </div>
          <div className="img-name">
            <img
              style={{ width: "18px", height: "17.25px", marginTop: "4px" }}
              src={tick}
              alt=""
            />
            <span
              style={{ marginLeft: "10px", color: "#111111" }}
              className="font-courses"
            >
              You will learn how to reuse design elements for future projects
            </span>
          </div>
          <div style={{ marginTop: "38px" }}>
            <span className="couses-Include">Requirements</span>
          </div>
          <div className="img-name">
            <img
              style={{ width: "4px", height: "4px", marginTop: "10px" }}
              src={point}
              alt=""
            />
            <span
              style={{ marginLeft: "10px", color: "#111111" }}
              className="font-courses"
            >
              Internet Access
            </span>
          </div>
          <div className="img-name">
            <img
              style={{ width: "4px", height: "4px", marginTop: "10px" }}
              src={point}
              alt=""
            />
            <span
              style={{ marginLeft: "10px", color: "#111111" }}
              className="font-courses"
            >
              You should know your way around comouter basics
            </span>
          </div>
          <div style={{ marginTop: "38px" }}>
            <span className="couses-Include">Instructor</span>
          </div>
          <div className="img-name">
            <img
              style={{ width: "90px", height: "90px", borderRadius: "5px" }}
              src={point}
              alt=""
            />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span
                style={{
                  marginLeft: "10px",
                  color: "#111111",
                  fontSize: "20px",
                  fontWeight: 500,
                  marginTop: "20px",
                }}
                className="font-courses"
              >
                Dean Mathew
              </span>
              <span
                style={{
                  marginLeft: "10px",
                  color: "#111111",
                  fontSize: "14px",
                }}
                className="font-courses"
              >
                User Interface teacher www.appledesigntips.com
              </span>
            </div>
          </div>
          <div style={{ marginTop: "38px", marginLeft: "30px" }}>
            <span className="font-courses">
              Back in 2010, I started brainspin with a desire to design
              compelling and engaging apps. For over 7 years, I have designed
              many high profile web and iPhone applications. The applications
              range from 3D medical aided web applications to project management
              applications for niche industries. I am also the founder of a
              large local design organization, Salt Lake Designers, where I and
              other local influencers help cultivate the talents of up and
              coming UX designers through workshops and panel discussions...
              SHOW MORE
            </span>
          </div>
          <button className="join-btn">Join Course</button>
        </div>
      </div>
    </div>
  );
};

export default OverView;
