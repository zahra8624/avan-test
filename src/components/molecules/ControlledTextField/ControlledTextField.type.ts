import { TextFieldProps } from "@mui/material/TextField";

export interface ControlledTextFieldProps
  extends Pick<
    TextFieldProps,
    "label" | "id" | "placeholder" | "error" | "multiline" | "rows"
  > {
  control: any;
  name: string;
}
