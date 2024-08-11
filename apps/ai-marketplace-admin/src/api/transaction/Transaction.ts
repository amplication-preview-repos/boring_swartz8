import { Tool } from "../tool/Tool";
import { User } from "../user/User";

export type Transaction = {
  amount: number | null;
  createdAt: Date;
  id: string;
  paymentMethod: string | null;
  tool?: Tool | null;
  transactionDate: Date | null;
  updatedAt: Date;
  user?: User | null;
};
