/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
import TheMovieDbSource from "../../data/themoviedb-source";

import { createMovieItemTemplate } from "../templates/template-creator";

const NowPlaying = {
  async render() {
    return `
    <section id="movie-catalogue-container">
        <div class="container-fluid py-5 px-3">
        <a class="text-dark text-decoration-none" href="/"><i class="fa fa-arrow-left"> </i> Back To Home</a>
               <div class="row">
                    <div class="col-md-12">
                        <div class="d-flex mb-3">
                                <h2 class="content__heading">Now Playing In Cinema</h2>
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
    const movies = await TheMovieDbSource.nowPlayingMovies();
    const moviesContainer = document.querySelector("#movies");

    movies.map((movie) => {
      moviesContainer.innerHTML += createMovieItemTemplate(movie);
    });
  },
};

export default NowPlaying;
