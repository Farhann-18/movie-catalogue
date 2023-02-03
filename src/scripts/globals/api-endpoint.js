/* eslint-disable quotes */
import CONFIG from "./config";

const API_ENDPOINT = {
  LIST: `${CONFIG.BASE_URL}movie/top_rated?api_key=${CONFIG.KEY}&language=${CONFIG.DEFAULT_LANGUAGE}&page=1`,
  NOW_PLAYING: `${CONFIG.BASE_URL}movie/now_playing?api_key=${CONFIG.KEY}&language=${CONFIG.DEFAULT_LANGUAGE}&page=1`,
  UPCOMING: `${CONFIG.BASE_URL}movie/upcoming?api_key=${CONFIG.KEY}&language=${CONFIG.DEFAULT_LANGUAGE}&page=1`,
  LATEST: `${CONFIG.BASE_URL}movie/latest?api_key=${CONFIG.KEY}&language=${CONFIG.DEFAULT_LANGUAGE}&page=1`,
  TRENDING: `${CONFIG.BASE_URL}trending/movie/day?api_key=${CONFIG.KEY}&language=${CONFIG.DEFAULT_LANGUAGE}&page=1`,
  POPULAR: `${CONFIG.BASE_URL}movie/popular?api_key=${CONFIG.KEY}&language=${CONFIG.DEFAULT_LANGUAGE}`,
  DETAIL: (id) => `${CONFIG.BASE_URL}movie/${id}?api_key=${CONFIG.KEY}`,
  VIDEOS: (id) => `${CONFIG.BASE_URL}/movie/${id}/videos`,
};

export default API_ENDPOINT;
