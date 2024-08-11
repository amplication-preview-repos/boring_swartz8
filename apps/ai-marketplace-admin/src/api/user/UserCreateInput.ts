import { AdminCreateNestedManyWithoutUsersInput } from "./AdminCreateNestedManyWithoutUsersInput";
import { NotificationCreateNestedManyWithoutUsersInput } from "./NotificationCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { ProfileCreateNestedManyWithoutUsersInput } from "./ProfileCreateNestedManyWithoutUsersInput";
import { PromotionCreateNestedManyWithoutUsersInput } from "./PromotionCreateNestedManyWithoutUsersInput";
import { RatingCreateNestedManyWithoutUsersInput } from "./RatingCreateNestedManyWithoutUsersInput";
import { TransactionCreateNestedManyWithoutUsersInput } from "./TransactionCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  admins?: AdminCreateNestedManyWithoutUsersInput;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  notifications?: NotificationCreateNestedManyWithoutUsersInput;
  password: string;
  phoneNumber?: string | null;
  profileImage?: InputJsonValue;
  profiles?: ProfileCreateNestedManyWithoutUsersInput;
  promotions?: PromotionCreateNestedManyWithoutUsersInput;
  ratings?: RatingCreateNestedManyWithoutUsersInput;
  roles: InputJsonValue;
  transactions?: TransactionCreateNestedManyWithoutUsersInput;
  username: string;
};
