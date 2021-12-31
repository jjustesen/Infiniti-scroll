import * as React from "react";
import api from "api/api.json";

const ARRAY_SIZE = 20;
const RESPONSE_TIME_IN_MS = 1000;

export interface Item {
  key: number;
  title: string;
  subTitle: string;
}

interface Response {
  hasNextPage: boolean;
  data: Item[];
}

//Simular get de uma Api
const loadItems = (startCursor = 0, search: string): Promise<Response> => {
  return new Promise((resolve) => {
    let newArray: Item[] = [];
    let hasNextPage: boolean = true;
    let apiFilter = api.filter(
      (item) => item.name.toLowerCase().indexOf(search.toLowerCase()) > -1
    );

    setTimeout(() => {
      for (let i = startCursor; i < startCursor + ARRAY_SIZE; i++) {
        if (apiFilter[i]) {
          const newItem = {
            key: i,
            title: apiFilter[i].name,
            subTitle: api[i].url,
          };
          newArray = [...newArray, newItem];
        } else {
          hasNextPage = false;
        }
      }
      resolve({ hasNextPage: hasNextPage, data: newArray });
    }, RESPONSE_TIME_IN_MS);
  });
};

export const useLoadItems = () => {
  const [loading, setLoading] = React.useState(false);
  const [items, setItems] = React.useState<Item[]>([]);
  const [hasNextPage, setHasNextPage] = React.useState<boolean>(true);
  const [error, setError] = React.useState<any>();
  const [search, setSearch] = React.useState<string>("");

  React.useEffect(() => {
    loadMore();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  const loadMore = async () => {
    setLoading(true);
    try {
      const { data, hasNextPage: newHasNextPage } = await loadItems(
        items.length,
        search
      );
      setItems((current) => [...current, ...data]);
      setHasNextPage(newHasNextPage);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return { loading, items, hasNextPage, error, loadMore, setItems, setSearch };
};
