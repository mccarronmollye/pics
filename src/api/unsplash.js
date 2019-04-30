import axios from 'axios';


export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 2c79287492c41c086a1710e5a2e59a1e56cdd22f26edf6eb99e72aafacb7b382'
  }

});
