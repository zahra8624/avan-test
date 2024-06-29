import { getIcon } from "@app/utils";
import { BudgetItemProps } from "./BudgetItem.type";
import { useIncomeExpenseStore } from "@app/hooks/stores/useIncomeExpenseStore";
import cls from "classnames";
import { useMemo } from "react";

export const BudgetItem = (props: BudgetItemProps) => {
  const { budget } = props;
  const { category, amount } = budget;
  const relatedIncomeExpensesAmount = useIncomeExpenseStore((state) => {
    return state.list
      .filter((cat) => cat.category.id === category.id)
      .reduce((sum, item) => {
        return sum + item.amount;
      }, 0);
  });

  const percent = (() => {
    return relatedIncomeExpensesAmount / amount;
  })();

  const fixedIcon = useMemo(() => getIcon(category.id), [category.id]);

  return (
    <article
      className={cls(
        "pt-0.5 pr-0.5 pb-0.5 rounded-lg flex items-center w-full",
        {
          ["bg-red-500"]: category.type === "expense",
          ["bg-green-500"]: category.type === "income",
        }
      )}
    >
      <div className="text-white w-10 min-w-10 flex items-center justify-center">
        {fixedIcon ? fixedIcon : ""}
      </div>
      <div className="w-full bg-white px-2.5 pt-1 pb-1 rounded-lg h-full">
        <h2>
          <strong>{category.name}</strong>
        </h2>
        <p>budget amount: {amount}</p>

        <p>diff: {amount - relatedIncomeExpensesAmount}</p>
        <div className="w-full bg-gray-500 h-5 mt-5 rounded-lg overflow-hidden">
          <div
            style={{ width: `${percent * 100}%` }}
            className={cls("h-full", {
              ["bg-red-500"]: category.type === "expense",
              ["bg-green-500"]: category.type === "income",
            })}
          />
        </div>
      </div>
    </article>
  );
};
