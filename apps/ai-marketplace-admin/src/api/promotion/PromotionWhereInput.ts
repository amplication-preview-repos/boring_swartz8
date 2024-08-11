import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { ToolWhereUniqueInput } from "../tool/ToolWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PromotionWhereInput = {
  id?: StringFilter;
  paymentAmount?: FloatNullableFilter;
  promotionEnd?: DateTimeNullableFilter;
  promotionStart?: DateTimeNullableFilter;
  tool?: ToolWhereUniqueInput;
  user?: UserWhereUniqueInput;
};
