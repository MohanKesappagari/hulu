import React from "react";
import FlipMove from "react-flip-move";
import Thumbnail from "./Thumbnail";

export default function Results({ results }) {
  console.log(results);
  return (
    <FlipMove className="px-5 my-10 sm:grid md:grid-cols-2 lg:grid-cols-3 3xl:flex flex-wrap justify-center">
      {results.map((movie) => (
        <Thumbnail key={movie.id} movie={movie} />
      ))}
    </FlipMove>
  );
}
