import { Category } from "@app/types";
import SchoolIcon from "@mui/icons-material/School";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import CardTravelIcon from "@mui/icons-material/CardTravel";
import PaymentIcon from "@mui/icons-material/Payment";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

//i add all the layers of categories in one array in order to have as many hierarchy level as we want. for now it's just two

export const EXPENSE_CATEGORIES: Array<Category> = [
  { id: "1", name: "Expense", parent: null },
  { id: "2", name: "Asset", parent: null },
  { id: "3", name: "Learn", parent: "1", icon: <SchoolIcon /> },
  { id: "4", name: "Food", parent: "1", icon: <RestaurantIcon /> },
  { id: "5", name: "Stock", parent: "2", icon: <ShowChartIcon /> },
  { id: "6", name: "Gold", parent: "2", icon: <CardTravelIcon /> },
];

export const INCOME_CATEGORIES: Array<Category> = [
  { id: "7", name: "Income", parent: null },
  { id: "8", name: "Asset", parent: null },
  { id: "9", name: "Salary", parent: "7", icon: <PaymentIcon /> },
  { id: "10", name: "Gift", parent: "7", icon: <ArrowForwardIcon /> },
  { id: "11", name: "Stock", parent: "8", icon: <ShowChartIcon /> },
  { id: "12", name: "Gold", parent: "8", icon: <CardTravelIcon /> },
  { id: "13", name: "Fund", parent: "12", icon: <CardTravelIcon /> },
  { id: "14", name: "Coin", parent: "12", icon: <CardTravelIcon /> },
  { id: "15", name: "Foolad", parent: "11", icon: <CardTravelIcon /> },
];
