import { Controller } from "react-hook-form";
import { ControlledCurrencyInputProps } from "./ControlledCurrencyInput.type";
import { CurrencyInput } from "@app/components/atoms";

export const ControlledCurrencyInput = (
  props: ControlledCurrencyInputProps
) => {
  const { name, control, ...rest } = props;
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => <CurrencyInput {...rest} {...field} />}
    />
  );
};
