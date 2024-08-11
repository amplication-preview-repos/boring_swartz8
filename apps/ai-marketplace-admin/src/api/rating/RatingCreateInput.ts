import { ToolWhereUniqueInput } from "../tool/ToolWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type RatingCreateInput = {
  ratingValue?: number | null;
  review?: string | null;
  tool?: ToolWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};
