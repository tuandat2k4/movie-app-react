import MovieDetail from "./MovieDetail";

const MovieModal = ({ movie, setSelectedMovie }) => {
  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-black/70"
      onClick={() => setSelectedMovie(null)}
    >
      <div className="flex min-h-screen items-center justify-center p-8">
        <MovieDetail movie={movie} setSelectedMovie={setSelectedMovie} />
      </div>
    </div>
  );
};

export default MovieModal;
