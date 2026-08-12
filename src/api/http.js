import axios from 'axios'
import TMDB_CONFIG from '../constants/config'

export const http = axios.create({
    baseURL: TMDB_CONFIG.BASE_URL,
    timeout: TMDB_CONFIG.TIMEOUT
})

// cài interceptors tự động thêm api key vào mỗi request
http.interceptors.request.use(
    (config) => {
        config.params = {
            ...config.params,
            api_key: TMDB_CONFIG.API_KEY
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
)

