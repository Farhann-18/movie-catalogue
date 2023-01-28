import API_ENDPOINT from '../globals/api-endpoint';

class TheMovieDbSource {
  static async nowPlayingMovies() {
    const response = await fetch(API_ENDPOINT.NOW_PLAYING);
    const responseJson = await response.json();
    return responseJson.results.slice(0, 20);
  }

  static async upcomingMovies() {
    const response = await fetch(API_ENDPOINT.UPCOMING);
    const responseJson = await response.json();
    return responseJson.results;
  }

  static async trendingMovies() {
    const response = await fetch(API_ENDPOINT.TRENDING);
    const responseJson = await response.json();
    return responseJson.results;
  }

  static async popularMovies() {
    const response = await fetch(API_ENDPOINT.POPULAR);
    const responseJson = await response.json();
    return responseJson.results;
  }

  static async listMovies() {
    const response = await fetch(API_ENDPOINT.LIST);
    const responseJson = await response.json();
    return responseJson.results;
  }

  static async detailMovie(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    return response.json();
  }
}

export default TheMovieDbSource;
