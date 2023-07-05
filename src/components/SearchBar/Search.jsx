import React from "react";
import { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./Search.css";
import { films } from "../../data";

export default function Search({ value, onChange }) {
  return (
    <div className="box">
      <input
        value={value}
        onChange={onChange}
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
