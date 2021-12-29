import React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { Avatar, Grid, Typography } from "@mui/material";

interface Props {
  title: string;
  subtitle: string;
}

export const PagListItem = (props: Props) => {
  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: "16px",
    margin: "8px 16px",
    display: "flex",
    alignItems: "center",
    color: theme.palette.text.secondary,
  }));

  const stringToColor = (string: string) => {
    let hash = 0;
    let i;

    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = "#";

    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.substr(-2);
    }

    return color;
  };
  return (
    <Item>
      <Avatar sx={{ bgcolor: stringToColor(props.title) }}>
        {props.title.substr(0, 2).toUpperCase()}
      </Avatar>
      <Grid style={{ paddingLeft: "16px" }}>
        <Typography variant="body1">{props.title}</Typography>
        <Typography variant="body2">{props.subtitle}</Typography>
      </Grid>
    </Item>
  );
};
