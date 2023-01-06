import React, { useEffect } from "react";
import Homepage from "../../Components/Homepage/Homepage";
import "./Home.css";
import { Route, Routes, useNavigate } from "react-router";
import Tabbar from "../../Components/Tabbar/Tabbar";
import Ongoing from "../../Components/Ongoing/Ongoing";
import Mycourse from "../../Components/Mycourse/Mycourse";
import Courseview from "../../Components/Courseview/Courseview";
import Login from "../Login/Login";

export default function Home() {
  const navigate = useNavigate();
  useEffect(() => {
    const auth = localStorage.getItem("token");
    if (!auth) {
      navigate("/login");
    }
  }, []);

  return (
    <div className="Home">
      <Tabbar />
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/Mycourse/*" element={<Mycourse />}></Route>
        <Route path="/Courseview/*" element={<Courseview />}></Route>
      </Routes>
    </div>
  );
}
