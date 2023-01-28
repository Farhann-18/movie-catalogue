/* eslint-disable no-undef */
/* eslint-disable no-empty-function */
/* eslint-disable no-unused-vars */
import FavoriteMovieIdb from '../data/favorite-movie-idb';
import { createLikeButtonTemplate, createLikedButtonTemplate } from '../views/templates/template-creator';

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

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      Swal.fire({
        title: 'Apakah kamu yakin menyukai film ini.?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Ya, saya suka',
        cancelButtonText: 'Tidak',
      }).then(async (result) => {
        if (result.isConfirmed) {
          await FavoriteMovieIdb.putMovie(this._movie);
          this._renderButton();
          Swal.fire(
            'success',
            'Berhasil ,menambahkan film disukai.',
            'success',
          );
        }
      });
    });
  },

  _renderLiked() {
    this._likeButtonContainer.innerHTML = createLikedButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      Swal.fire({
        title: 'Apakah kamu yakin menghapus film disukai ini.?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Ya, Hapus',
        cancelButtonText: 'Tidak',
      }).then(async (result) => {
        if (result.isConfirmed) {
          await FavoriteMovieIdb.deleteMovie(this._movie.id);
          this._renderButton();
          Swal.fire(
            'success',
            'Berhasil ,menghapus film disukai.',
            'success',
          );
        }
      });
    });
  },
};

export default LikeButtonInitiator;
