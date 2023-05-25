import axios from 'axios';

export const perPage = 12;

const API_KEY = '30578820-1c894d3db344c99ef40fa5cf7';

axios.defaults.baseURL = 'https://pixabay.com/api/';
// axios.defaults.headers.common['Authorization'] = API_KEY;
axios.defaults.params = {
  image_type: 'photo',
  orientation: 'horizontal',
  per_page: perPage,
};

export const getImages = async (searchTag, page) => {
  const { data } = await axios.get(`?q=${searchTag}&key=${API_KEY}&page${page}`);
  console.log(data);
  return data;
};
