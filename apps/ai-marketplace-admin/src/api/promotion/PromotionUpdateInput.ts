import { ToolWhereUniqueInput } from "../tool/ToolWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PromotionUpdateInput = {
  paymentAmount?: number | null;
  promotionEnd?: Date | null;
  promotionStart?: Date | null;
  tool?: ToolWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};
