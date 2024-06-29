import { useIncomeExpenseFilterStore } from "@app/hooks/stores";
import { useIncomeExpenseStore } from "@app/hooks/stores/useIncomeExpenseStore";
import moment from "moment";
import { useMemo } from "react";

export const useExpenseIncomeListWithFilters = () => {
  const expenseIncomeList = useIncomeExpenseStore((state) => state.list);
  const filters = useIncomeExpenseFilterStore((state) => state.filters);

  const list = useMemo(() => {
    if (!filters) return expenseIncomeList;
    return expenseIncomeList.filter((ei) => {
      let shouldShow = true;
      if (filters.amount) {
        shouldShow = ei.amount === filters.amount;
      }
      if (filters.categoryId) {
        shouldShow = ei.category.id === filters.categoryId;
      }
      if (filters.description) {
        shouldShow = ei.description === filters.description;
      }
      if (filters.fromDate) {
        shouldShow = moment(ei.date) > filters.fromDate;
      }
      if (filters.toDate) {
        shouldShow = moment(ei.date) < filters.toDate;
      }

      return shouldShow;
    });
  }, [filters, expenseIncomeList]);

  return list;
};
