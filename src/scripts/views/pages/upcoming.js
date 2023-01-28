/* eslint-disable no-return-assign */
/* eslint-disable no-unused-vars */
import TheMovieDbSource from '../../data/themoviedb-source';
import { createMovieItemTemplate } from '../templates/template-creator';

const Upcoming = {
  async render() {
    return `
        <section id="movies-container">
          <div class="content mx-3 pt-3">
            <h2 class="content__heading">Terbaru Di Tahun Ini</h2>
            <hr>
            <div id="movies" class="movies">
          </div>
        </section
    `;
  },

  async afterRender() {
    const movies = await TheMovieDbSource.upcomingMovies();
    const moviesContainer = document.querySelector('#movies');

    movies.map((movie) => moviesContainer.innerHTML += createMovieItemTemplate(movie));
  },
};

export default Upcoming;
