import { UserType } from "../types";

// eslint-disable-next-line import/prefer-default-export
export const getFilteredUserName = (users: Array<UserType>): string => {
  const currentUserId = localStorage.getItem("user_id");
  return users.filter((user) => user._id !== currentUserId)[0].username;
};
