import { useState } from "react";
import SearchInput from "./components/SearchInput";
import Trending from "./components/Trending";
import Popular from "./components/Popular";
import Pagination from "./components/Pagination";
import MovieModal from "./components/MovieModal";

function App() {
  const [searchInput, setSearchInput] = useState("");
  const [selectedMovie, setSelectedMovie] = useState(null);
  return (
    <div className="">
      <main className="min-h-screen bg-[url('/BG.png')] bg-cover bg-center relative">
        <img
          src="/logo.png"
          alt="Logo"
          className="w-[90.41px] h-16.5 mx-auto absolute top-5 left-1/2 -translate-x-1/2"
        />

        <img src="/hero-img.png" alt="Hero" className="w-150 mx-auto p-1" />

        <h1 className="text-center text-5xl font-bold text-white ">
          Find <span className="text-[#9a8bef]">Movies</span> You'll Love
          <br />
          Without the Hassle
        </h1>

        {/* Search Input */}
        <SearchInput
          searchInput={searchInput}
          setSearchInput={setSearchInput}
        />
      </main>

      {/* trending */}
      <Trending setSelectedMovie={setSelectedMovie} />
      <Popular setSelectedMovie={setSelectedMovie} />
      <Pagination />

      {selectedMovie && (
        <MovieModal movie={selectedMovie} setSelectedMovie={setSelectedMovie} />
      )}
    </div>
  );
}

export default App;
