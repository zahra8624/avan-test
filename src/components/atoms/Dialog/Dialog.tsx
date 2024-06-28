import MuiDialog from "@mui/material/Dialog";
import { DialogProps } from "./Dialog.type";
import QueryString from "qs";
import { useLocation, useNavigate } from "react-router-dom";
import { useCallback } from "react";
import DialogTitle from "@mui/material/DialogTitle";
import { IconButton } from "../IconButton";
import CloseIcon from "@mui/icons-material/Close";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Stack from "@mui/material/Stack";

export const Dialog = (props: DialogProps) => {
  const {
    flagQueryKey,
    onClose,
    children,
    dialogActions,
    title,
    ...dialogProps
  } = props;
  const { search } = useLocation();
  const navigate = useNavigate();
  const queries = QueryString.parse(search, { ignoreQueryPrefix: true });
  const isOpen = Boolean(queries[flagQueryKey]);

  const _onClose = useCallback(
    (e: any, reason: any) => {
      navigate(-1 as any, { replace: true });
      return onClose?.(e, reason);
    },
    [navigate, onClose]
  );

  return (
    <MuiDialog {...dialogProps} open={isOpen} onClose={_onClose}>
      <DialogTitle>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <h1>{title}</h1>
          <IconButton
            onClick={() => _onClose({}, "backdropClick")}
            tooltipText=""
          >
            <CloseIcon />
          </IconButton>
        </Stack>
      </DialogTitle>
      <DialogContent classes={{ root: "!min-w-96" }}>{children}</DialogContent>
      {dialogActions && <DialogActions>{dialogActions}</DialogActions>}
    </MuiDialog>
  );
};
