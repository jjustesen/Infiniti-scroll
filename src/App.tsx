import { Grid } from "@mui/material";
import { useTheme } from "@mui/system";
import { PagAppBar } from "components/AppBar";
import { PagList } from "components/List";

function App() {
  const theme = useTheme();

  return (
    <Grid sx={{ background: theme.palette.background.default }}>
      <PagAppBar />
      <PagList />
    </Grid>
  );
}

export default App;
