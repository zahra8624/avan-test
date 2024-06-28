import { Dialog, IconButton } from "@app/components/atoms";
import { CategorySelectorProps } from "./CategorySelector.type";
import { MouseEventHandler, useMemo, useState } from "react";
import { CategoryList } from "../CategoryList";
import {
  EXPENSE_CATEGORIES,
  INCOME_CATEGORIES,
} from "@app/constants/CATEGORY_LIST";
import CloseIcon from "@mui/icons-material/Close";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import { Category } from "@app/types";


export const CategorySelector = (props: CategorySelectorProps) => {
  const { value, onChange, title, type } = props;
  const [showSelector, toggleSelector] = useState<boolean>(false);
  const list = useMemo(
    () => (type === "expense" ? EXPENSE_CATEGORIES : INCOME_CATEGORIES),
    [type]
  );

  const onClear: MouseEventHandler = (e) => {
    e.stopPropagation();
    onChange?.(undefined);
  };

  const onChangeInput = (c: Category) => {
    onChange?.(c);
    toggleSelector(false);
  };
  return (
    <>
      <TextField
        placeholder="Click to select category"
        value={value?.name || ""}
        label="For"
        onClick={() => toggleSelector(true)}
        InputProps={{
          endAdornment: !!value ? (
            <InputAdornment position="end">
              <IconButton onClick={onClear} tooltipText="">
                <CloseIcon />
              </IconButton>
            </InputAdornment>
          ) : undefined,
          startAdornment: !!value?.icon ? (
            <InputAdornment position="start">{value.icon}</InputAdornment>
          ) : undefined,
        }}
      />
      <Dialog
        open={showSelector}
        onClose={() => toggleSelector(false)}
        title={title}
      >
        <div className="min-w-80">
          <CategoryList categoryList={list} onCategoryClick={onChangeInput} />
        </div>
      </Dialog>
    </>
  );
};
