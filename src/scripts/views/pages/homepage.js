/* eslint-disable max-len */
/* eslint-disable no-return-assign */
/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
import TheMovieDbSource from '../../data/themoviedb-source';

import { createMovieItemTemplate } from '../templates/template-creator';

const Homepage = {
  async render() {
    return `
        <section class="movie-wrapper pt-5" 
        <div class="jumbotron jumbotron-fluid mx-3 py-3" style="background-color: #fafafa;">
                <h1 class="display-4 mx-3">Halo, Selamat Datang</h1>
                <p class="lead mx-3">Selamat datang di web movie catalogue. Cari film kesayangan anda disini.</p>
        </div>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-12">
                        <div class="content mx-3 pt-3"> 
                            <div class="d-flex justify-content-between">
                                <h2 class="content__heading">Sedang Tayang</h2>
                                <a href="#/now-playing" class="text-end text-dark text-decoration-none"> Lihat semua</a>
                            </div>
                            <hr>
                            <div id="moviesNowPlaying" class="movies"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-12">
                        <div class="content mx-3 pt-3"> 
                            <div class="d-flex justify-content-between">
                                <h2 class="content__heading">Sedang Populer</h2>
                                <a href="#/populer" class="text-end text-dark text-decoration-none"> Lihat semua</a>
                            </div>
                            <hr>
                            <div id="moviesPopular" class="movies"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-12">
                        <div class="content mx-3 pt-3"> 
                            <div class="d-flex justify-content-between">
                                <h2 class="content__heading">Trending Hari Ini</h2>
                                <a href="#/trending" class="text-end text-dark text-decoration-none"> Lihat semua</a>
                            </div>
                            <hr>
                            <div id="moviesLatest" class="movies"></div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    `;
  },

  async afterRender() {
    const moviesPopular = await TheMovieDbSource.popularMovies();
    const moviesPopularContainer = document.querySelector('#moviesPopular');

    const moviesNowPlaying = await TheMovieDbSource.nowPlayingMovies();
    const moviesNowPlayingContainer = document.querySelector('#moviesNowPlaying');

    const moviesLatest = await TheMovieDbSource.trendingMovies();
    const moviesLatestContainer = document.querySelector('#moviesLatest');

    moviesPopular.slice(0, 4).map((movie) => moviesPopularContainer.innerHTML += createMovieItemTemplate(movie));
    moviesNowPlaying.slice(0, 4).map((movie) => moviesNowPlayingContainer.innerHTML += createMovieItemTemplate(movie));
    moviesLatest.slice(0, 4).map((movie) => moviesLatestContainer.innerHTML += createMovieItemTemplate(movie));
  },
};

export default Homepage;
