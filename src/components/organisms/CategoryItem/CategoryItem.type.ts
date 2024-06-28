import { Category } from "@app/types";

export interface CategoryItemProps {
  category: Category;
  layer: number;
  remainCategories: Category[];
  onCategoryClick?: (category: Category, layer: number) => void;
}
