import { Category } from "./category";

export interface Budget {
  category: Category;
  amount: number;
  id: string;
}
