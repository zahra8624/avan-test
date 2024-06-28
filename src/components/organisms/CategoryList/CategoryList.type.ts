import { Category } from "@app/types";

export interface CategoryListProps {
  categoryList: Category[];
  onCategoryClick?: (category: Category, layer: number) => void;
}
