import React, { useState } from "react";
import time from "../../Assets/timer.png";
import file from "../../Assets/file.png";
import files from "../../Assets/files.png";
import lock from "../../Assets/lock.png";
import globe from "../../Assets/globe.png";
import tick from "../../Assets/ticked.png";
import point from "../../Assets/point.png";
import "./Overview.css";
import { useSelector } from "react-redux/es";
import { getCourseOverview } from "../../features/Courseslice";

export default function Overview(props) {
  const Overview = useSelector(getCourseOverview);
  console.log("overview", Overview);

  const [overviewdata, setOverview] = useState(Overview);
  console.log("overview", overviewdata);
  const [about, setabout] = useState(false);
  const Totalvideo = Overview?.courseIncludes?.totalHourVideo / 3600 + " ";

  const videolength = Totalvideo.substr(0, 4);

  return (
    <>
      <div className="CoursesInclude-div">
        <span className="couses-Include">Courses Includes</span>
        <div className="courses-folder">
          <div className="img-name">
            <img src={time} alt="" />
            <span className="font-courses" style={{ marginLeft: "3%" }}>
              {videolength} total hours video
            </span>
          </div>
          {Overview?.courseIncludes?.supportFiles ? (
            <div className="img-name">
              <img src={file} alt="" />
              <span className="font-courses" style={{ marginLeft: "3%" }}>
                Support Files
              </span>
            </div>
          ) : (
            ""
          )}

          <div className="img-name">
            <img src={files} alt="" />
            <span className="font-courses" style={{ marginLeft: "3%" }}>
              {Overview?.courseIncludes?.moduleTest} Module Test
            </span>
          </div>
          {Overview?.courseIncludes?.fullLifetimeAccess ? (
            <div className="img-name">
              <img src={lock} alt="" />
              <span className="font-courses" style={{ marginLeft: "3%" }}>
                Full lifetime access
              </span>
            </div>
          ) : (
            ""
          )}

          <div className="img-name">
            <img src={globe} alt="" />
            <span className="font-courses" style={{ marginLeft: "3%" }}>
              Access on {Overview?.courseIncludes?.accessOn}
            </span>
          </div>
          {Overview?.courseIncludes?.certificateOfCompletion ? (
            <div className="img-name">
              <img src={file} alt="" />
              <span className="font-courses" style={{ marginLeft: "3%" }}>
                Certificate of Completion
              </span>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>

      <div className="Whatyoulearn-div">
        <div>
          <span className="couses-Include">What you’ll learn</span>
        </div>
        {Overview?.overview?.courseOutcome.map((data) => {
          return (
            <>
              {" "}
              <div className="img-name">
                <img
                  style={{
                    width: "18px",
                    height: "17.25px",
                    marginTop: "4px",
                  }}
                  src={tick}
                  alt=""
                />
                <span
                  style={{ marginLeft: "10px", color: "#111111" }}
                  className="font-courses"
                >
                  {data}
                </span>
              </div>
            </>
          );
        })}
      </div>
      <div className="Requirements-div">
        <div>
          <span className="couses-Include">Requirements</span>
        </div>
        {Overview?.overview?.requirements.map((data) => {
          return (
            <>
              <div className="img-name">
                <img
                  style={{ width: "4px", height: "4px" }}
                  src={point}
                  alt=""
                />
                <span
                  style={{ marginLeft: "10px", color: "#111111" }}
                  className="font-courses"
                >
                  {data}
                </span>
              </div>
            </>
          );
        })}
      </div>

      <div style={{ marginTop: "38px" }}>
        <span className="couses-Include">Instructor</span>
      </div>
      <div className="InstructorDetails-div">
        <img
          style={{ width: "90px", height: "90px", borderRadius: "5px" }}
          src={Overview?.instructor?.profile_pic}
          alt=""
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
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
            {Overview?.instructor?.instructorName}
          </span>
          <span
            style={{
              marginLeft: "10px",
              color: "#111111",
              fontSize: "14px",
            }}
            className="font-courses"
          >
            {Overview?.instructor?.occupation}
          </span>
        </div>
      </div>
      <div style={{ marginTop: "38px", marginLeft: "30px" }}>
        <span className="font-courses">
          {about
            ? Overview?.instructor?.about
            : Overview?.instructor?.about.length > 200
            ? Overview?.instructor?.about.substr(0, 199) + "..."
            : Overview?.instructor?.about}

          {Overview?.instructor?.about.length > 200 ? (
            <button
              className="showmore"
              onClick={() => {
                setabout(true);
              }}
              style={{ display: about ? "none" : "block" }}
            >
              SHOW MORE
            </button>
          ) : (
            ""
          )}
        </span>
      </div>
      {Overview?.joined_course ? (
        " "
      ) : (
        <button className="join-btn">Join Course</button>
      )}
    </>
  );
}
