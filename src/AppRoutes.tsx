import { Route, Routes } from "react-router-dom";
import { WithSuspense } from "./components";
import { HomePage, BudgetPage, ChartsPage } from "./pages";
import { PanelLayout } from "./layouts";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<PanelLayout />}>
        <Route path="/" element={WithSuspense(<HomePage />)} />
        <Route path="/budget" element={WithSuspense(<BudgetPage />)} />
        <Route path="/chart" element={WithSuspense(<ChartsPage />)} />
      </Route>
    </Routes>
  );
};
