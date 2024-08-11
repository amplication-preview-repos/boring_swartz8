import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ProfileUpdateInput = {
  upcomingRenewals?: Date | null;
  user?: UserWhereUniqueInput | null;
};
