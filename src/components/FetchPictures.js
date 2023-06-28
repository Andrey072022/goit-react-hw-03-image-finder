import axios from 'axios';

const KEY_API = '35230294-8bc6724a2fdeb98c2678fb387';
export const per_page = 12;
// axios.defaults.baseURL('');

export async function fetchPhoto(number_page, name) {
  const response = await axios.get(
    `https://pixabay.com/api/?key=${KEY_API}&q=${name}`,
    {
      params: {
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: 'true',
        per_page: `${per_page}`,
        page: `${number_page}`,
      },
    }
  );
  return response;
}
