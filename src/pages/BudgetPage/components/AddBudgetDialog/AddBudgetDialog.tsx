import {
  ControlledCategorySelect,
  ControlledTextField,
  Dialog,
} from "@app/components";
import { useBudgetStore } from "@app/hooks/stores/useBudgetStore";
import { fakeId } from "@app/utils";
import Button from "@mui/material/Button";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export const AddBudgetDialog = () => {
  const { control, handleSubmit } = useForm<any>();
  const addItem = useBudgetStore((state) => state.addItem);
  const navigate = useNavigate();
  const onSubmit = handleSubmit((data) => {
    if (!data.amount || !data.category) return;
    addItem({
      amount: parseFloat(data.amount.replace(",", "")),
      category: data.category,
      id: fakeId(),
    });
    navigate(-1 as any, { replace: true });
  });
  return (
    <Dialog
      dialogActions={
        <div className="w-2/3 mx-auto">
          <Button onClick={onSubmit} fullWidth variant="contained">
            Add
          </Button>
        </div>
      }
      flagQueryKey="budget"
      title="Add Budget"
    >
      <form onSubmit={onSubmit} className="flex flex-col space-y-2.5 pt-2.5">
        <ControlledCategorySelect
          type="both"
          control={control}
          name="category"
        />
        <ControlledTextField control={control} name="amount" label="amount" />
      </form>
    </Dialog>
  );
};
