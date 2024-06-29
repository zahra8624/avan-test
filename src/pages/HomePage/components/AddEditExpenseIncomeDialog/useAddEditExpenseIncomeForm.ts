import { useIncomeExpenseStore } from "@app/hooks/stores/useIncomeExpenseStore";
import { Category, IncomeExpense, IncomeExpenseType } from "@app/types";
import { fakeId } from "@app/utils";
import { yupResolver } from "@hookform/resolvers/yup";
import moment, { Moment } from "moment";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";

interface FormParams {
  date: Moment;
  amount: string;
  description?: string;
  category: Category;
}

const validationSchema: any = yup.object({
  amount: yup.string().required(),
  date: yup.object().required(),
  category: yup.object().required(),
});

const mapIncomeExpenseToForm = (val: IncomeExpense): FormParams => {
  return {
    amount: val.amount.toString(),
    date: moment(val.date),
    description: val.description,
    category: val.category,
  };
};

const mapFormToIncomeExpense = (
  val: FormParams
): Omit<IncomeExpense, "id" | "type"> => {
  return {
    amount: parseFloat(val.amount.replace(",", "")),
    category: val.category,
    description: val.description,
    date: val.date.toString(),
  };
};

export const useAddEditExpenseIncomeForm = (
  itemType: IncomeExpenseType,
  defaultValue?: IncomeExpense
) => {
  const formProps = useForm<FormParams>({
    resolver: yupResolver(validationSchema),
    defaultValues: { date: moment() },
  });
  const { reset, handleSubmit } = formProps;
  const isEditMode = !!defaultValue;
  const navigate = useNavigate();

  const addIncomeExpense = useIncomeExpenseStore((state) => state.addItem);
  const editIncomeExpense = useIncomeExpenseStore((state) => state.editItem);

  const onSubmit = handleSubmit((formData) => {
    const data = mapFormToIncomeExpense(formData);
    if (isEditMode) {
      editIncomeExpense(defaultValue.id, {
        ...data,
        id: defaultValue.id,
        type: defaultValue.type,
      });
    } else {
      addIncomeExpense({
        ...data,
        id: fakeId(),
        type: itemType,
      });
    }

    navigate(-1 as any, { replace: true });
  });

  useEffect(() => {
    setTimeout(() => {
      if (!!defaultValue) {
        reset(mapIncomeExpenseToForm(defaultValue));
      } else {
        reset({ date: moment() });
      }
    }, 300);
  }, [defaultValue]);

  return { onSubmit, formProps, isEditMode } as const;
};
