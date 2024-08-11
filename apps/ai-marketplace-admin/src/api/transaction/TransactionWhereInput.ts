import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ToolWhereUniqueInput } from "../tool/ToolWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TransactionWhereInput = {
  amount?: FloatNullableFilter;
  id?: StringFilter;
  paymentMethod?: StringNullableFilter;
  tool?: ToolWhereUniqueInput;
  transactionDate?: DateTimeNullableFilter;
  user?: UserWhereUniqueInput;
};
