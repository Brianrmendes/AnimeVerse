
const API_KEY = "Enter your key";

const requests={
    fetchTrending: `/discover/tv?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&with_keywords=210024`,
    fetchPopularInMovies:`/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&page=1&with_keywords=210024`,
    fetchPopularInSeries:`/discover/tv?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&page=1&with_keywords=210024`,
    fetchAdventure: `/discover/tv?api_key=${API_KEY}&sort_by=popularity.desc&with_genres=10759&with_keywords=210024`,
    fetchComedy: `/discover/tv?api_key=${API_KEY}&sort_by=popularity.desc&with_genres=35&with_keywords=210024`,
    fetchDrama: `/discover/tv?api_key=${API_KEY}&sort_by=popularity.desc&with_genres=18&with_keywords=210024`,
    fetchMystery:`/discover/tv?api_key=${API_KEY}&sort_by=popularity.desc&with_genres=9648&with_keywords=210024`,
    fetchForKids:`/discover/tv?api_key=${API_KEY}&sort_by=popularity.desc&with_genres=10762&with_keywords=210024`,
};
export default requests;