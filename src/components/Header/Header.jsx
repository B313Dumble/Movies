import React from "react";
import "./Header.css";

export default function Navbar() {
  return (
    <div className="Navbar_div">
      <label className="logo">Movies</label>
      <ul id="Navbar_ul">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Series</a>
        </li>
        <li>
          <a href="#">TV shows</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </div>
  );
}
