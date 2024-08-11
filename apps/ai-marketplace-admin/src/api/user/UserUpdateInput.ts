import { AdminUpdateManyWithoutUsersInput } from "./AdminUpdateManyWithoutUsersInput";
import { NotificationUpdateManyWithoutUsersInput } from "./NotificationUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { ProfileUpdateManyWithoutUsersInput } from "./ProfileUpdateManyWithoutUsersInput";
import { PromotionUpdateManyWithoutUsersInput } from "./PromotionUpdateManyWithoutUsersInput";
import { RatingUpdateManyWithoutUsersInput } from "./RatingUpdateManyWithoutUsersInput";
import { TransactionUpdateManyWithoutUsersInput } from "./TransactionUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  admins?: AdminUpdateManyWithoutUsersInput;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  notifications?: NotificationUpdateManyWithoutUsersInput;
  password?: string;
  phoneNumber?: string | null;
  profileImage?: InputJsonValue;
  profiles?: ProfileUpdateManyWithoutUsersInput;
  promotions?: PromotionUpdateManyWithoutUsersInput;
  ratings?: RatingUpdateManyWithoutUsersInput;
  roles?: InputJsonValue;
  transactions?: TransactionUpdateManyWithoutUsersInput;
  username?: string;
};
