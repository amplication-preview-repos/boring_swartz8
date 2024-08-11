import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ToolWhereUniqueInput } from "../tool/ToolWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type RatingWhereInput = {
  id?: StringFilter;
  ratingValue?: IntNullableFilter;
  review?: StringNullableFilter;
  tool?: ToolWhereUniqueInput;
  user?: UserWhereUniqueInput;
};
