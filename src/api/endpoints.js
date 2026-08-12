export const MOVIE_ENDPOINTS = {
    TRENDING_MOVIES: '/trending/movie/week',
    POPULAR_MOVIES: '/movie/popular',
    SEARCH_MOVIES: '/search/movie',
    MOVIE_DETAIL: (id) => `/movie/${id}`,
    TRAILER_VIDEO: (id) => `/movie/${id}/videos`
}