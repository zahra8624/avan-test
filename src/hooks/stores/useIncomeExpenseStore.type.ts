import { IncomeExpense } from "@app/types";

export interface UseIncomeExpenseStore {
  list: IncomeExpense[];
  setList: (list: IncomeExpense[]) => void;
  addItem: (newItem: IncomeExpense) => void;
  editItem: (id: string, newItem: IncomeExpense) => void;
  removeItem: (id: string) => void;
}
