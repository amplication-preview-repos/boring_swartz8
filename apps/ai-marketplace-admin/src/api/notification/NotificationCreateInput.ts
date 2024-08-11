import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type NotificationCreateInput = {
  content?: string | null;
  isRead?: boolean | null;
  notificationType?: "Option1" | null;
  user?: UserWhereUniqueInput | null;
};
