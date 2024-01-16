import axios from "axios";
import {
  LoginResponse,
  LoginSchema,
  RegisterResponse,
} from "../../interfaces/userInterfaces";

export const login = async ({
  email,
  password,
}: LoginSchema): Promise<LoginResponse> => {
  const response = await axios.post(
    `${import.meta.env.VITE_API_URL}/auth/login`,
    {
      email,
      password,
    }
  );

  return response.data;
};

export const register = async ({
  email,
  password,
}: LoginSchema): Promise<RegisterResponse> => {
  const response = await axios.post(
    `${import.meta.env.VITE_API_URL}/auth/register`,
    {
      email,
      password,
    }
  );

  return response.data;
};
