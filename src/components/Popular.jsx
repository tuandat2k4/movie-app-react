import moviesData from "../data/moviesData";

import PopularCard from "./PopularCard";

const Popular = ({ setSelectedMovie }) => {
  return (
    <section className="mt-20 px-20">
      <h2 className="mb-8 text-5xl font-bold text-white">Popular</h2>

      <div className="grid grid-cols-4 gap-8">
        {moviesData.map((movie) => (
          <PopularCard
            key={movie.id}
            movie={movie}
            setSelectedMovie={setSelectedMovie}
          />
        ))}
      </div>
    </section>
  );
};

export default Popular;
