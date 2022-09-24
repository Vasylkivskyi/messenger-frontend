import moment from "moment";
import { UserType } from "../types";

export const getFilteredUserName = (
  users: Array<UserType>
): { name: string; email: string } => {
  const userData = localStorage.getItem("userData");
  try {
    const currentUserId = JSON.parse(userData as string)._id;
    const { name, email } = users.filter(
      (user) => user._id !== currentUserId
    )[0];
    return { name, email };
  } catch {
    return { name: "", email: "" };
  }
};

export const formatDate = (date: string): string => {
  if (moment(date) < moment().subtract(1, "hour")) {
    return moment(date).calendar();
  }
  return moment(date).fromNow();
};
