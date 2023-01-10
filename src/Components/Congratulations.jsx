import React from "react";
import img from "../Assets/img_moduletest_success_illustration 1.png";
import { useNavigate } from "react-router";

export default function Congratulations() {
  const navigate = useNavigate();
  return (
    <div className="CongratulationsMain-div">
      <div className="CongratulationsMain">
        <img src={img} style={{ width: "587px", height: "428px" }}></img>
        <span className="CongratsText">Congratulations!</span>
        <span className="CongratsdescText">
          You have completed Chapter 3 - Setting up a new project from Course:
          Learn Figma - UI/UX Design Essential Training
        </span>
        <div
          className="ApplyFilterButton"
          style={{ cursor: "pointer" }}
          onClick={() => {
            navigate("/home");
          }}
        >
          Home
        </div>
      </div>
    </div>
  );
}
