import axios from "axios";
import { SignUpT } from "../types/type";

const instance = axios.create({
  baseURL: "https://no23.lavina.tech",
  headers: {
    "Content-Type": "application/json",
  },
});

export const signUp = (body: SignUpT) => {
  return instance.post("signup", body);
};

export const getAllData = () => {
  return instance.get("");
};
