import AddIcon from "@mui/icons-material/Add";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { useNavigate } from "react-router-dom";

import { IconButton } from "@app/components";

export const BudgetPageHeader = () => {
  const navigate = useNavigate();
  return (
    <>
      <AppBar className="flex justify-between">
        <Toolbar>
          <h1 className="flex-1 text-xl font-bold">Expense/Income Budget</h1>
          <IconButton
            onClick={() => {
              navigate("?budget=1");
            }}
            color="inherit"
            size="large"
            tooltipText="Add budget"
          >
            <AddIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  );
};
