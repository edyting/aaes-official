import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:5000/api',
  withCredentials: true, // important for session-based auth
});

export const checkAuthStatus = async () => {
  try {
    const response = await axiosInstance.get('/isAuth');
    console.log('Auth Response:', response);
    return response.status === 200;
  } catch (error) {
    console.log({"Auth error":error})
    return false;
  }
};

export default axiosInstance;
