import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type AdminUpdateInput = {
  adminRole?: string | null;
  user?: UserWhereUniqueInput | null;
};
