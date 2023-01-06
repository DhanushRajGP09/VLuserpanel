import React from "react";
import time from "../../Assets/timer.png";
import file from "../../Assets/file.png";
import files from "../../Assets/files.png";
import lock from "../../Assets/lock.png";
import globe from "../../Assets/globe.png";
import tick from "../../Assets/ticked.png";
import point from "../../Assets/point.png";
import "./Overview.css";

export default function Overview() {
  return (
    <>
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
          You will have a fully interactive design and prototype at the end of
          this course
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
          Back in 2010, I started brainspin with a desire to design compelling
          and engaging apps. For over 7 years, I have designed many high profile
          web and iPhone applications. The applications range from 3D medical
          aided web applications to project management applications for niche
          industries. I am also the founder of a large local design
          organization, Salt Lake Designers, where I and other local influencers
          help cultivate the talents of up and coming UX designers through
          workshops and panel discussions... SHOW MORE
        </span>
      </div>
      <button className="join-btn">Join Course</button>
    </>
  );
}
