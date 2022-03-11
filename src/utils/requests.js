import { APIKEY } from "@env";

const requests = {
    fetchTrending: `/trending/all/week?api_key=${APIKEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${APIKEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${APIKEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${APIKEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${APIKEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${APIKEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${APIKEY}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${APIKEY}&with_genres=99`,
    fetchGenres: `/genre/movie/list?api_key=${APIKEY}&language=en-US`,
    fetchUpcoming: `/movie/upcoming?api_key=${APIKEY}&language=en-US`,
    fetchPopular: `/movie/popular?api_key=${APIKEY}&language=en-US`,
    searchMovie: `/search/movie?api_key=${APIKEY}&language=en-US&query=`,
}

export default requests;
