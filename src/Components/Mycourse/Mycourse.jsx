import React, { useEffect, useState } from "react";
import "./Mycourse.css";
import Ongoing from "../Ongoing/Ongoing";
import { Route, Routes } from "react-router";

export default function Mycourse() {
  const [active, setactive] = useState(true);
  const [completed, setcompleted] = useState(false);

  function handleComplete() {
    setcompleted(!completed);
    setactive(false);
  }
  function handleOngoing() {
    setactive(!active);
    setcompleted(false);
  }

  useEffect(() => {
    if (window.location.pathname === "/Mycourse") {
      document.getElementById("ongoing").style.backgroundColor = "#042c5c";
    }
  }, []);

  return (
    <div className="MyCourseMain-div">
      <span className="Mycourse-text">My Course</span>
      <div className="Mycoursetab-div">
        <div
          className="Ongoing-button"
          style={{
            backgroundColor: active ? "#042c5c" : "white",
            color: active ? "white" : "#7a7a7a",
          }}
          onClick={() => {
            handleOngoing();
          }}
          id="ongoing"
        >
          Ongoing
        </div>
        <div
          className="completed-button"
          style={{
            marginLeft: "5%",
            backgroundColor: completed ? "#042c5c" : "white",
            color: completed ? "white" : "#7a7a7a",
          }}
          onClick={() => {
            handleComplete();
          }}
        >
          Completed
        </div>
      </div>
      <Routes>
        <Route path="/Ongoing/*" element={<Ongoing />}></Route>
      </Routes>
    </div>
  );
}
