import axios from 'axios';

const KEY = 'AIzaSyDa18-8tBPJpa4a-ccOsKyPKoYbt4tINNQ';

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: 'snippet',
    maxResults: '10',
    key: KEY
  }
});
