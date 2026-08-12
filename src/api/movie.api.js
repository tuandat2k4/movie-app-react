
import { http, MOVIE_ENDPOINTS } from ".";
import { mapMovieCard, mapMovieDetail, mapMovieList } from "@/services/movie.service";

export const movieApi = {

    getTrending: async () => {
        const response = await http.get(MOVIE_ENDPOINTS.TRENDING_MOVIES)
        return {
            ...response,
            results: response.data?.results?.slice(0, 6).map(mapMovieCard) || []
        }
    },

    getPopular: async (page = 1) => {
        const response = await http.get(MOVIE_ENDPOINTS.POPULAR_MOVIES, {
            params: { page , language: 'en-US'}
        }) 
        return mapMovieList(response.data);
    },

    search: async (query = '', page = 1) => {
        if (!query.trim()) return movieApi.getPopular(page);
        const response = await http.get(MOVIE_ENDPOINTS.SEARCH_MOVIES, {
            params: { query, page, language: 'en-US'},
        })
        return mapMovieList(response.data);
    },

    getDetail: async (movieId) => {
        const response = await http.get(MOVIE_ENDPOINTS.MOVIE_DETAIL(movieId), {
            params: { language: 'en-US'},
        })
        return mapMovieDetail(response.data);
    },

    getTrailerVideo: async (movieId) => {
        const response = await http.get(MOVIE_ENDPOINTS.TRAILER_VIDEO(movieId))
        return response.data?.results?.find(video => video.type === 'Trailer')
    }
}