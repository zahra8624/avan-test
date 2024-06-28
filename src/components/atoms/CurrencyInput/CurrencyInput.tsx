import { NumericFormat } from "react-number-format";
import TextField from "@mui/material/TextField";
import { CurrencyInputProps } from "./CurrencyInput.type";

export const CurrencyInput = (props: CurrencyInputProps) => {
  return <NumericFormat customInput={TextField} thousandSeparator {...props} />;
};
