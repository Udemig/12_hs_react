//! Auth Types

interface LoginValues {
  email: string;
  password: string;
}

interface RegisterValues {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

interface User {
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  _id: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

interface AuthResponse {
  message: string;
  user: User;
}
interface RefreshResponse {
  accessToken: string;
}
interface LogoutResponse {
  message: string;
}

interface GetMeResponse {
  user: User;
}

//! Product Types

interface Shoe {
  _id: string;
  name: string;
  picture: string[];
  description: string;
  isNew: boolean;
  discount: number;
  size: string;
  color: string;
  gender: string;
  price: number;
  __v: number;
  updatedAt: string;
}

interface ShoeFormValues {
  name: string;
  price: string;
  discount: string;
  color: string;
  size: string;
  description: string;
  isNew: boolean;
  gender: string;
}

export type {
  LoginValues,
  RegisterValues,
  User,
  AuthResponse,
  RefreshResponse,
  LogoutResponse,
  GetMeResponse,
  Shoe,
  ShoeFormValues,
};
