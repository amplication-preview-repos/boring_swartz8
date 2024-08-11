import { AdminListRelationFilter } from "../admin/AdminListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { NotificationListRelationFilter } from "../notification/NotificationListRelationFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { ProfileListRelationFilter } from "../profile/ProfileListRelationFilter";
import { PromotionListRelationFilter } from "../promotion/PromotionListRelationFilter";
import { RatingListRelationFilter } from "../rating/RatingListRelationFilter";
import { TransactionListRelationFilter } from "../transaction/TransactionListRelationFilter";

export type UserWhereInput = {
  admins?: AdminListRelationFilter;
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  notifications?: NotificationListRelationFilter;
  phoneNumber?: StringNullableFilter;
  profileImage?: JsonFilter;
  profiles?: ProfileListRelationFilter;
  promotions?: PromotionListRelationFilter;
  ratings?: RatingListRelationFilter;
  transactions?: TransactionListRelationFilter;
  username?: StringFilter;
};
