import { Tool } from "../tool/Tool";
import { User } from "../user/User";

export type Promotion = {
  createdAt: Date;
  id: string;
  paymentAmount: number | null;
  promotionEnd: Date | null;
  promotionStart: Date | null;
  tool?: Tool | null;
  updatedAt: Date;
  user?: User | null;
};
