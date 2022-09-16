import axios from "axios";
import { ILogin, IRegister, RoomType, UserType } from "../types";

const API_URL = process.env.REACT_APP_API_URL;

export const login = ({ email, password, navigate, setError }: ILogin) => {
  axios
    .post(`${API_URL}/api/user/login`, { email, password })
    .then(({ data }) => {
      if (data.token) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("user_id", data._id);
        navigate("/");
      } else {
        throw Error();
      }
    })
    .catch((e) => {
      const message = e.response?.data?.message || "Something went wrong";
      setError(message);
    });
};

export const register = ({
  email,
  name,
  password,
  navigate,
  setError,
}: IRegister) => {
  axios
    .post(`${API_URL}/api/user/register`, { name, password, email })
    .then(({ data }) => {
      localStorage.setItem("token", data.token);
      localStorage.setItem("user_id", data._id);
    })
    .then(() => navigate("/"))
    .catch((e) => {
      const message = e.response?.data?.message || "Something went wrong";
      setError(message);
    });
};

export const getRoomsList = async () => {
  const token = localStorage.getItem("token");
  const userId = localStorage.getItem("user_id");
  try {
    const { data } = await axios.get(`${API_URL}/api/rooms/${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  } catch (error: unknown) {
    // eslint-disable-next-line no-console
    console.error("Error while getting rooms list");
    return [];
  }
};

export const makeSearch = async (term: string): Promise<Array<UserType>> => {
  if (term.length < 3) return [];
  const token = localStorage.getItem("token");
  const userId = localStorage.getItem("user_id");

  try {
    const { data } = await axios.get(
      `${API_URL}/api/user/search?term=${term}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return data.filter((user: UserType) => user._id !== userId);
  } catch {
    console.error("Error while search");
    return [];
  }
};

export const createRoom = async (userId: string): Promise<RoomType | null> => {
  const token = localStorage.getItem("token");
  const currentUser = localStorage.getItem("user_id");
  try {
    const { data } = await axios.post(
      `${API_URL}/api/rooms/`,
      { senderId: currentUser, receiverId: userId },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log({ data });
    return data;
  } catch {
    console.error("Error while creating the room");
    return null;
  }
};
