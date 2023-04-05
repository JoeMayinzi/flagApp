import React from "react";
import { NavLink } from "react-router-dom";

function Navbar(props) {
  console.log("Navbar only re-render initially");
  return (
    <header>
      <nav className="navbar">
        <div className="nav-range"></div>
        <div>
          <ul>
            <NavLink
              to={"/"}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Home
            </NavLink>
            <NavLink
              to={"/africa"}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Africa
            </NavLink>
            <NavLink
              to={"/Americas"}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              America
            </NavLink>
            <NavLink
              to={"/asia"}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Asia
            </NavLink>
            <NavLink
              to={"/europe"}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Europe
            </NavLink>
            <NavLink
              to={"/oceania"}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Oceania
            </NavLink>
            <NavLink
              to={"/FlagGame"}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Flag Game
            </NavLink>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
