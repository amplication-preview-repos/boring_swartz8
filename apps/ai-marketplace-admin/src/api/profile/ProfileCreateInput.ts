import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ProfileCreateInput = {
  upcomingRenewals?: Date | null;
  user?: UserWhereUniqueInput | null;
};
