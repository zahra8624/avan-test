import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { UseIncomeExpenseStore } from "./useIncomeExpenseStore.type";

export const useIncomeExpenseStore = create(
  persist<UseIncomeExpenseStore>(
    (set) => ({
      list: [],
      setList: (list) => set((state) => ({ ...state, list })),
      addItem: (newItem) => {
        set((state) => ({ ...state, list: [newItem, ...state.list] }));
      },
      editItem: (id, newItem) => {
        set((state) => ({
          ...state,
          list: state.list.map((l) => {
            if (l.id === id) {
              return newItem;
            }
            return l;
          }),
        }));
      },
      removeItem: (id) =>
        set((state) => ({
          ...state,
          list: state.list.filter((l) => l.id !== id),
        })),
    }),
    {
      name: "@avan-test:income-expense",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
