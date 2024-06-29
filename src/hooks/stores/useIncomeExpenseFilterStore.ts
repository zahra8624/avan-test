import { create } from "zustand";
import { UseIncomeExpenseFilterStore } from "./useIncomeExpenseFilterStore.type";

export const useIncomeExpenseFilterStore = create<UseIncomeExpenseFilterStore>(
  (set) => ({
    filters: undefined,
    setFilter: (f) => set((state) => ({ ...state, filters: f })),
  })
);
