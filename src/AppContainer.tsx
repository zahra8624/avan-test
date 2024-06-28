import { ThemeProvider } from "@emotion/react";
import { AppRoutes } from "./AppRoutes";
import { defaultTheme } from "./styles/theme/default";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";

export const AppContainer = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <LocalizationProvider dateAdapter={AdapterMoment}>
        <AppRoutes />
      </LocalizationProvider>
    </ThemeProvider>
  );
};
