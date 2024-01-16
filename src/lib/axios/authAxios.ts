import axios from "axios";
import {
  LoginResponse,
  LoginSchema,
  RegisterResponse,
} from "../../interfaces/userInterfaces";

export const Login = async ({
  email,
  password,
}: LoginSchema): Promise<LoginResponse> => {
  const response = await axios.post(`${import.meta.env.API_URL}/login`, {
    email,
    password,
  });

  return response.data;
};

export const Register = async ({
  email,
  password,
}: LoginSchema): Promise<RegisterResponse> => {
  const response = await axios.post(`${import.meta.env.API_URL}/register`, {
    email,
    password,
  });

  return response.data;
};
