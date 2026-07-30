import { useState } from "react";

const TrendingCard = ({ movie, index, setSelectedMovie }) => {
  const [posterError, setPosterError] = useState(false);

  return (
    <div
      className="relative cursor-pointer"
      onClick={() => setSelectedMovie(movie)}
    >
      <span className="trending-number absolute left-0 bottom-0">
        {index + 1}
      </span>

      {movie.poster && !posterError ? (
        <img
          src={movie.poster}
          alt={movie.title}
          onError={() => setPosterError(true)}
          className="relative z-10 ml-10 h-[220px] w-[150px] rounded-2xl object-cover"
        />
      ) : (
        <div className="relative z-10 ml-10 flex h-[220px] w-[150px] items-center justify-center rounded-2xl bg-[#1A1A2E] text-center text-gray-400">
          <div>
            <p className="font-semibold">Poster</p>
            <p>Not Available</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default TrendingCard;
