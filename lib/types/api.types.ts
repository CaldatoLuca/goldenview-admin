import { User } from "./schemas.types";

export interface LoginResponse {
  success: boolean;
  user: User;
}
