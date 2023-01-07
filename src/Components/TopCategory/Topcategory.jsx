import React from "react";
import { useDispatch, useSelector } from "react-redux/es";
import {
  addCategoryCourse,
  addcourseId,
  addcourseName,
  getCategoryCourse,
  getCategoryID,
} from "../../features/Courseslice";
import { useEffect } from "react";
import continuebutton from "../../Assets/continuebutton.png";
import axios from "axios";
import { useNavigate } from "react-router";

export default function Topcategory() {
  const catid = useSelector(getCategoryID);
  console.log("catid", catid);

  const dispatch = useDispatch();

  const getcategory = async () => {
    console.log("entered");
    axios({
      method: "get",

      url: `https://app-virtuallearning-230106135903.azurewebsites.net/user/view/course/category${catid}?limit=5&page=1`,
    }).then(function (response) {
      console.log("recentcourses", response.data);
      dispatch(addCategoryCourse(response.data));
    });
  };
  useEffect(() => {
    getcategory();
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
          <span className="Mycourse-text">
            Top Courses in {categorycourse[0]?.category_name}
          </span>
          {categorycourse.length > 0 ? (
            <div className="OngoingCoursemain-div">
              {categorycourse.map((data, index) => {
                return (
                  <div className="OngoingCoursecontainer">
                    <img
                      src={data?.course_image}
                      style={{ width: "464px", height: " 262px" }}
                    ></img>
                    <div className="OngoingCourseContainer"></div>

                    <span className="OnGoingCourseContainerText">
                      {data?.course_name}
                    </span>
                    <span className="CompletedOngoing">
                      {data?.chapter_count}
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
      ) : (
        <h1 style={{ marginLeft: "50%" }}>Loading........</h1>
      )}
    </div>
  );
}
