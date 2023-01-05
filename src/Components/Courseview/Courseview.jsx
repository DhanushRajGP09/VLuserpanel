import React from "react";
import "./Courseview.css";
import right from "../../Assets/chevron_right_black_24dp (1) 1.png";

export default function Courseview() {
  return (
    <div className="CourseviewMain-div">
      <div className="CourseviewTab">
        <span className="MyCourse-text">My Course</span>
        <img src={right}></img>
        <span className="MyCourse-text">Ongoing</span>
        <img src={right}></img>
        <span className="currentpageCourse-text">Course title</span>
      </div>
      <div className="CourseViewInner-div">
        <div className="VideoDisplay-div">
          <div className="VideoDisplay">
            <div className="VideoDisplay-gradient"></div>
          </div>
          <div className="VideoDescription-div">
            <div className="VideoDescriptionInner-div">
              <span className="VideoDescription-Title">
                Learn Figma - UI/UX Design Essential Training
              </span>
              <span className="VideoDescription-lessons">
                7 Chapter | 46 lessons
              </span>
            </div>
            <div className="VideoDescription-category">Design</div>
          </div>
        </div>
        <div className="VideoDisplaySidebar"></div>
      </div>
    </div>
  );
}
