import { useState } from "react";
import MovieModal from "@/components/MovieModal";
import HomePage from "@/pages/HomePage/HomePage";
import TrendingPage from "@/pages/TrendingPage/TrendingPage";
import PopularPage from "@/pages/PopularPage/PopularPage";
import SearchInput from "@/components/SearchInput";

function App() {
  const [searchInput, setSearchInput] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedMovie, setSelectedMovie] = useState(null);
  return (
    <div>
      {/* home page */}
      <HomePage searchInput={searchInput} setSearchInput={setSearchInput} />
      
      {/* search input */}
      <SearchInput
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      
      {/* trending */}
      <TrendingPage setSelectedMovie={setSelectedMovie} />

      {/* popular */}
      <PopularPage
        searchInput={searchInput}
        setSelectedMovie={setSelectedMovie}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />

      {/* modal */}
      {selectedMovie && (
        <MovieModal movie={selectedMovie} setSelectedMovie={setSelectedMovie} />
      )}
    </div>
  );
}

export default App;
