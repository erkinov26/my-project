import axios from "axios";
import Cookies from "js-cookie";
import { SignUpT, getAllT } from "../types/type";

const instance = axios.create({
  baseURL: "https://no23.lavina.tech",
  headers: {
    "Content-Type": "application/json",
  },
});

export const signUp = (body: SignUpT) => {
  return instance.post("signup", body);
};

export const getAllData = (args: getAllT) => {
  const params = new URLSearchParams();
  if (args.search) params.append("title", args.search);
  const headers: Record<string, string> = {};
  headers["Key"] = Cookies.get("key") || "";
  headers["Sign"] = "2892678138d8d793a28fc49055095d8b";
  return instance.get(`${args.url}${params.size ? `:${params}` : ""}`, {
    headers,
  }
);
};
