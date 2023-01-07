import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux/es";
import {
  addCategoryCourse,
  addcourseId,
  addcourseName,
  getCategoryCourse,
  getTheChoice,
} from "../../features/Courseslice";
import { useEffect } from "react";
import continuebutton from "../../Assets/continuebutton.png";
import axios from "axios";
import { useNavigate } from "react-router";

export default function TheAllCourses() {
  const thechoice = useSelector(getTheChoice);
  console.log("allchoice", thechoice);

  const dispatch = useDispatch();

  const getAll = async () => {
    console.log("entered");
    axios({
      method: "get",
      url: `https://app-virtuallearning-230106135903.azurewebsites.net/user/view/${thechoice}?limit=100&page=1`,
    }).then(function (response) {
      console.log("recentcourses", response.data);
      dispatch(addCategoryCourse(response.data));
    });
  };

  const [name, setName] = useState("All Courses");

  function handleName() {
    if (thechoice === "courses") {
      setName("All Courses");
    } else if (thechoice === "popularCourse") {
      setName("Popular Courses");
    } else {
      setName("Newest");
    }
  }
  useEffect(() => {
    getAll();
    handleName();
  }, []);

  const categorycourse = useSelector(getCategoryCourse);
  console.log("catcourse", categorycourse);

  const navigate = useNavigate();

  const handleContinue = (id, name) => {
    dispatch(addcourseId(id));
    dispatch(addcourseName(name));
    localStorage.setItem("courseid", JSON.stringify(id));
    localStorage.setItem("coursename", JSON.stringify(name));
    navigate("/Courseview");
  };

  return (
    <div className="MyCourseMain-div">
      {categorycourse.length > 0 ? (
        <>
          <span className="Mycourse-text">{name}</span>
          {categorycourse.length > 0 ? (
            <div className="OngoingCoursemain-div">
              {categorycourse.map((data, index) => {
                return (
                  <div
                    className="ChoiceContainer"
                    style={{
                      marginTop: "3%",
                    }}
                  >
                    <div className="ChoiceContainerImg">
                      <img
                        src={data?.course_image}
                        style={{
                          borderRadius: "6px",
                          width: "342px",
                          height: "193px",
                        }}
                      ></img>
                      <div className="ChoiceCategory">
                        {data?.category_name}
                      </div>
                    </div>
                    <div className="ChoiceContainerText-div">
                      <span
                        className="ChoiceContainerText"
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          handleContinue(data?.course_id, data?.course_name);
                        }}
                      >
                        {data?.course_name}
                      </span>
                      <span className="ChoiceChapter">
                        {data?.chapter_count} Chapters
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <h1 style={{ marginLeft: "50%" }}>Loading........</h1>
          )}
        </>
      ) : (
        <h1 style={{ marginLeft: "50%" }}>Loading........</h1>
      )}
    </div>
  );
}
