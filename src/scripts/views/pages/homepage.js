/* eslint-disable max-len */
/* eslint-disable no-return-assign */
/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
import TheMovieDbSource from "../../data/themoviedb-source";

import { createMovieItemTemplate } from "../templates/template-creator";

const Homepage = {
  async render() {
    return `
        <section id="movies" class="movie-catalogue-container">
            <div class="container-fluid p-2 movie-bg">
                <div class="d-flex justify-content-center align-self-center mb-3">
                    <header class="movie-bg-header px-3">
                        <h3 class="text-white">Welcome Movie Catalogue</h3>
                        <p>Search & find the latest movies</p>
                    </header>    
                </div>
            </div>
            <div class="container-fluid py-5 px-3">
               <div class="row">
                    <div class="col-md-12">
                        <div class="d-flex justify-content-between mb-3">
                                <h2 class="content__heading">Now Playing In Cinema</h2>
                                <a href="#/now-playing" class="text-end text-dark text-decoration-none"> Show All</a>
                        </div>
                        <div class="row">
                            <div class="col"><div id="moviesNowPlaying" class="movies"></div></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container-fluid py-5 px-3">
               <div class="row">
                    <div class="col-md-12">
                        <div class="d-flex justify-content-between mb-3">
                                <h2 class="content__heading">Populer Movies</h2>
                                <a href="#/populer" class="text-end text-dark text-decoration-none"> Show All</a>
                        </div>
                        <div class="row">
                            <div class="col"><div id="moviesPopular" class="movies"></div></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container-fluid py-5 px-3">
               <div class="row">
                    <div class="col-md-12">
                        <div class="d-flex justify-content-between mb-3">
                                <h2 class="content__heading">Upcoming Movies</h2>
                                <a href="#/upcoming" class="text-end text-dark text-decoration-none"> Show All</a>
                        </div>
                        <div class="row">
                            <div class="col"><div id="moviesUpcoming" class="movies"></div></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `;
  },

  async afterRender() {
    const moviesNowPlaying = await TheMovieDbSource.nowPlayingMovies();
    const moviesNowPlayingContainer =
      document.querySelector("#moviesNowPlaying");

    moviesNowPlaying.slice(0, 4).map((movie) => {
      moviesNowPlayingContainer.innerHTML += createMovieItemTemplate(movie);
    });

    const moviesPopular = await TheMovieDbSource.popularMovies();
    const moviesPopularContainer = document.querySelector("#moviesPopular");

    moviesPopular.slice(0, 4).map((movie) => {
      moviesPopularContainer.innerHTML += createMovieItemTemplate(movie);
    });

    const moviesUpcoming = await TheMovieDbSource.upcomingMovies();
    const moviesUpcomingContainer = document.querySelector("#moviesUpcoming");

    moviesUpcoming.slice(0, 4).map((movie) => {
      moviesUpcomingContainer.innerHTML += createMovieItemTemplate(movie);
    });
  },
};

export default Homepage;
