import { InputJsonValue } from "../../types";
import { PromotionCreateNestedManyWithoutToolsInput } from "./PromotionCreateNestedManyWithoutToolsInput";
import { RatingCreateNestedManyWithoutToolsInput } from "./RatingCreateNestedManyWithoutToolsInput";
import { TransactionCreateNestedManyWithoutToolsInput } from "./TransactionCreateNestedManyWithoutToolsInput";

export type ToolCreateInput = {
  authorizationDetails?: string | null;
  category?: "Option1" | null;
  description?: string | null;
  features?: string | null;
  monthlyPaymentDetails?: number | null;
  name?: string | null;
  pictures?: InputJsonValue;
  promotions?: PromotionCreateNestedManyWithoutToolsInput;
  ratings?: RatingCreateNestedManyWithoutToolsInput;
  transactions?: TransactionCreateNestedManyWithoutToolsInput;
  yearlyPaymentDetails?: number | null;
};
