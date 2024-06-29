import { useIncomeExpenseStore } from "@app/hooks/stores/useIncomeExpenseStore";
import { ExpenseIncomeListProps } from "./ExpenseIncomeList.type";
import cls from "classnames";
import { getIcon } from "@app/utils";
import { Tooltip } from "@mui/material";
import { NumericFormat } from "react-number-format";
import { IconButton } from "@app/components";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";
import { IncomeExpense } from "@app/types";

export const ExpenseIncomeList = (props: ExpenseIncomeListProps) => {
  const { onEdit } = props;
  const navigate = useNavigate();
  const expenseIncomeList = useIncomeExpenseStore((state) => state.list);
  const removeItemExpenseIncome = useIncomeExpenseStore(
    (state) => state.removeItem
  );

  const onDeleteClick = (id: string) => {
    if (confirm("Are you sure?") == true) {
      removeItemExpenseIncome(id);
    }
  };

  const onEditClick = (e: IncomeExpense) => {
    onEdit(e);
    navigate(`?${e.type}=1`);
  };

  return (
    <section className="grid grid-cols-1 mt-2.5 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 px-5 gap-2">
      {expenseIncomeList.map((ei) => {
        const { category, id, amount, description } = ei;
        const fixedIcon = getIcon(category.id);
        return (
          <article
            key={id}
            className={cls(
              "pt-0.5 pr-0.5 pb-0.5 rounded-lg flex items-center w-full",
              {
                ["bg-red-500"]: ei.type === "expense",
                ["bg-green-500"]: ei.type === "income",
              }
            )}
          >
            <div className="text-white w-10 min-w-10 flex justify-center">
              {fixedIcon ? fixedIcon : ""}
            </div>
            <div className="bg-white flex-1 rounded-md px-2.5 pb-5 pt-1 w-full max-w-full overflow-hidden flex items-start h-full">
              <div className="w-full overflow-hidden">
                <h4 className="text-xl">{category.name}</h4>
                <strong>
                  <NumericFormat value={amount} thousandSeparator />
                </strong>
                <div className="w-full overflow-hidden">
                  {description && (
                    <Tooltip arrow title={description}>
                      <p className="w-full overflow-hidden whitespace-nowrap text-ellipsis">
                        {description}
                      </p>
                    </Tooltip>
                  )}
                </div>
              </div>
              <div className="flex flex-col items-center justify-center h-full ml-5">
                <IconButton onClick={() => onEditClick(ei)} tooltipText="">
                  <EditIcon />
                </IconButton>
                <IconButton onClick={() => onDeleteClick(id)} tooltipText="">
                  <DeleteIcon />
                </IconButton>
              </div>
            </div>
          </article>
        );
      })}
    </section>
  );
};
