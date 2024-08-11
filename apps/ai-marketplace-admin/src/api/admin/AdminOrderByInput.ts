import { SortOrder } from "../../util/SortOrder";

export type AdminOrderByInput = {
  adminRole?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
