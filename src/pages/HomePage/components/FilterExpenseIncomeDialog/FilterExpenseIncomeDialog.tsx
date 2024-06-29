import {
  ControlledCategorySelect,
  ControlledCurrencyInput,
  ControlledDatePicker,
  ControlledTextField,
  Dialog,
} from "@app/components";
import Button from "@mui/material/Button";
import { useFilterExpenseIncomeForm } from "./useFilterExpenseIncomeForm";

export const FilterExpenseIncomeDialog = () => {
  const { formProps, onSubmit, onClear } = useFilterExpenseIncomeForm();
  const { control } = formProps;
  return (
    <Dialog
      dialogActions={
        <div className="w-full flex items-center space-x-1">
          <Button onClick={onClear} fullWidth variant="outlined" color="error">
            {"Clear"}
          </Button>
          <Button onClick={onSubmit} fullWidth variant="contained">
            {"Confirm"}
          </Button>
        </div>
      }
      flagQueryKey="filter"
      title={`Filter Income/Expense`}
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
          type="both"
          title={`Select category`}
        />
        <ControlledDatePicker name="fromDate" control={control} label="From" />
        <ControlledDatePicker name="toDate" control={control} label="To" />
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
