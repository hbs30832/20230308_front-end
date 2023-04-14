import { atom } from "recoil";

export const tokenState = atom({
  key: "tokenState",
  default: localStorage.getItem("access-token"),
});
