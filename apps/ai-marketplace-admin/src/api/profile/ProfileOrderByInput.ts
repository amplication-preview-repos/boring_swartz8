import { SortOrder } from "../../util/SortOrder";

export type ProfileOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  upcomingRenewals?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
