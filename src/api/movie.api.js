import moviesData from "@/data/moviesData.js"

const PAGE_SIZE = 8;
export const movieApi = {

    search: async (query = "", page = 1, limit = PAGE_SIZE) => {
        let result = moviesData; 
        const keyword = query.trim().toLowerCase();

        //1. filter phim
        if(keyword) {
            result = moviesData.filter(movie => 
                movie.title.toLowerCase().includes(keyword)
            )
        }
        
        //2. pagination
        const start = (page - 1) * limit;
        const end = start + limit;
        const paginated = result.slice(start, end)

        return {
            data: paginated,
            total: result.length,
            totalPages: Math.ceil(result.length / limit),
            currentPage: page,
        }
    }   
}