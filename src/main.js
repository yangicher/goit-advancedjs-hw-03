import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import { loadImages } from './js/pixabay-api.js';
import { clearGallery, hideLoader, renderGallery, showLoader } from './js/render-functions.js';

const form = document.querySelector('.form');

function toastErrorOptions(message) {
  return ({
    progressBar: false,
    position: 'topRight',
    animateInside: false,
    message: `${message}`
  });
}

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const query = form.elements.query.value.trim();

  if (!query) {
    iziToast.show(toastErrorOptions('Please enter a search query!'));
    return;
  }

  clearGallery();
  showLoader();

  try {
    const images = await loadImages(query);

    if (!images.length) {
      iziToast.show(toastErrorOptions('Sorry, there are no images matching your search query. Please try again!'));
      return;
    }

    renderGallery(images);
  } catch (error) {
    iziToast.show(toastErrorOptions('Something went wrong. Please try again later.'));
  } finally {
    hideLoader();
  }
});

