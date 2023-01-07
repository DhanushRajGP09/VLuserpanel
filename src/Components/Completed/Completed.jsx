import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux/es";
import { useNavigate } from "react-router";
import { addcourseId, addcourseName } from "../../features/Courseslice";
import axios from "axios";
import viewcertificate from "../../Assets/ViewCertificate (2).png";

import "./Completed.css";

export default function Completed() {
  const token = JSON.parse(localStorage.getItem("token"));
  console.log("tokenfrom dash", token);

  const [completedData, setCompleteddata] = useState([]);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const getCompleted = async () => {
    console.log("entered");
    axios({
      method: "get",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      url: "https://app-virtuallearning-230106135903.azurewebsites.net/user/completed-courses",
    }).then(function (response) {
      console.log("recentcourses", response.data);
      setCompleteddata(response.data);
    });
  };
  useEffect(() => {
    getCompleted();
  }, []);

  const handleContinue = (id, name) => {
    dispatch(addcourseId(id));
    dispatch(addcourseName(name));
    localStorage.setItem("courseid", JSON.stringify(id));
    localStorage.setItem("coursename", JSON.stringify(name));
    navigate("/Courseview");
  };
  return (
    <>
      {completedData.length > 0 ? (
        <div className="OngoingCoursemain-div">
          {completedData.map((data, index) => {
            return (
              <div className="OngoingCoursecontainer">
                <img
                  src={data?.course_image}
                  style={{ width: "464px", height: " 262px" }}
                ></img>
                <div className="OngoingCourseContainer"></div>
                <span className="OngoingCourseinsidetext">Completed</span>
                <span className="OnGoingCourseContainerText">
                  {data?.course_name}
                </span>
                <span className="CompletedOngoing">
                  {data?.completed_chapter_count}/{data?.chapter_count}
                  chapters
                </span>
                <img
                  src={viewcertificate}
                  className="Certificatebutton"
                  onClick={() => {
                    handleContinue(data?.course_id, data?.course_name);
                  }}
                ></img>
              </div>
            );
          })}
        </div>
      ) : (
        <h1 style={{ marginLeft: "50%" }}>Loading........</h1>
      )}
    </>
  );
}
