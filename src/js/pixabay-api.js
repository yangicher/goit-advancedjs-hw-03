const API_KEY = '50706028-1c89dce29f588a1d4e8ec62d3';
const BASE_URL = 'https://pixabay.com/api/';

export async function loadImages(query) {
  const params = new URLSearchParams({
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
  });
  const response = await fetch(`${BASE_URL}?${params}`);

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  const data = await response.json();
  return data.hits;
}