import { useMemo } from "react";
import { CategoryItemProps } from "./CategoryItem.type";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";

export const CategoryItem = (props: CategoryItemProps) => {
  const { category, remainCategories, onCategoryClick, layer } = props;
  const subCategories = useMemo(() => {
    return remainCategories.filter((c) => c.parent === category.id);
  }, [remainCategories, category.id]);
  const remainedCats = useMemo(() => {
    return remainCategories.filter((c) => c.parent !== category.id);
  }, [remainCategories, category.id]);

  if (subCategories.length <= 0) {
    return (
      <div style={{ paddingLeft: `${layer * 0.5}rem` }}>
        <Button
          onClick={() => onCategoryClick?.(category, layer)}
          fullWidth
          aria-label={`select-${category.name}-category`}
          color="inherit"
        >
          <div className="flex justify-start w-full items-center space-x-2">
            {category.icon ? category.icon : null}
            <span>{category.name}</span>
          </div>
        </Button>
      </div>
    );
  }

  return (
    <Accordion>
      <AccordionSummary
        aria-controls={category.name}
        id={`${category.name}-header`}
        expandIcon={<ExpandMoreIcon />}
      >
        {category.icon ? category.icon : null}
        <p>{category.name}</p>
      </AccordionSummary>
      <AccordionDetails>
        <div style={{ paddingLeft: `${layer * 0.5}rem` }}>
          {subCategories.map((scat) => {
            return (
              <CategoryItem
                category={scat}
                remainCategories={remainedCats}
                layer={layer + 1}
                onCategoryClick={onCategoryClick}
                key={scat.id}
              />
            );
          })}
        </div>
      </AccordionDetails>
    </Accordion>
  );
};
