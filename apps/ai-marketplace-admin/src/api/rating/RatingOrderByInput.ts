import { SortOrder } from "../../util/SortOrder";

export type RatingOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  ratingValue?: SortOrder;
  review?: SortOrder;
  toolId?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
