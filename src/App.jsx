import { useState } from "react";
import MovieModal from "@/components/MovieModal";
import HomePage from "@/pages/HomePage/HomePage";
import TrendingPage from "@/pages/TrendingPage/TrendingPage";
import PopularPage from "@/pages/PopularPage/PopularPage";

function App() {
  const [searchInput, setSearchInput] = useState("");
  const [selectedMovie, setSelectedMovie] = useState(null);
  return (
    <div>
      {/* home page */}
      <HomePage searchInput={searchInput} setSearchInput={setSearchInput} />

      {/* trending */}
      <TrendingPage setSelectedMovie={setSelectedMovie} />

      {/* popular */}
      <PopularPage searchInput={searchInput} setSelectedMovie={setSelectedMovie} />

      {/* modal */}
      {selectedMovie && (
        <MovieModal movie={selectedMovie} setSelectedMovie={setSelectedMovie} />
      )}
    </div>
  );
}

export default App;
