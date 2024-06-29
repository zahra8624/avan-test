import {
  FilterObjectType,
  useIncomeExpenseFilterStore,
} from "@app/hooks/stores";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

interface FormData extends Omit<FilterObjectType, "amount"> {
  amount?: string;
}

export const useFilterExpenseIncomeForm = () => {
  const formProps = useForm<FormData>({
    defaultValues: {},
  });
  const { handleSubmit, reset } = formProps;
  const navigate = useNavigate();

  const setFilter = useIncomeExpenseFilterStore((state) => state.setFilter);

  const onSubmit = handleSubmit((formData) => {
    console.log(formData);
    setFilter({
      ...formData,
      amount: formData.amount
        ? parseFloat(formData.amount.replace(",", ""))
        : undefined,
    });
    navigate(-1 as any, { replace: true });
  });

  const onClear = () => {
    reset({});
    setFilter(undefined);
    navigate(-1 as any, { replace: true });
  };

  return { onSubmit, formProps, onClear } as const;
};
