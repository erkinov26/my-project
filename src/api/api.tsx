import axios from "axios";
import { SignUpT } from "../types/type";

const instance = axios.create({
    baseURL:"",

})

export const signUp=(body:SignUpT) =>{
    return instance.post("singup", body)
}

export const getAllData = () =>{
    return instance.get("")
}
