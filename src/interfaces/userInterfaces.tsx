export interface User {
  id: number;
  email: string;
  role: string;
}

export interface LoginSchema {
  email: string;
  password: string;
}

export interface RegisterSchema {
  email: string;
  password: string;
  confirmPassword: string;
}

export interface UserResponse {
  id: number;
  email: string;
  role: string;
}

export interface LoginResponse {
  message: string;
  user: UserResponse;
}

export interface RegisterResponse {
  message: string;
  userId: number;
}
