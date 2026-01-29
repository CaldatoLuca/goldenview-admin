import { User } from "./schemas.types";

export type ApiError = {
  message: string;
  status: number;
};

export type ApiResponse = {
  success: boolean;
  error?: ApiError;
  user?: User;
};
