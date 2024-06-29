import { Moment } from "moment";

export interface FilterObjectType {
  amount?: number;
  categoryId?: string;
  fromDate?: Moment;
  toDate?: Moment;
  description?: string;
}

export interface UseIncomeExpenseFilterStore {
  filters?: FilterObjectType;
  setFilter: (f?: FilterObjectType) => void;
}
