import { SortOrder } from "../../util/SortOrder";

export type TransactionOrderByInput = {
  amount?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  paymentMethod?: SortOrder;
  toolId?: SortOrder;
  transactionDate?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
