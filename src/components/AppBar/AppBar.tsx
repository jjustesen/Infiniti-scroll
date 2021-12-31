import React, { useCallback, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useColorMode } from "providers/theme";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
interface Props {}

export const PagAppBar = (props: Props) => {
  const [mode, setMode] = useState<boolean>(false);

  const { toggleColorMode } = useColorMode();

  const handleClick = useCallback(() => {
    setMode(mode!);
    toggleColorMode();
  }, [mode, toggleColorMode]);

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" data-testid="component-app-bar">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              User list
            </Typography>
            <IconButton
              data-testid="button-theme-switch"
              sx={{ ml: 1 }}
              onClick={handleClick}
              color="inherit"
            >
              {mode ? (
                <Brightness7Icon data-testid="button-theme-dark" />
              ) : (
                <Brightness4Icon data-testid="button-theme-light" />
              )}
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};
