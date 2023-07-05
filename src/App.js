import React from "react";
import Header from "./components/Header/Header";
import Search from "./components/SearchBar/Search";
import Card from "./components/MovieCard/Card";
import Footer from "./components/Footer/Footer";

export default function App() {
  return (
    <div>
      <Header />
      <Card />
      <Footer />
    </div>
  );
}
