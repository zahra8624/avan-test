import {
  EXPENSE_CATEGORIES,
  INCOME_CATEGORIES,
} from "@app/constants/CATEGORY_LIST";

export const getIcon = (name: string) => {
  return [...EXPENSE_CATEGORIES, ...INCOME_CATEGORIES].find(
    (f) => f.id === name
  )?.icon;
};
