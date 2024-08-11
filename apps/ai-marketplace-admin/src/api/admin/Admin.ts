import { User } from "../user/User";

export type Admin = {
  adminRole: string | null;
  createdAt: Date;
  id: string;
  updatedAt: Date;
  user?: User | null;
};
