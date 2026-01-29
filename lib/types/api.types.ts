import { User } from "./schemas.types";

export type ApiError = {
  message: string;
  status: number;
};

export type LoginResponse = {
  success: boolean;
  error?: ApiError;
  user: User;
};
