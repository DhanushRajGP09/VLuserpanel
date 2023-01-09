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
import play from "../../Assets/play.png";
import clock from "../../Assets/Clock.png";

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
    navigate("/home/Courseview");
  };

  return (
    <div className="MyCourseMain-div" style={{ marginTop: "5%" }}>
      {categorycourse.length > 0 ? (
        <>
          <span className="Mycourse-text">
            Top Courses in {categorycourse[0]?.category_name}
          </span>
          {categorycourse.length > 0 ? (
            <div className="OngoingCoursemain-div">
              {categorycourse.map((data, index) => {
                return (
                  <div className="ChoiceContainer" style={{ marginTop: "2%" }}>
                    <div className="ChoiceContainerImg">
                      <img src={data?.course_image}></img>
                      <img
                        src={play}
                        className="Play"
                        onClick={() => {
                          handleContinue(data?.course_id, data?.course_name);
                        }}
                      ></img>
                    </div>
                    <div className="ChoiceContainerText-div">
                      <span className="ChoiceContainerText">
                        {data?.course_name}
                      </span>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          width: "60%",
                        }}
                      >
                        <span className="ChoiceChapter">
                          {data?.chapter_count} Chapters
                        </span>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            width: "89.09px",
                            height: "26px",
                          }}
                        >
                          <img src={clock}></img>
                          <span
                            style={{
                              width: "69px",
                              height: "26px",
                              fontFamily: "Proxima Nova Soft",
                              fontStyle: "normal",
                              fontWeight: "400",
                              fontSize: "16px",
                              marginLeft: "5%",
                              lineHeight: "26px",
                              color: "#7A7A7A",
                            }}
                          >
                            {(data?.totalVideoLength / 3600 + " ").substr(0, 5)}
                          </span>
                        </div>
                      </div>
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
