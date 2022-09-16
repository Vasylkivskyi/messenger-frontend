import { UserType } from "../types";

// eslint-disable-next-line import/prefer-default-export
export const getFilteredUserName = (
  users: Array<UserType>
): { name: string; email: string } => {
  const currentUserId = localStorage.getItem("user_id");
  const { name, email } = users.filter((user) => user._id !== currentUserId)[0];
  return { name, email };
};
