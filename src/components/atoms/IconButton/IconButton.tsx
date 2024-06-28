import Tooltip from "@mui/material/Tooltip";
import MuiIconButton from "@mui/material/IconButton";
import { IconButtonProps } from "./IconButton.type";

export const IconButton = (props: IconButtonProps) => {
  const { tooltipText, ...rest } = props;
  return (
    <Tooltip arrow title={tooltipText}>
      <MuiIconButton {...rest} />
    </Tooltip>
  );
};
