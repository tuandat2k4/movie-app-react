import moviesData from "../data/moviesData";
import TrendingCard from "./TrendingCard";

const Trending = ({ setSelectedMovie }) => {
  return (
    <section className="mt-16 px-20">
      <h2 className="mb-10 text-5xl font-bold text-white">Trending</h2>

      <div className="flex justify-between items-end gap-8">
        {moviesData.slice(0, 6).map((movie, index) => (
          <TrendingCard
            movie={movie}
            index={index}
            setSelectedMovie={setSelectedMovie}
          />
        ))}
      </div>
    </section>
  );
};

export default Trending;
