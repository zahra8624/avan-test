import { Dialog } from "@app/components";
import { AddEditExpenseIncomeDialogProps } from "./AddEditExpenseIncomeDialog.type";
import { useForm } from "react-hook-form";
import { ControlledCurrencyInput } from "@app/components/molecules/ControlledCurrencyInput";

export const AddEditExpenseIncomeDialog = (
  props: AddEditExpenseIncomeDialogProps
) => {
  const { type } = props;
  const formProps = useForm<any>();
  const { control } = formProps;
  return (
    <Dialog flagQueryKey={type} title={`Add ${type}`}>
      <form className="flex flex-col space-y-2.5 py-1.5">
        <ControlledCurrencyInput
          name="expense"
          control={control}
          id="expense"
          label="Amount"
          fullWidth
        />
      </form>
    </Dialog>
  );
};
