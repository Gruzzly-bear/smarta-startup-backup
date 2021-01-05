import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import MenuNavBar from "./Pages/components/NavBar/NavBar";
import MenuSideBar from "./Pages/components/NavBar/SideBar";
import '../src/Styling/index.css';

function App() {
  return (
    <div>
    <Router>
      <div>
        <MenuNavBar />
        <MenuSideBar />
      </div>
    </Router>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);





