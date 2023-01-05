import React from "react";
import Homepage from "../../Components/Homepage/Homepage";
import "./Home.css";
import { Route, Routes } from "react-router";
import Tabbar from "../../Components/Tabbar/Tabbar";
import Ongoing from "../../Components/Ongoing/Ongoing";
import Mycourse from "../../Components/Mycourse/Mycourse";
import Courseview from "../../Components/Courseview/Courseview";

export default function Home() {
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
