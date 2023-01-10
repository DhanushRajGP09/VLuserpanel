import React from "react";

import plus from "../../Assets/Arrow@2x.png";
import minus from "../../Assets/minus.png";
import redplay from "../../Assets/Red Play.png";
import greentick from "../../Assets/Green Tick@2x.png";
import greyplay from "../../Assets/grey play@2x.png";
import greendot from "../../Assets/Group Dot@2x.png";
import greydot from "../../Assets/Grey Dot@2x.png";
import { addTheLessonID } from "../../features/Courseslice";
import { useDispatch } from "react-redux";
import test from "../../Assets/moduletest.png";
import { useNavigate } from "react-router";

export default function Chapters(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAssignmentClick = (id, name, duration) => {
    localStorage.setItem("assignmentID", JSON.stringify(id));
    localStorage.setItem("assignmentName", JSON.stringify(name));
    localStorage.setItem("assignmentDuration", JSON.stringify(duration));
    navigate("/home/Quiz");
  };

  return (
    <>
      <div className="CourseSidebar-header">
        <span className="CourseContentText">Course Content</span>
        <span className="CourseContentDetails">
          {props.coursedata?.courseContentResponse?.chapterCount} Chapter |{" "}
          {props.coursedata?.courseContentResponse?.lessonCount}
          lessons | {props.coursedata?.courseContentResponse?.moduleTest}{" "}
          Assignment Test | {props.videolength} h total length
        </span>
      </div>
      {props.coursedata.lessonResponseList.map((data, index) => {
        return (
          <div className="ChapterContainer-div" id="ChapterContainer-div">
            <div
              style={{
                display: "flex",
                width: "100%",

                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <span
                className="ChapterName"
                style={{
                  color: data?.chapterCompleted ? "#1eab0d" : "#042C5C",
                }}
              >
                {data?.chapterName}
              </span>
              {props.coursedata?.joinedCourse ? (
                <img
                  id={`img${index}`}
                  src={plus}
                  style={{ marginRight: "2%", cursor: "pointer" }}
                  onClick={() => {
                    if (
                      document.getElementById(`ChaptersContainer${index}`).style
                        .display === "flex"
                    ) {
                      document.getElementById(
                        `ChaptersContainer${index}`
                      ).style.display = "none";
                      document.getElementById(`img${index}`).src = plus;
                      document.getElementById(
                        "ChapterContainer-div"
                      ).style.height = "30px";
                    } else {
                      document.getElementById(
                        `ChaptersContainer${index}`
                      ).style.display = "flex";
                      document.getElementById(
                        "ChapterContainer-div"
                      ).style.height = "auto";
                      document.getElementById(`img${index}`).src = minus;
                    }
                  }}
                ></img>
              ) : (
                ""
              )}
            </div>
            <div className="ChaptersContainer" id={`ChaptersContainer${index}`}>
              <div className="lessons-div">
                {props.coursedata?.lessonResponseList[index]?.lessonList?.map(
                  (data, index2) => {
                    return (
                      <div className="ChaptersContainerMain-div">
                        <div className="ProgressContainer-div">
                          <img
                            src={
                              props.coursedata?.lessonResponseList[index]
                                ?.lessonList[index2]?.lessonCompleted
                                ? greentick
                                : props.coursedata?.lessonResponseList[index]
                                    ?.lessonList[index2]?.durationCompleted > 0
                                ? greendot
                                : greydot
                            }
                            style={{
                              width: "24px",
                              height: "24px",
                            }}
                          ></img>
                        </div>
                        <div className="lessonContainer">
                          <span className="lessonNum">
                            {
                              props.coursedata?.lessonResponseList[index]
                                ?.lessonList[index2]?.lessonNumber
                            }
                          </span>
                          <div className="lessonDetails">
                            <span
                              className="lessonName"
                              style={{
                                color: props.coursedata?.lessonResponseList[
                                  index
                                ]?.lessonList[index2]?.lessonCompleted
                                  ? "#042C5C"
                                  : "#373737",
                              }}
                            >
                              {
                                props.coursedata?.lessonResponseList[index]
                                  ?.lessonList[index2]?.lessonName
                              }
                            </span>
                            <span className="lessonDuration">
                              {(
                                props.coursedata?.lessonResponseList[index]
                                  ?.lessonList[index2]?.duration /
                                  60 +
                                " "
                              ).substr(0, 4)}
                              mins
                            </span>
                          </div>
                          <img
                            src={
                              props.coursedata?.lessonResponseList[index]
                                ?.lessonList[index2]?.durationCompleted > 0
                                ? redplay
                                : greyplay
                            }
                            style={{
                              marginRight: "2%",
                              cursor: "pointer",
                            }}
                            onClick={() => {
                              props.setvideo(true);
                              props.setImage(true);
                              props.setImageUrl(
                                props.coursedata?.lessonResponseList[
                                  index
                                ]?.lessonList[index2]?.videoLink.replace(
                                  ".mp4",
                                  ".jpg"
                                )
                              );
                              dispatch(
                                addTheLessonID(
                                  props.coursedata?.lessonResponseList[index]
                                    ?.lessonList[index2]?.lessonId
                                )
                              );
                              props.setVideoUrl(
                                props.coursedata?.lessonResponseList[index]
                                  ?.lessonList[index2]?.videoLink
                              );
                              props.setTheLessonId(
                                props.coursedata?.lessonResponseList[index]
                                  ?.lessonList[index2]?.lessonId
                              );
                              if (
                                props.coursedata?.lessonResponseList[index]
                                  ?.lessonList[index2]?.videoLink ===
                                props.coursedata?.lessonResponseList[index]
                                  ?.lessonList[
                                  props.coursedata?.lessonResponseList[index]
                                    ?.lessonList?.length - 1
                                ]?.videoLink
                              ) {
                                props.setNextvideo(
                                  props.coursedata?.lessonResponseList[
                                    index + 1
                                  ]?.lessonList[0]?.videoLink
                                );
                              } else {
                                props.setNextvideo(
                                  props.coursedata?.lessonResponseList[index]
                                    ?.lessonList[index2 + 1]?.videoLink
                                );
                              }
                            }}
                          ></img>
                        </div>
                      </div>
                    );
                  }
                )}
                {}
              </div>

              {props.coursedata?.lessonResponseList[index]
                ?.assignmentResponse !== null ? (
                <div
                  className="TestMain-div"
                  onClick={() => {
                    handleAssignmentClick(
                      props.coursedata?.lessonResponseList[index]
                        ?.assignmentResponse.assignmentId,
                      props.coursedata?.lessonResponseList[index]
                        ?.assignmentResponse.assignmentName,
                      props.coursedata?.lessonResponseList[index]
                        ?.assignmentResponse.testDuration
                    );
                  }}
                >
                  <div className="ProgressContainer-div">
                    <img
                      src={
                        props.coursedata?.lessonResponseList[index]
                          ?.assignmentResponse.grade > 0
                          ? greentick
                          : greydot
                      }
                      style={{
                        width: "24px",
                        height: "24px",
                      }}
                    ></img>
                  </div>
                  <div className="TestContainerMain-div">
                    <img src={test} style={{ marginLeft: "2%" }}></img>
                    <div className="TestInsideContainer">
                      <span className="TestContainerText">
                        {
                          props.coursedata?.lessonResponseList[index]
                            ?.assignmentResponse?.assignmentName
                        }
                      </span>
                      <span className="TestContainerDetailsText">
                        {(
                          props.coursedata?.lessonResponseList[index]
                            ?.assignmentResponse?.testDuration /
                            3600 +
                          " "
                        ).substr(0, 3)}{" "}
                        Mins |{" "}
                        {
                          props.coursedata?.lessonResponseList[index]
                            ?.assignmentResponse?.questionCount
                        }{" "}
                        Questions
                      </span>
                    </div>
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        );
      })}
    </>
  );
}
