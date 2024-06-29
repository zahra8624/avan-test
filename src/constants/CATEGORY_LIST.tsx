import { Category } from "@app/types";
import SchoolIcon from "@mui/icons-material/School";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import CardTravelIcon from "@mui/icons-material/CardTravel";
import PaymentIcon from "@mui/icons-material/Payment";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

//i add all the layers of categories in one array in order to have as many hierarchy level as we want. for now it's just two

export const EXPENSE_CATEGORIES: Array<Category> = [
  { id: "1", name: "Expense", parent: null, type: "expense" },
  { id: "2", name: "Asset", parent: null, type: "expense" },
  {
    id: "3",
    name: "Learn",
    parent: "1",
    icon: <SchoolIcon />,
    type: "expense",
  },
  {
    id: "4",
    name: "Food",
    parent: "1",
    icon: <RestaurantIcon />,
    type: "expense",
  },
  {
    id: "5",
    name: "Stock",
    parent: "2",
    icon: <ShowChartIcon />,
    type: "expense",
  },
  {
    id: "6",
    name: "Gold",
    parent: "2",
    icon: <CardTravelIcon />,
    type: "expense",
  },
];

export const INCOME_CATEGORIES: Array<Category> = [
  { id: "7", name: "Income", parent: null, type: "income" },
  { id: "8", name: "Asset", parent: null, type: "income" },
  {
    id: "9",
    name: "Salary",
    parent: "7",
    icon: <PaymentIcon />,
    type: "income",
  },
  {
    id: "10",
    name: "Gift",
    parent: "7",
    icon: <ArrowForwardIcon />,
    type: "income",
  },
  {
    id: "11",
    name: "Stock",
    parent: "8",
    icon: <ShowChartIcon />,
    type: "income",
  },
  {
    id: "12",
    name: "Gold",
    parent: "8",
    icon: <CardTravelIcon />,
    type: "income",
  },
  {
    id: "13",
    name: "Fund",
    parent: "12",
    icon: <CardTravelIcon />,
    type: "income",
  },
  {
    id: "14",
    name: "Coin",
    parent: "12",
    icon: <CardTravelIcon />,
    type: "income",
  },
  {
    id: "15",
    name: "Foolad",
    parent: "11",
    icon: <CardTravelIcon />,
    type: "income",
  },
];
