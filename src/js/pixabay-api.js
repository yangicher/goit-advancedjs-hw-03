const API_KEY = '50367317-4b50f00e153dc123b8b56efd6';
const BASE_URL = 'https://pixabay.com/api/';

export async function fetchImages(query) {
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