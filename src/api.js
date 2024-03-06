import axios from 'axios';
import Cookies from 'js-cookie';

const api = axios.create({
  baseURL: 'http://13.233.230.0:4500/',
  withCredentials: true,
  headers: {
    'Cookie': `token=${Cookies.get('token')}`,
  },
});



export const apiCall = async (url, data, method) => {
  try {
    const response = await api(
      {
        method,
        url,
        data,
        withCredentials: true
      }
    );
    return response.data;
  } catch (error) {
    // if (error) {
    //   Cookies.remove('username');
    //   Cookies.remove('token');
    //   toast.error(error.message);
    //   if (window.location.pathname !== '/login')
    //   {
    //   setTimeout(() => {
    //     window.location.href = '/login';
    //   }, 3000);
    // }
   // }
  }
}

export default api;