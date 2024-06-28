import { DialogProps as MuiDialogProps } from "@mui/material/Dialog";
import { ReactNode } from "react";

export interface DialogProps extends Omit<MuiDialogProps, "open"> {
  flagQueryKey?: string;
  open?: boolean;
  dialogActions?: ReactNode;
}
