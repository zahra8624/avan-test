import { Category } from "@app/types";

export interface CategorySelectorProps {
  value?: Category;
  onChange?: (newCategory?: Category) => void;
  title?: string;
  type: "income" | "expense";
}
