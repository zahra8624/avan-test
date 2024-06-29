import { Category } from "./category";

export type IncomeExpenseType = "income" | "expense";

export interface IncomeExpense {
  category: Category;
  amount: number;
  date: string;
  description?: string;
  type: IncomeExpenseType;
  id: string;
}
