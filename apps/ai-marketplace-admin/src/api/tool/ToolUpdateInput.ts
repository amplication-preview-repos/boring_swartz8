import { InputJsonValue } from "../../types";
import { PromotionUpdateManyWithoutToolsInput } from "./PromotionUpdateManyWithoutToolsInput";
import { RatingUpdateManyWithoutToolsInput } from "./RatingUpdateManyWithoutToolsInput";
import { TransactionUpdateManyWithoutToolsInput } from "./TransactionUpdateManyWithoutToolsInput";

export type ToolUpdateInput = {
  authorizationDetails?: string | null;
  category?: "Option1" | null;
  description?: string | null;
  features?: string | null;
  monthlyPaymentDetails?: number | null;
  name?: string | null;
  pictures?: InputJsonValue;
  promotions?: PromotionUpdateManyWithoutToolsInput;
  ratings?: RatingUpdateManyWithoutToolsInput;
  transactions?: TransactionUpdateManyWithoutToolsInput;
  yearlyPaymentDetails?: number | null;
};
