import { ReactNode } from "react";

export interface Category {
  id: string;
  parent: string | null;
  name: string;
  icon?: ReactNode;
}
