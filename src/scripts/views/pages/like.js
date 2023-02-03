/* eslint-disable no-return-assign */
/* eslint-disable no-unused-vars */
/* eslint-disable no-empty-function */
import FavoriteMovieIdb from "../../data/favorite-movie-idb";
import { createMovieItemTemplate } from "../templates/template-creator";

const Like = {
  async render() {
    return `
   <section id="movie-catalogue-container">
        <div class="container-fluid py-5 px-3">
               <div class="row">
                    <div class="col-md-12">
                        <div class="d-flex mb-3">
                                <h2 class="content__heading">Bookmark Movies</h2>
                        </div>
                    </div>
                </div>

                <div class="row">
                  <div class="col-12">
                     <div class="content ">
                        <div id="movies" class="movies"></div>
                      </div>
                  </div
                </div>
        </div>
       
    </section>
  `;
  },
  async afterRender() {
    const movies = await FavoriteMovieIdb.getAllMovies();
    const moviesContainer = document.querySelector("#movies");

    movies.map(
      (movie) => (moviesContainer.innerHTML += createMovieItemTemplate(movie))
    );
  },
};

export default Like;
