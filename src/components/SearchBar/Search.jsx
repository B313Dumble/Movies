import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./Search.css";

export default function Serach() {
  return (
    <div className="box">
      <input
        type="text"
        className="search-txt"
        placeholder="Type to search ..."
      />
      <a href="#" className="search-btn">
        <i className="fas fa-search"></i>
      </a>
    </div>
  );
}
