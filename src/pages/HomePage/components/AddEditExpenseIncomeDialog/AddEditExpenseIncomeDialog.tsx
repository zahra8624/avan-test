import {
  ControlledCategorySelect,
  ControlledCurrencyInput,
  ControlledDatePicker,
  ControlledTextField,
  Dialog,
} from "@app/components";
import { AddEditExpenseIncomeDialogProps } from "./AddEditExpenseIncomeDialog.type";
import Button from "@mui/material/Button";
import { useAddEditExpenseIncomeForm } from "./useAddEditExpenseIncomeForm";
import moment from "moment";

export const AddEditExpenseIncomeDialog = (
  props: AddEditExpenseIncomeDialogProps
) => {
  const { type } = props;
  const { formProps, onSubmit } = useAddEditExpenseIncomeForm(type);
  const { reset, control } = formProps;
  return (
    <Dialog
      dialogActions={
        <div className="w-2/3 mx-auto">
          <Button onClick={onSubmit} fullWidth variant="contained">
            Add
          </Button>
        </div>
      }
      flagQueryKey={type}
      title={`Add ${type}`}
      onClose={() =>
        reset({
          date: moment(),
        })
      }
    >
      <form onSubmit={onSubmit} className="flex flex-col space-y-2.5 py-1.5">
        <ControlledCurrencyInput
          name="amount"
          control={control}
          id="amount"
          label="Amount"
          fullWidth
        />
        <ControlledCategorySelect
          control={control}
          name="category"
          type={type}
          title={`Select ${type} category`}
        />
        <ControlledDatePicker name="date" control={control} label="Date" />
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
