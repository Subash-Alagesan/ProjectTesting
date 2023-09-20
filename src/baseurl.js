import axios from 'axios';

const baseURL = 'https://api.example.com'; 

const instance = axios.create({
  baseURL,
  timeout: 10000, 
  headers: {
    'Content-Type': 'application/json',
  },
});

export default instance;