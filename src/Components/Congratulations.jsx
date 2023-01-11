import React from "react";
import img from "../Assets/img_moduletest_success_illustration 1.png";
import { useNavigate } from "react-router";

export default function Congratulations() {
  const navigate = useNavigate();

  const localname = JSON.parse(localStorage.getItem("assignmentName"));
  const localCoursename = JSON.parse(localStorage.getItem("coursename"));

  return (
    <div className="CongratulationsMain-div">
      <div className="CongratulationsMain">
        <img src={img} style={{ width: "587px", height: "428px" }}></img>
        <span className="CongratsText">Congratulations!</span>
        <span className="CongratsdescText">
          You have completed {localname} from Course: {localCoursename}
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
