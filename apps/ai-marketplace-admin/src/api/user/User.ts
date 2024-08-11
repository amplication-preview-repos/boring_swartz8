import { Admin } from "../admin/Admin";
import { Notification } from "../notification/Notification";
import { JsonValue } from "type-fest";
import { Profile } from "../profile/Profile";
import { Promotion } from "../promotion/Promotion";
import { Rating } from "../rating/Rating";
import { Transaction } from "../transaction/Transaction";

export type User = {
  admins?: Array<Admin>;
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  notifications?: Array<Notification>;
  phoneNumber: string | null;
  profileImage: JsonValue;
  profiles?: Array<Profile>;
  promotions?: Array<Promotion>;
  ratings?: Array<Rating>;
  roles: JsonValue;
  transactions?: Array<Transaction>;
  updatedAt: Date;
  username: string;
};
