import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { PromotionListRelationFilter } from "../promotion/PromotionListRelationFilter";
import { RatingListRelationFilter } from "../rating/RatingListRelationFilter";
import { TransactionListRelationFilter } from "../transaction/TransactionListRelationFilter";

export type ToolWhereInput = {
  authorizationDetails?: StringNullableFilter;
  category?: "Option1";
  description?: StringNullableFilter;
  features?: StringNullableFilter;
  id?: StringFilter;
  monthlyPaymentDetails?: IntNullableFilter;
  name?: StringNullableFilter;
  pictures?: JsonFilter;
  promotions?: PromotionListRelationFilter;
  ratings?: RatingListRelationFilter;
  transactions?: TransactionListRelationFilter;
  yearlyPaymentDetails?: IntNullableFilter;
};
