import { useState } from "react";
import MovieModal from "@/components/MovieModal";
import HomePage from "@/pages/HomePage/HomePage";
import TrendingPage from "@/pages/TrendingPage/TrendingPage";
import PopularPage from "@/pages/PopularPage/PopularPage";
import SearchInput from "@/components/SearchInput";
import { useFetch } from "@/hooks/useFetch";
import { movieApi } from "./api";

function App() {
  const [searchInput, setSearchInput] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedMovieId, setSelectedMovieId] = useState(null);
  
  const { data: movieDetail} = useFetch(
    () => selectedMovieId ? movieApi.getDetail(selectedMovieId) : null,
    [selectedMovieId]
  ) 
  return (
    <div>
      {/* home page */}
      <HomePage />
      
      {/* search input */}
      <SearchInput
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      
      {/* trending */}
      <TrendingPage setSelectedMovieId={setSelectedMovieId} />

      {/* popular */}
      <PopularPage
        searchInput={searchInput}
        setSelectedMovieId={setSelectedMovieId}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />

      {/* modal */}
      {movieDetail && (
        <MovieModal movie={movieDetail} setSelectedMovieId={setSelectedMovieId} />
      )}
    </div>
  );
}

export default App;
