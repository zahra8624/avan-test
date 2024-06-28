import { TextFieldProps } from "@mui/material";
import { NumericFormatProps } from "react-number-format";

export type CurrencyInputProps = Pick<
  NumericFormatProps,
  "id" | "name" | "onChange" | "value"
> &
  Pick<
    TextFieldProps,
    "label" | "error" | "placeholder" | "variant" | "color" | "fullWidth"
  >;
