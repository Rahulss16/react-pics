import axios from 'axios';

export default axios.create ({
  baseURL: 'https://api.unsplash.com/',
  headers: {
    Authorization: 'Client-ID af263ce092b42c1f1b555b977e90be9b1e8a739b60fde897592c790f079e02f1',
  },
});
