import { SortOrder } from "../../util/SortOrder";

export type PromotionOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  paymentAmount?: SortOrder;
  promotionEnd?: SortOrder;
  promotionStart?: SortOrder;
  toolId?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
