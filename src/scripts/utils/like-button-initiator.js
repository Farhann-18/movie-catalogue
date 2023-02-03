/* eslint-disable quotes */
/* eslint-disable no-undef */
/* eslint-disable no-empty-function */
/* eslint-disable no-unused-vars */
import FavoriteMovieIdb from "../data/favorite-movie-idb";
import {
  createLikeButtonTemplate,
  createLikedButtonTemplate,
} from "../views/templates/template-creator";

const LikeButtonInitiator = {
  async init({ likeButtonContainer, movie }) {
    this._likeButtonContainer = likeButtonContainer;
    this._movie = movie;

    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._movie;

    if (await this._isMovieExist(id)) {
      this._renderLiked();
    } else {
      this._renderLike();
    }
  },

  async _isMovieExist(id) {
    const movie = await FavoriteMovieIdb.getMovie(id);
    return !!movie;
  },

  _renderLike() {
    this._likeButtonContainer.innerHTML = createLikeButtonTemplate();

    const likeButton = document.querySelector("#likeButton");
    likeButton.addEventListener("click", async () => {
      Swal.fire({
        title: "Are you sure you save this movie.?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, save",
        cancelButtonText: "No",
      }).then(async (result) => {
        if (result.isConfirmed) {
          await FavoriteMovieIdb.putMovie(this._movie);
          this._renderButton();
          Swal.fire("success", "Successfully added a movie", "success");
        }
      });
    });
  },

  _renderLiked() {
    this._likeButtonContainer.innerHTML = createLikedButtonTemplate();

    const likeButton = document.querySelector("#likeButton");
    likeButton.addEventListener("click", async () => {
      Swal.fire({
        title: "Are you sure you want to delete this movie listing?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Delete",
        cancelButtonText: "Tidak",
      }).then(async (result) => {
        if (result.isConfirmed) {
          await FavoriteMovieIdb.deleteMovie(this._movie.id);
          this._renderButton();
          Swal.fire("success", "Successfully deleted a movie", "success");
        }
      });
    });
  },
};

export default LikeButtonInitiator;
