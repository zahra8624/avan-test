import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeIcon from "@mui/icons-material/Home";
import MoneyIcon from "@mui/icons-material/Money";
import Paper from "@mui/material/Paper";
import { useLocation, useNavigate } from "react-router-dom";

export const BottomTabMenu = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const getValue = () => {
    switch (pathname) {
      case "/budget":
        return 0;
      case "/":
      default:
        return 1;
    }
  };
  return (
    <Paper elevation={3} className="fixed bottom-0 left-0 right-0 w-full">
      <BottomNavigation showLabels value={getValue()}>
        <BottomNavigationAction
          label="Budget"
          icon={<MoneyIcon />}
          onClick={() => navigate("/budget")}
        />
        <BottomNavigationAction
          label="Home"
          icon={<HomeIcon />}
          onClick={() => navigate("/")}
        />
      </BottomNavigation>
    </Paper>
  );
};
