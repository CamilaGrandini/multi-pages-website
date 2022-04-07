import React from "react";
import Movie from "../components/Movie";
import MovieData from "./MovieData";
import { useState } from "react";
import LeftButton from "../img/left-button.png";
import RightButton from "../img/right-button.png";

export default function Info() {
  const [count, setCount] = useState(0);
  const movie = MovieData.data.movies;

  let i = movie[count].img;
  let n = movie[count].title;

  function add() {
    if (count === 15) {
      setCount((prevCount) => prevCount - 16);
    }
    setCount((prevCount) => prevCount + 1);
  }
  function subtract() {
    if (count === 0) {
      setCount((prevCount) => prevCount + 16);
    }
    setCount((prevCount) => prevCount - 1);
  }
  return (
    <article>
      <h1>CamiFlix</h1>

      <p>
        Watch your favorite movie here!<br></br>Check some of our movies below.
      </p>
      <section>
        <button className="plus" onClick={subtract}>
          <img src={LeftButton} />
        </button>
        <Movie title={n} img={i} />
        <button className="plus" onClick={add}>
          <img src={RightButton} />
        </button>
      </section>
    </article>
  );
}
