import { ThemeProvider } from "@emotion/react";
import { AppRoutes } from "./AppRoutes";
import { defaultTheme } from "./styles/theme/default";
export const AppContainer = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <AppRoutes />
    </ThemeProvider>
  );
};
