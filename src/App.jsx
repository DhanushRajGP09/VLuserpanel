import logo from "./logo.svg";
import "./App.css";

import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router";

import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import PrivateComponent from "./Components/PrivateComponent";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route element={<PrivateComponent />}>
            <Route path="/*" element={<Home />}></Route>
          </Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
