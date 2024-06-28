import { Controller } from "react-hook-form";
import { ControlledTextFieldProps } from "./ControlledTextField.type";
import TextField from "@mui/material/TextField";

export const ControlledTextField = (props: ControlledTextFieldProps) => {
  const { name, control, ...rest } = props;
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => <TextField {...rest} {...field} />}
    />
  );
};
