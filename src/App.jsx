import logo from "./logo.svg";
import "./App.css";

import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router";

import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import PrivateComponent from "./Components/PrivateComponent";
import Modal from "./Components/Modal/Modal";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path="/home/*" element={<Home />}></Route>

          <Route path="/" element={<Login />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
