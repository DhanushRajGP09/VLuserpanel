import React from "react";
import "./Ongoing.css";
import continuebutton from "../../Assets/continuebutton.png";
import ongoing from "../../Assets/ongoingcontainer.png";
import { useNavigate } from "react-router";

export default function Ongoing() {
  const navigate = useNavigate();
  return (
    <div className="OngoingCoursemain-div">
      <div className="OngoingCoursecontainer">
        <img src={ongoing}></img>
        <div className="OngoingCourseContainer"></div>
        <span className="OngoingCourseinsidetext">Ongoing</span>
        <span className="OnGoingCourseContainerText">
          Learn Figma - UI/UX...
        </span>
        <span className="CompletedOngoing">15/20 chapters</span>
        <img
          src={continuebutton}
          className="Ongoingcontinuebutton"
          onClick={() => {
            navigate("/Courseview");
          }}
        ></img>
      </div>
      <div className="OngoingCoursecontainer">
        <img src={ongoing}></img>
        <div className="OngoingCourseContainer"></div>
        <span className="OngoingCourseinsidetext">Ongoing</span>
        <span className="OnGoingCourseContainerText">
          Learn Figma - UI/UX...
        </span>
        <span className="CompletedOngoing">15/20 chapters</span>
        <img src={continuebutton} className="Ongoingcontinuebutton"></img>
      </div>
      <div className="OngoingCoursecontainer">
        <img src={ongoing}></img>
        <div className="OngoingCourseContainer"></div>
        <span className="OngoingCourseinsidetext">Ongoing</span>
        <span className="OnGoingCourseContainerText">
          Learn Figma - UI/UX...
        </span>
        <span className="CompletedOngoing">15/20 chapters</span>
        <img src={continuebutton} className="Ongoingcontinuebutton"></img>
      </div>
      <div className="OngoingCoursecontainer">
        <img src={ongoing}></img>
        <div className="OngoingCourseContainer"></div>
        <span className="OngoingCourseinsidetext">Ongoing</span>
        <span className="OnGoingCourseContainerText">
          Learn Figma - UI/UX...
        </span>
        <span className="CompletedOngoing">15/20 chapters</span>
        <img src={continuebutton} className="Ongoingcontinuebutton"></img>
      </div>
    </div>
  );
}
