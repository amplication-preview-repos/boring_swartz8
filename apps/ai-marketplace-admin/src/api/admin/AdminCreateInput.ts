import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type AdminCreateInput = {
  adminRole?: string | null;
  user?: UserWhereUniqueInput | null;
};
