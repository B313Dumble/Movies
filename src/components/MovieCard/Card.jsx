import React from "react";
import "./Card.css";
import { films } from "../../data";

const FilmCard = ({ title, description, year, image }) => {
  return (
    <div className="film-card">
      <img src={image} alt="!!" className="film-card-image" />
      <div className="film-card-content">
        <h2>{title}</h2>
        <p className="description">{description}</p>
        <p className="year">{year}</p>
      </div>
    </div>
  );
};

const MainContainer = () => {
  return (
    <div className="main-container">
      {films.map((film, index) => (
        <FilmCard
          key={index}
          title={film.title}
          description={film.description}
          year={film.year}
          image={film.image}
        />
      ))}
    </div>
  );
};

export default MainContainer;
