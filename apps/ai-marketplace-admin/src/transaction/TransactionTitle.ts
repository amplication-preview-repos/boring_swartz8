import { Transaction as TTransaction } from "../api/transaction/Transaction";

export const TRANSACTION_TITLE_FIELD = "paymentMethod";

export const TransactionTitle = (record: TTransaction): string => {
  return record.paymentMethod?.toString() || String(record.id);
};
