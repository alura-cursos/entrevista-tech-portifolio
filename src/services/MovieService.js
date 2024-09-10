import { fetchMovie, fetchTranslation } from "../utils/apiConnect.js";

class MovieService {
  static async getMovieInfo (movieName) {
    const movie = await fetchMovie(movieName);
    return movie;
  }

  static async getTranslation(movieInfo) {
    const translated = await fetchTranslation(movieInfo.plot);
    console.log(translated);
    return translated;
  }
}

export default MovieService;
