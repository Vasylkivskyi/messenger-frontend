import axios from 'axios';
import { ILogin, IRegister, UserType } from '../types';

const API_URL = process.env.REACT_APP_API_URL;

export const login = ({
  username, password, navigate, setError,
}: ILogin) => {
  axios.post(`${API_URL}/api/user/login`, { username, password })
    .then(({ data }) => {
      localStorage.setItem('token', data.token);
      localStorage.setItem('user_id', data.id);
    })
    .then(() => navigate('/'))
    .catch((e) => {
      const message = e.response?.data?.message || 'Something went wrong';
      setError(message);
    });
};

export const register = ({
  username, password, hint, navigate, setError,
}: IRegister) => {
  axios.post(`${API_URL}/api/user/register`, { username, password, hint })
    .then(({ data }) => {
      localStorage.setItem('token', data.token);
      localStorage.setItem('user_id', data.id);
    })
    .then(() => navigate('/'))
    .catch((e) => {
      const message = e.response?.data?.message || 'Something went wrong';
      setError(message);
    });
};

export const getRoomsList = async () => {
  const token = localStorage.getItem('token');
  const userId = localStorage.getItem('user_id');
  try {
    const { data } = await axios.get(`${API_URL}/api/rooms/getRooms?userId=${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  } catch (error: unknown) {
    console.error('Error while getting rooms list');
    return [];
  }
};

export const makeSearch = async (term: string): Promise<Array<UserType>> => {
  if (term.length < 3) return [];
  const token = localStorage.getItem('token');
  try {
    const { data } = await axios.get(`${API_URL}/api/user/search?term=${term}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  } catch {
    console.error('Error while search');
    return [];
  }
};
