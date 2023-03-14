import React from "react";
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
            <li>Africa</li>
            <li>America</li>
            <li>Eiropa</li>
            <li>Asia</li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
