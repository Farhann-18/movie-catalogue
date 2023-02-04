/* eslint-disable max-len */
import CONFIG from "../../globals/config";

const createMovieDetailTemplate = (movie) => `
  <div class="movies-container py-3">
    <div class="row align-content-start">
      <div class="col mb-3">
        <a href="#"  onclick="history.back()" class="text-dark text-decoration-none text-underline"><i class="fa fa-arrow-left"></i> Kembali  </a></div>
    </div>
    <div class="row justify-content-arround">
        <div class="col-lg-4 col-md-6">
              <img class="movie__poster img-fluid rounded w-100 lazyload" src="${
                CONFIG.BASE_IMAGE_URL + movie.poster_path
              }" alt="${movie.title}" />
        </div>
        <div class="col-lg-6 col-md-6">
            <div class="movie__info">
              <h2 class="mx-3 pt-2">Informasi Detail: </h2>
              <hr>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">
                    <h4>Original Title</h4>
                    <p>${movie.title}</p>
                </li>
                <li class="list-group-item">
                    <h4>Genre</h4>
                    <p>
                    ${movie.genres.map((genre) => genre.name)}</p>
                </li>
                <li class="list-group-item">
                    <h4>Tagline</h4>
                    <p>${movie.tagline}</p>
                </li>
                <li class="list-group-item">      
                    <h4>Release Date</h4>
                    <p>${movie.release_date}</p>
                </li>
                <li class="list-group-item">   
                  <h4>Duration</h4>
                  <p>${movie.runtime} minutes</p>
                </li>
                <li class="list-group-item">
                      <h4>Rating</h4>
                      <p>${movie.vote_average}</p>
                </li>
                <li class="list-group-item">
                      <h4>Overview</h4>
                      <p>${movie.overview}</p>
                </li>
              </ul>
            </div>
            <div class="mx-3 mb-3">
               <a href="${
                 movie.homepage
               }" target="_blank" class="btn btn-md btn-danger rounded">Watch Movie</a>
            </div>
        </div>
    </div>
  </div>
`;

const createMovieItemTemplate = (movie) => `
  <div class="movie-item">
    <div class="movie-item__header">
    <a href="/#/detail/${movie.id}">
      <img class="movie-item__header__poster rounded lazyload" alt="${
        movie.title
      }"
           src="${
             movie.backdrop_path
               ? CONFIG.BASE_IMAGE_URL + movie.backdrop_path
               : "https://picsum.photos/id/666/800/450?grayscale"
           }">
        </a>
    </div>
    <div class="movie-item__content">
      <h3><a href="/#/detail/${movie.id}">${movie.title}</a></h3>
      <p>${movie.overview}</p>
    </div>
  </div>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this movie" id="likeButton" class="like">
     <i class="fa fa-bookmark-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this movie" id="likeButton" class="like">
    <i class="fa fa-bookmark" aria-hidden="true"></i>
  </button>
`;

export {
  createMovieItemTemplate,
  createMovieDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
