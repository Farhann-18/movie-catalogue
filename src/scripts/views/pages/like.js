/* eslint-disable no-return-assign */
/* eslint-disable no-unused-vars */
/* eslint-disable no-empty-function */
import FavoriteMovieIdb from '../../data/favorite-movie-idb';
import { createMovieItemTemplate } from '../templates/template-creator';

const Like = {
  async render() {
    return `
    <section id="movies-container">
      <div class="content mx-3 pt-5">
        <h2 class="content__heading">Semua Daftar Film Kamu Sukai</h2>
        <div id="movies" class="movies"></div>
      </div>
    </section>
  `;
  },
  async afterRender() {
    const movies = await FavoriteMovieIdb.getAllMovies();
    const moviesContainer = document.querySelector('#movies');

    movies.map((movie) => moviesContainer.innerHTML += createMovieItemTemplate(movie));
  },
};

export default Like;
