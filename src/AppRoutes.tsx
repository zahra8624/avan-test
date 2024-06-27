import { Route, Routes } from "react-router-dom";
import { WithSuspence } from "./components";
import { HomePage, BudgetPage } from "./pages";
import { PanelLayout } from "./layouts";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<PanelLayout />}>
        <Route path="/" element={WithSuspence(<HomePage />)} />
        <Route path="/budget" element={WithSuspence(<BudgetPage />)} />
      </Route>
    </Routes>
  );
};
