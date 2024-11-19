const axios = require('axios');



const getPopularMovies = async (req, res, next) => {
    try {
        const response = await axios.get(`${process.env.TMDB_BASE_URL}/movie/popular`, {
            params: {
                api_key: process.env.TMDB_API_KEY,
                language: 'es-ES',
            },
        });
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener películas populares' });
    }
};


const getNowPlayingMovies = async (req, res, next) => {
    try {
        const response = await axios.get(`${process.env.TMDB_BASE_URL}/movie/now_playing`, {
            params: {
                api_key: process.env.TMDB_API_KEY,
                language: 'es-ES',
            },
        });
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener películas en cartelera' });
    }
};


const getMovieCredits = async (req, res, next) => {
    const { movieId } = req.params;
    try {
        const response = await axios.get(`${process.env.TMDB_BASE_URL}/movie/${movieId}/credits`, {
            params: {
                api_key: process.env.TMDB_API_KEY,
                language: 'es-ES',
            },
        });
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener créditos de la película' });
    }
};

module.exports = {
    getPopularMovies,
    getNowPlayingMovies,
    getMovieCredits
};
