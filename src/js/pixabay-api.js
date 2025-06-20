const API_KEY = '50706028-1c89dce29f588a1d4e8ec62d3';
const BASE_URL = 'https://pixabay.com/api';

export function loadImages(query) {
  const params = new URLSearchParams({
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
  });

  console.log('Fetching URL: ', url);
  console.log(`${BASE_URL}?${params}`);

  return fetch(`${BASE_URL}?${params}`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      return data.hits;
    })
    .catch(error => {
      console.error('Error fetching images:', error.message || error);
      throw error;
    });
}