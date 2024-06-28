import { useMemo } from "react";
import { CategoryItem } from "../CategoryItem";
import { CategoryListProps } from "./CategoryList.type";

export const CategoryList = (props: CategoryListProps) => {
  const { categoryList, onCategoryClick } = props;

  const rootCategories = useMemo(() => {
    return categoryList.filter((c) => c.parent === null);
  }, [categoryList]);

  return (
    <section>
      {rootCategories.map((cat) => {
        return (
          <CategoryItem
            category={cat}
            remainCategories={categoryList.filter((c) => c.parent !== null)}
            layer={0}
            onCategoryClick={onCategoryClick}
            key={cat.id}
          />
        );
      })}
    </section>
  );
};
