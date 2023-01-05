import logo from "./logo.svg";
import "./App.css";

import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router";

import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/*" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
