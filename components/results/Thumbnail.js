import { ThumbUpIcon } from "@heroicons/react/outline";
import Image from "next/image";
import React, { forwardRef } from "react";
const Thumbnail = forwardRef(({ movie }, ref) => {
  const BASE_URL = `https://image.tmdb.org/t/p/original`;
  return (
    <div
      ref={ref}
      className="group cursor-pointer p-2 transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50"
    >
      <Image
        layout="responsive"
        height={1080}
        width={1920}
        src={`${BASE_URL}${movie.backdrop_path || movie.poster_path}`}
        alt={movie.title || movie.original_name}
      />
      <div className="p-2">
        <p className="truncate max-w-md " title={movie.overview}>
          {movie.overview}
        </p>
        <h2 className="mt-1 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold">
          {movie.title || movie.original_name}
        </h2>
        <p className="flex items-center opacity-0 group-hover:opacity-100">
          {movie.media_type && `${movie.media_type} .`}
          {movie.release_date || movie.first_air_date} .
          <ThumbUpIcon className="h-5 mx-2" /> {movie.vote_count}
        </p>
      </div>
    </div>
  );
});
Thumbnail.displayName = "Thumbnail";
export default Thumbnail;
