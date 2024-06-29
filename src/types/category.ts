import { ReactNode } from "react";
import { IncomeExpenseType } from "./income-expense";

export interface Category {
  id: string;
  parent: string | null;
  name: string;
  icon?: ReactNode;
  type: IncomeExpenseType;
}
