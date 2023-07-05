import React from "react";
import { useState } from "react";
import "./Card.css";
import { films } from "../../data";
import Search from "../SearchBar/Search";

const FilmCard = ({ title, description, year, image }) => {
  return (
    <div className="film-card">
      <img src={image} alt="!!" className="film-card-image" />
      <div className="film-card-content">
        <h2 className="Card-title1">{title}</h2>
        <p className="description">{description}</p>
        <p className="year">{year}</p>
      </div>
    </div>
  );
};

const MainContainer = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredFilms = films.filter((film) =>
    film.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <Search
        value={searchTerm}
        onChange={handleSearchChange}
        className="search-bar"
      />
      <div className="main-container">
        {filteredFilms.map((film, index) => (
          <FilmCard
            key={index}
            title={film.title}
            description={film.description}
            year={film.year}
            image={film.image}
          />
        ))}
      </div>
    </div>
  );
};

export default MainContainer;
