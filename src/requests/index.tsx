import axios from "axios";
import {
  ILogin,
  IRegister,
  RoomType,
  localStorageValueType,
  UserType,
} from "../types";

const API_URL = process.env.REACT_APP_API_URL;

export const login = async ({ email, password }: ILogin) => {
  const { data } = await axios.post(`${API_URL}/api/user/login`, {
    email,
    password,
  });
  return data;
};

export const register = async ({ email, name, password }: IRegister) => {
  const { data } = await axios.post(`${API_URL}/api/user/register`, {
    name,
    password,
    email,
  });
  return data;
};

export const getRoomsList = async (userData: localStorageValueType) => {
  try {
    const { data } = await axios.get(`${API_URL}/api/rooms/${userData?._id}`, {
      headers: {
        Authorization: `Bearer ${userData?.token}`,
      },
    });
    return data;
  } catch (error: unknown) {
    console.error("Error while getting rooms list");
    return [];
  }
};

export const makeSearch = async (
  term: string,
  userData: localStorageValueType
): Promise<Array<UserType>> => {
  if (term.length < 3) return [];

  try {
    const { data } = await axios.get(
      `${API_URL}/api/user/search?term=${term}`,
      {
        headers: {
          Authorization: `Bearer ${userData?.token}`,
        },
      }
    );
    return data.filter((user: UserType) => user._id !== userData?._id);
  } catch {
    console.error("Error while search");
    return [];
  }
};

export const createRoom = async ({
  receiverId,
  senderData,
}: {
  receiverId: string;
  senderData: localStorageValueType;
}): Promise<RoomType | null> => {
  try {
    const { data } = await axios.post(
      `${API_URL}/api/rooms/`,
      { senderId: senderData?._id, receiverId },
      {
        headers: {
          Authorization: `Bearer ${senderData?.token}`,
        },
      }
    );
    return data;
  } catch {
    console.error("Error while creating the room");
    return null;
  }
};

export const getMessagesList = async (roomId: string) => {
  const userData = localStorage.getItem("userData");
  try {
    const token = JSON.parse(userData as string).token;
    const { data } = await axios.get(`${API_URL}/api/messages/${roomId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  } catch (error: unknown) {
    console.error("Error while getting messages list");
    return [];
  }
};
