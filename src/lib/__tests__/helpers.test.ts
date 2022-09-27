import { UserType } from "../../types";
import { getFilteredUserName } from "../helpers";

const users: UserType[] = [
  {
    _id: "632eb611f70e0f7823c55e65",
    name: "Pavlo",
    email: "pavlo@gmail.com",
    createdAt: "2022-09-24T07:47:29.070Z",
    updatedAt: "2022-09-24T07:47:29.070Z",
  },
  {
    _id: "632eb71883936e59ad0b8813",
    name: "Aliona",
    email: "aliona@gmail.com",
    createdAt: "2022-09-24T07:51:52.264Z",
    updatedAt: "2022-09-24T07:51:52.264Z",
  },
];

describe("helpers", () => {
  it("getFilteredUserName", () => {
    window.localStorage.setItem("userData", JSON.stringify(users[0]));
    expect(getFilteredUserName(users)).toEqual({
      name: users[1].name,
      email: users[1].email,
    });
    window.localStorage.setItem("userData", "");
  });
});
