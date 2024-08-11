import { Tool } from "../tool/Tool";
import { User } from "../user/User";

export type Rating = {
  createdAt: Date;
  id: string;
  ratingValue: number | null;
  review: string | null;
  tool?: Tool | null;
  updatedAt: Date;
  user?: User | null;
};
