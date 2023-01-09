import React, { useEffect, useState } from "react";
import "./Ongoing.css";
import continuebutton from "../../Assets/continuebutton.png";
import ongoing from "../../Assets/ongoingcontainer.png";
import { useNavigate } from "react-router";
import axios from "axios";
import { useDispatch } from "react-redux/es";
import { addcourseId, addcourseName } from "../../features/Courseslice";

export default function Ongoing() {
  const token = JSON.parse(localStorage.getItem("token"));
  console.log("tokenfrom dash", token);

  const [ongoingdata, setonGoingdata] = useState([]);
  const navigate = useNavigate();

  const dispatch = useDispatch();

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
  useEffect(() => {
    getOngoing();
  }, []);

  const handleContinue = (id, name) => {
    dispatch(addcourseId(id));
    dispatch(addcourseName(name));
    localStorage.setItem("courseid", JSON.stringify(id));
    localStorage.setItem("coursename", JSON.stringify(name));
    navigate("/home/Courseview");
  };

  return (
    <>
      {ongoingdata.length > 0 ? (
        <div className="OngoingCoursemain-div">
          {ongoingdata.map((data, index) => {
            return (
              <div className="OngoingCoursecontainer">
                <img
                  src={data?.course_image}
                  style={{ width: "464px", height: " 262px" }}
                ></img>
                <div className="OngoingCourseContainer"></div>
                <span className="OngoingCourseinsidetext">Ongoing</span>
                <span className="OnGoingCourseContainerText">
                  {data?.course_name}
                </span>
                <span className="CompletedOngoing">
                  {data?.completed_chapter_count}/{data?.chapter_count}
                  chapters
                </span>
                <img
                  src={continuebutton}
                  className="Ongoingcontinuebutton"
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
