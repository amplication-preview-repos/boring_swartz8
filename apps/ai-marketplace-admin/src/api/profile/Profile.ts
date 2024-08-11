import { User } from "../user/User";

export type Profile = {
  createdAt: Date;
  id: string;
  upcomingRenewals: Date | null;
  updatedAt: Date;
  user?: User | null;
};
