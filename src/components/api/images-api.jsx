const PIXABAY_KEY = '33096086-1194933faea6ce020ed133eb1';
const URL = 'https://pixabay.com/api';
const URL_SEARCH_PARAMS = new URLSearchParams({
  key: PIXABAY_KEY,
  per_page: 12,
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: true,
});

async function getImages(q = '', page = 1) {
  const fullUrl = `${URL}?${URL_SEARCH_PARAMS}&page=${page}&q=${q}`;
  return fetch(fullUrl).then(response => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error(response.statusText);
    }
  });
}

export { getImages };
