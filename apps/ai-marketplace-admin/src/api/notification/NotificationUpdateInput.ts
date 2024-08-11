import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type NotificationUpdateInput = {
  content?: string | null;
  isRead?: boolean | null;
  notificationType?: "Option1" | null;
  user?: UserWhereUniqueInput | null;
};
