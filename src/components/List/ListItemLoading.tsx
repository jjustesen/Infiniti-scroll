import React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { Grid, Skeleton } from "@mui/material";

export const PagListItemLoading = () => {
  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: "16px",
    margin: "8px 16px",
    display: "flex",
    alignItems: "center",
    color: theme.palette.text.secondary,
  }));

  return (
    <Item data-testid="loading-list-item">
      <Skeleton variant="circular" width={40} height={40} />
      <Grid style={{ paddingLeft: "16px", width: "100%" }}>
        <Skeleton variant="text" />
        <Skeleton variant="text" />
      </Grid>
    </Item>
  );
};
