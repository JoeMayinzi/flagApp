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
            <Link className="Link"> Home</Link>
            <li>Africa</li>
            <li>America</li>
            <li>Europa</li>
            <li>Asia</li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
