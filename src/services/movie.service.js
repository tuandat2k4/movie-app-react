import { formatDate, formatMoney, formatRuntime } from "@/utils/format";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p";

export const mapMovieCard = (movie) => ({
  id: movie.id,
  title: movie.title,
  poster: movie.poster_path
    ? `${IMAGE_BASE_URL}/w500${movie.poster_path}`
    : null,
  backdrop: movie.backdrop_path
    ? `${IMAGE_BASE_URL}/original${movie.backdrop_path}`
    : null,
  year: movie.release_date?.split("-")[0] || "",
  rating: movie.vote_average?.toFixed(1) || "0",
  overview: movie.overview,
  category: movie.genres?.[0]?.name || "",
  type: "Movie",
});

export const mapMovieList = (res) => ({
    data: res.results?.map(mapMovieCard) || [],
    total: res.total_results || 0,
    totalPages: res.total_pages,
    currentPage: res.page,
})

export const mapMovieDetail = (movie) => ({
    ...mapMovieCard(movie),
    tagline: movie.tagline || '',
    runtime: formatRuntime(movie.runtime),
    genres: movie.genres?.map((g) => g.name) || [],
    budget: formatMoney(movie.budget),
    revenue: formatMoney(movie.revenue),
    status: movie.status || '',
    releaseDate: formatDate(movie.release_date),
    countries: movie.production_countries?.map((c) => c.name) || [],
    languages: movie.spoken_languages?.map((l) => l.english_name) || [],
    production: movie.production_companies?.map((l) => l.name) || [],

})