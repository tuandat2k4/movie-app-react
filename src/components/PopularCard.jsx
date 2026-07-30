import { useState } from "react";

const PopularCard = ({ movie, setSelectedMovie }) => {
  const [posterError, setPosterError] = useState(false);
  return (
    <div
      className="flex h-full flex-col rounded-2xl bg-[#1A1A2E] p-4 cursor-pointer"
      onClick={() => setSelectedMovie(movie)}
    >
      {movie.poster && !posterError ? (
        <img
          src={movie.poster}
          alt={movie.title}
          onError={() => setPosterError(true)}
          className="h-[300px] w-full rounded-xl object-cover"
        />
      ) : (
        <div className="flex h-[300px] w-full items-center justify-center rounded-xl bg-gray-700 text-center text-white">
          Poster
          <br />
          Not Available
        </div>
      )}

      <h3 className="mt-4 text-lg font-semibold text-white">{movie.title}</h3>

      <div className="mt-auto flex items-center gap-2 pt-4 text-sm text-gray-400">
        <img src="/star.svg" alt="star" className="size-4" />

        <span className="text-white">{movie.rating}</span>

        <span>•</span>

        <span>{movie.category}</span>

        <span>•</span>

        <span>{movie.type}</span>
      </div>
    </div>
  );
};

export default PopularCard;
