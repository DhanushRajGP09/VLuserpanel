import React from "react";

import plus from "../../Assets/Arrow@2x.png";
import minus from "../../Assets/minus.png";
import redplay from "../../Assets/Red Play.png";

export default function Chapters(props) {
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
              <span className="ChapterName">{data?.chapterName}</span>
              <img
                id="img"
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
                    document.getElementById("img").src = plus;
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
                    document.getElementById("img").src = minus;
                  }
                }}
              ></img>
            </div>
            <div className="ChaptersContainer" id={`ChaptersContainer${index}`}>
              <div className="lessons-div">
                {props.coursedata?.lessonResponseList[
                  props.index
                ]?.lessonList?.map((data, index2) => {
                  return (
                    <div className="ChaptersContainerMain-div">
                      <div className="ProgressContainer-div"></div>
                      <div className="lessonContainer">
                        <span className="lessonNum">
                          {
                            props.coursedata?.lessonResponseList[index]
                              ?.lessonList[index2]?.lessonNumber
                          }
                        </span>
                        <div className="lessonDetails">
                          <span className="lessonName">
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
                          src={redplay}
                          style={{
                            marginRight: "2%",
                            cursor: "pointer",
                          }}
                          onClick={() => {
                            props.setvideo(true);
                            props.setVideoUrl(
                              props.coursedata?.lessonResponseList[index]
                                ?.lessonList[index2]?.videoLink
                            );
                            console.log(
                              props.coursedata?.lessonResponseList[index]
                                ?.lessonList[index2]?.videoLink
                            );
                          }}
                        ></img>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
