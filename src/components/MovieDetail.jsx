const MovieDetail = ({ movie, setSelectedMovie }) => {
  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className="w-full max-w-[1200px] rounded-[14px] bg-[#0F0D23] p-8 text-white"
    >
      {/* Hero */}
      <div className="mt-8 grid grid-cols-[240px_1fr] gap-8">
        {/* Poster */}
        <div className="overflow-hidden rounded-2xl bg-[#1A1A2E]">
          <img
            src={movie.poster || "/poster-not-found.png"}
            alt={movie.title}
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = "/poster-not-found.png";
            }}
            className="h-[360px] w-full object-cover"
          />
        </div>

        {/* Backdrop */}
        <div className="relative overflow-hidden rounded-2xl">
          <img
            src={movie.backdrop || "/backdrop-not-found.png"}
            alt={movie.title}
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = "/backdrop-not-found.png";
            }}
            className="h-[360px] w-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/30" />

          {/* Trailer Button */}
          <button
            className="
        absolute
        bottom-6
        left-6
        flex
        items-center
        gap-4
        rounded-full
        bg-white/15
        px-5
        py-3
        backdrop-blur-md
        transition
        hover:bg-white/25
      "
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#111"
                className="ml-1 h-5 w-5"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>

            <div className="text-left">
              <p className="font-semibold text-white">Play Trailer</p>

              <p className="text-sm text-gray-300">2:31</p>
            </div>
          </button>
        </div>
      </div>

      <div className="mt-10 grid grid-cols-[180px_1fr] gap-y-8">
        {/* Genres */}
        <h3 className="text-[#A8B5DB]">Genres</h3>

        <div className="flex flex-wrap items-center gap-3">
          {movie.genres.map((genre) => (
            <span
              key={genre}
              className="rounded-full border border-[#3D3A60] px-4 py-2 text-sm"
            >
              {genre}
            </span>
          ))}

          <a
            href="#"
            className="ml-auto rounded-lg bg-[#AB8BFF] px-5 py-2 font-medium text-black transition hover:opacity-90"
          >
            Visit Homepage →
          </a>
        </div>

        {/* Overview */}
        <h3 className="text-[#A8B5DB]">Overview</h3>

        <p className="leading-8 text-[#C9C9D4]">{movie.overview}</p>

        {/* Release Date */}
        <span className="text-[#A8B5DB]">Release Date</span>
        <span>{movie.releaseDate}</span>

        {/* Countries */}
        <span className="text-[#A8B5DB]">Countries</span>

        <div className="flex flex-wrap gap-2">
          {movie.countries.map((country) => (
            <span key={country} className="rounded bg-[#1B1735] px-3 py-1">
              {country}
            </span>
          ))}
        </div>

        {/* Status */}
        <span className="text-[#A8B5DB]">Status</span>
        <span>{movie.status}</span>

        {/* Language */}
        <span className="text-[#A8B5DB]">Language</span>

        <div className="flex flex-wrap gap-2">
          {movie.languages.map((lang, index) => (
            <span
              key={`${lang}-${index}`}
              className="rounded bg-[#1B1735] px-3 py-1"
            >
              {lang}
            </span>
          ))}
        </div>

        {/* Budget */}
        <span className="text-[#A8B5DB]">Budget</span>
        <span>{movie.budget}</span>

        {/* Revenue */}
        <span className="text-[#A8B5DB]">Revenue</span>
        <span>{movie.revenue}</span>

        {/* Tagline */}
        <span className="text-[#A8B5DB]">Tagline</span>
        <span>{movie.tagline}</span>

        {/* Production */}
        <span className="text-[#A8B5DB]">Production Companies</span>

        <div className="flex flex-wrap gap-2">
          {movie.production.map((company) => (
            <span key={company} className="rounded bg-[#1B1735] px-3 py-1">
              {company}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
