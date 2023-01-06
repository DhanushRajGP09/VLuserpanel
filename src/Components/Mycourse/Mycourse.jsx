import React, { useEffect, useState } from "react";
import "./Mycourse.css";
import Ongoing from "../Ongoing/Ongoing";
import { Route, Routes, useNavigate } from "react-router";
import Completed from "../Completed/Completed";

export default function Mycourse() {
  const [active, setactive] = useState(false);
  const [completed, setcompleted] = useState(false);

  const navigate = useNavigate();

  function handleComplete() {
    setcompleted(!completed);
    setactive(false);

    navigate("/Mycourse/Completed");
  }
  function handleOngoing() {
    setactive(true);
    setcompleted(false);
    navigate("/Mycourse/Ongoing");
  }

  useEffect(() => {
    if (window.location.pathname === "/Mycourse/Ongoing") {
      setactive(!active);
      setcompleted(false);
    } else if (window.location.pathname === "/Mycourse/Completed") {
      setactive(false);
      setcompleted(!completed);
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
          id="completed"
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
        <Route path="/Completed/*" element={<Completed />}></Route>
      </Routes>
    </div>
  );
}
