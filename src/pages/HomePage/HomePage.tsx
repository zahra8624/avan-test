import AddIcon from "@mui/icons-material/add";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";

const HomePage = () => {
  return (
    <main>
      <AppBar className="flex justify-between">
        <Toolbar>
          <h1 className="flex-1 text-xl font-bold">Expense/Income</h1>
          <IconButton color="inherit">
            <AddIcon />
          </IconButton>
          <IconButton color="inherit">
            <FilterAltIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </main>
  );
};

export default HomePage;
