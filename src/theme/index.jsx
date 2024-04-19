import { useMemo } from "react";
import { CssBaseline } from "@mui/material";
import GlobalStyles from "./GlobalStyles";
import palette from "./palette";
import typography from "./typography";
import shadows from "./shadows";
import customShadows from "./customShadows";
import componentsOverride from "./Overrides";
import {
  ThemeProvider as MUIThemeProvider,
  createTheme,
  StyledEngineProvider,
} from "@mui/material/styles";

const ThemeProvider = ({ children }) => {
  const themeOptions = useMemo(
    () => ({
      palette,
      shape: { borderRadius: 6 },
      typography,
      shadows: shadows(),
      customShadows: customShadows(),
    }),
    []
  );

  const theme = createTheme(themeOptions);
  theme.components = componentsOverride(theme);

  return (
    <StyledEngineProvider injectFirst>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyles />
        {children}
      </MUIThemeProvider>
    </StyledEngineProvider>
  );
};

export default ThemeProvider;
