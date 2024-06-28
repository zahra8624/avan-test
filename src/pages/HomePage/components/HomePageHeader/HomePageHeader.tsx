import AddIcon from "@mui/icons-material/PersonAdd";
import RemoveIcon from "@mui/icons-material/PersonRemove";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import qs from "qs";

import { AddEditExpenseIncomeDialog } from "../AddEditExpenseIncomeDialog/AddEditExpenseIncomeDialog";
import { IconButton } from "@app/components";

export const HomePageHeader = () => {
  const { search } = useLocation();
  const navigate = useNavigate();
  const flags = useMemo(() => {
    const { expense, income } = qs.parse(search, { ignoreQueryPrefix: true });
    return { isExpenseOpen: Boolean(expense), isIncomeOpen: Boolean(income) };
  }, [search]);

  return (
    <>
      <AppBar className="flex justify-between">
        <Toolbar>
          <h1 className="flex-1 text-xl font-bold">Expense/Income</h1>
          <IconButton
            onClick={() => {
              navigate("?income=1");
            }}
            color="inherit"
            size="large"
            tooltipText="Add income"
          >
            <AddIcon />
          </IconButton>
          <IconButton
            onClick={() => {
              navigate("?expense=1");
            }}
            color="inherit"
            size="large"
            tooltipText="Add expense"
          >
            <RemoveIcon />
          </IconButton>
          <IconButton
            tooltipText="Filter"
            size="large"
            color="inherit"
            onClick={() => {
              navigate("?filter=1");
            }}
          >
            <FilterAltIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <AddEditExpenseIncomeDialog
        type={flags.isExpenseOpen ? "expense" : "income"}
      />
    </>
  );
};
