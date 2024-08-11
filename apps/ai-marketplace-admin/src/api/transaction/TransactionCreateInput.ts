import { ToolWhereUniqueInput } from "../tool/ToolWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TransactionCreateInput = {
  amount?: number | null;
  paymentMethod?: string | null;
  tool?: ToolWhereUniqueInput | null;
  transactionDate?: Date | null;
  user?: UserWhereUniqueInput | null;
};
