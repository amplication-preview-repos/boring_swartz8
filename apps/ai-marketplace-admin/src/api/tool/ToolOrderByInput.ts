import { SortOrder } from "../../util/SortOrder";

export type ToolOrderByInput = {
  authorizationDetails?: SortOrder;
  category?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  features?: SortOrder;
  id?: SortOrder;
  monthlyPaymentDetails?: SortOrder;
  name?: SortOrder;
  pictures?: SortOrder;
  updatedAt?: SortOrder;
  yearlyPaymentDetails?: SortOrder;
};
