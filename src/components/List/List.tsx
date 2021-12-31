import React from "react";
import { Button, Grid, TextField, Typography } from "@mui/material";
import useInfiniteScroll from "hooks/useInfiniteScroll";
import { PagListItem } from ".";
import { useLoadItems } from "./utils";
import { useState, useCallback } from "react";
import { PagListItemLoading } from "./ListItemLoading";

interface Props {}

export const PagList = (props: Props) => {
  const [text, setText] = useState<string>("");
  const { loading, items, hasNextPage, error, loadMore, setSearch, setItems } =
    useLoadItems();

  const [infiniteRef] = useInfiniteScroll({
    loading,
    hasNextPage,
    onLoadMore: loadMore,
    disabled: !!error,
    rootMargin: "0px 0px 400px 0px",
  });

  const handleSearch = useCallback(() => {
    setItems([]);
    setSearch(text);
  }, [setItems, setSearch, text]);

  return (
    <>
      <Grid>
        <Grid display="flex" p="16px">
          <TextField
            data-testid="input-search"
            value={text}
            onChange={(event: any) => setText(event.target.value)}
            label="Search"
            sx={(theme) => ({
              width: theme.breakpoints.down(300) ? "100%" : "300px",
            })}
          />

          <Button
            data-testid="button-search"
            sx={{ marginLeft: "16px" }}
            variant="outlined"
            onClick={handleSearch}
          >
            Search
          </Button>
        </Grid>

        <Grid container>
          {items.length > 0 &&
            items.map((item) => (
              <Grid item xs={12} md={6} xl={4}>
                <PagListItem title={item.title} subtitle={item.subTitle} />
              </Grid>
            ))}
          {hasNextPage && (
            <div style={{ width: "100%" }} ref={infiniteRef}>
              <Grid item xs={12} md={6} xl={4}>
                <PagListItemLoading />
              </Grid>
            </div>
          )}
          {!hasNextPage && !loading && items.length === 0 && (
            <Grid item xs={12} md={6} xl={4} p="16px">
              <Typography align="center">No items to show!</Typography>
            </Grid>
          )}
        </Grid>
      </Grid>
    </>
  );
};
