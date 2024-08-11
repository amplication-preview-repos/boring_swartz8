import { JsonValue } from "type-fest";
import { Promotion } from "../promotion/Promotion";
import { Rating } from "../rating/Rating";
import { Transaction } from "../transaction/Transaction";

export type Tool = {
  authorizationDetails: string | null;
  category?: "Option1" | null;
  createdAt: Date;
  description: string | null;
  features: string | null;
  id: string;
  monthlyPaymentDetails: number | null;
  name: string | null;
  pictures: JsonValue;
  promotions?: Array<Promotion>;
  ratings?: Array<Rating>;
  transactions?: Array<Transaction>;
  updatedAt: Date;
  yearlyPaymentDetails: number | null;
};
