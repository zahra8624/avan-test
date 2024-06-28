import {
  ControlledCategorySelect,
  ControlledTextField,
  Dialog,
} from "@app/components";
import { AddEditExpenseIncomeDialogProps } from "./AddEditExpenseIncomeDialog.type";
import { useForm } from "react-hook-form";
import { ControlledCurrencyInput } from "@app/components/molecules/ControlledCurrencyInput";

export const AddEditExpenseIncomeDialog = (
  props: AddEditExpenseIncomeDialogProps
) => {
  const { type } = props;
  const formProps = useForm<any>();
  const { control, reset } = formProps;
  return (
    <Dialog flagQueryKey={type} title={`Add ${type}`} onClose={() => reset({})}>
      <form className="flex flex-col space-y-2.5 py-1.5">
        <ControlledCurrencyInput
          name="expense"
          control={control}
          id="expense"
          label="Amount"
          fullWidth
        />
        <ControlledCategorySelect
          control={control}
          name="category"
          type={type}
          title={`Select ${type} category`}
        />
        <ControlledTextField
          name="description"
          control={control}
          label="Description"
          multiline
          rows={2}
        />
      </form>
    </Dialog>
  );
};
