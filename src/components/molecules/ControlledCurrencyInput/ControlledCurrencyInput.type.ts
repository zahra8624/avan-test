import { CurrencyInputProps } from "@app/components/atoms";

export interface ControlledCurrencyInputProps
  extends Omit<CurrencyInputProps, "name"> {
  control: any;
  name: string;
}
