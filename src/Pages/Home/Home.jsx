import React from "react";
import Homepage from "../../Components/Homepage/Homepage";
import "./Home.css";
import { Route, Routes } from "react-router";
import Tabbar from "../../Components/Tabbar/Tabbar";

export default function Home() {
  return (
    <div className="Home">
      <Tabbar />
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
      </Routes>
    </div>
  );
}
