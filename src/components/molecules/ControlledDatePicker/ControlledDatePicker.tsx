import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { ControlledDatePickerProps } from "./ControlledDatePicker.type";
import { Controller } from "react-hook-form";

export const ControlledDatePicker = (props: ControlledDatePickerProps) => {
  const { name, control, label } = props;
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <DatePicker
          label={label}
          value={field.value}
          onChange={field.onChange}
        />
      )}
    />
  );
};
