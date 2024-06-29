import { useState } from "react";
import { ExpenseIncomeList, HomePageHeader } from "./components";
import { IncomeExpense } from "@app/types";

const HomePage = () => {
  const [itemToEdit, setItemToEdit] = useState<IncomeExpense>();
  return (
    <main className="pt-16 pb-10">
      <HomePageHeader setItemToEdit={setItemToEdit} itemToEdit={itemToEdit} />
      <ExpenseIncomeList onEdit={setItemToEdit} />
    </main>
  );
};

export default HomePage;
