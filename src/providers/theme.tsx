import { createTheme, ThemeProvider } from "@mui/material/styles";
import React, { createContext, useContext, useMemo } from "react";

interface Props {}

const ColorModeContext = createContext({ toggleColorMode: () => {} });

const Theme: React.FC<Props> = ({ children }) => {
  const [mode, setMode] = React.useState<"light" | "dark">("light");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = createTheme({
    palette: {
      mode: mode,
      primary: { dark: "#18d69a", main: "#12f2aa", light: "#79ffd4" },
      secondary: { dark: "#dd23d1", main: "#fe35f1", light: "#ff8af7" },
    },
  });
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export const useColorMode = () => {
  const context = useContext(ColorModeContext);
  const { toggleColorMode } = context;

  return { toggleColorMode };
};

export default Theme;
