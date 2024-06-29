import { IncomeExpense, IncomeExpenseType } from "@app/types";

export interface AddEditExpenseIncomeDialogProps {
  type: IncomeExpenseType;
  itemToEdit?: IncomeExpense;
  setItemToEdit: (i?: IncomeExpense) => void;
}
