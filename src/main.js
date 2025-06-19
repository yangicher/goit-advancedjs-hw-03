import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import { fetchImages } from './js/pixabay-api.js';
import { clearGallery, hideLoader, renderGallery, showLoader } from './js/render-functions.js';

const form = document.querySelector('.form');

function getIziToastErrorOptions(message) {
  return ({
    icon: 'fa-solid fa-circle-exclamation',
    iconColor: 'white',
    message: `${message}`,
    messageColor: 'white',
    position: 'topRight',
    timeout: 3000,
    color: '#EF4040',
    maxWidth: '432px'
  });
}

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const query = form.elements.query.value.trim();

  if (!query) {
    iziToast.show(getIziToastErrorOptions('Please enter a search query!'));
    return;
  }

  clearGallery();
  showLoader();

  try {
    const images = await fetchImages(query);

    if (!images.length) {
      iziToast.show(getIziToastErrorOptions('Sorry, there are no images matching your search query. Please try again!'));
      return;
    }

    renderGallery(images);
  } catch (error) {
    iziToast.show(getIziToastErrorOptions('Something went wrong. Please try again later.'));
  } finally {
    hideLoader();
  }
});

