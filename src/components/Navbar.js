import React from "react";
import { Link } from "react-router-dom";
import Range from "./Range";

function Navbar(props) {
  return (
    <header>
      <nav className="navbar">
        <div className="nav-range">
          <Range />
        </div>
        <div>
          <ul>
            <Link to={"/"} className="Link">
              Home
            </Link>
            <Link to={"/africa"} className="Link">
              Africa
            </Link>
            <Link to={"/america"} className="Link">
              America
            </Link>
            <Link to={"/asia"} className="Link">
              Asia
            </Link>
            <Link to={"/europe"} className="Link">
              Europe
            </Link>
            <Link to={"/oceania"} className="Link">
              Oceania
            </Link>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
