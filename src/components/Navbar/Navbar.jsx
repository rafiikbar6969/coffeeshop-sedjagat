import React from "react";
import { MenuItems } from "./MenuItems";
import { Link } from "react-router-dom";
import "./Navbar.css";
import "./@media.css";
import { useState } from "react";

export const Navbar = () => {
  const [clicked, setClicked] = useState(false);

  return (
    <nav className="NavbarItems">
      <h1 className="navbar-log">SEDJAGAT</h1>

      <div className="menu-icons" onClick={() => setClicked(!clicked)}>
        <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
      </div>

      <ul className={clicked ? "nav-menu active" : "nav-menu"}>
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              {/* ini link bukan tag html tapi dari router react js liat importnya */}
              <Link className={item.cName} to={item.url}>
                <i className={item.icon}> {item.title}</i>
              </Link>
            </li>
          );
        })}

        <button>Our Menu</button>
      </ul>
    </nav>
  );
};
