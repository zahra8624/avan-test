import { Budget } from "@app/types";

export interface UseBudgetStore {
  list: Budget[];
  setList: (list: Budget[]) => void;
  addItem: (newItem: Budget) => void;
  editItem: (id: string, newItem: Budget) => void;
  removeItem: (id: string) => void;
}
