import { UserType } from "./UserType";

export interface AuthTypes {
  name: string;
  email: string;
  password: string;
  token?: string
  user?: UserType
}
