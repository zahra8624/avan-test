import { Controller } from "react-hook-form";
import { CategorySelectorProps } from "./CategorySelector.type";
import { CategorySelector } from "./CategorySelector";

export const ControlledCategorySelect = (
  props: Omit<CategorySelectorProps, "value" | "onChange"> & {
    name: string;
    control: any;
  }
) => {
  const { name, control, ...rest } = props;
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <CategorySelector
          {...rest}
          value={field.value}
          onChange={field.onChange}
        />
      )}
    />
  );
};
