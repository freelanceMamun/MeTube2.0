import axios from 'axios';

const baseUrl = `https://youtube138.p.rapidapi.com`;
const options = {
  params: { hl: 'en', gl: 'US' },
  headers: {
    'X-RapidAPI-Key':
      process.env.REACT_APP_YOUTUBE_API_KEY ||
      '19eba4a2fdmshd78c3ef7c528020p14169djsnb9e43fb92e92',
    'X-RapidAPI-Host': 'youtube138.p.rapidapi.com',
  },
};

export const fetcDataFromApi = async (url) => {
  console.log(url);
  const { data } = await axios.get(`${baseUrl}/${url}`, options);
  return data;
};
