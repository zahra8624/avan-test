import { useBudgetStore } from "@app/hooks/stores/useBudgetStore";
import { BudgetPageHeader, AddBudgetDialog } from "./components";
import { BudgetItem } from "./components/BudgetItem/BudgetItem";

const BudgetPage = () => {
  const budgetList = useBudgetStore((state) => state.list);
  return (
    <main className="pt-16 pb-10">
      <BudgetPageHeader />
      <div className="grid grid-cols-1 mt-2.5 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 px-5 gap-2">
        {budgetList.map((b) => {
          return <BudgetItem key={b.id} budget={b} />;
        })}
      </div>
      <AddBudgetDialog />
    </main>
  );
};

export default BudgetPage;
