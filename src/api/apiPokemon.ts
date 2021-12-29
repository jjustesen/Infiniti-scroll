import api from "./api.json";

interface Props {
  itemsPerPage: number;
  page: number;
  search: string;
}

export const apiPokemon = (props: Props) => {
  if (props.search !== "") {
    const max = api.filter(
      (item) => item.name.toLowerCase().indexOf(props.search.toLowerCase()) > -1
    ).length;
    return {
      max,
      body: api
        .filter(
          (item) =>
            item.name.toLowerCase().indexOf(props.search.toLowerCase()) > -1
        )
        .slice(0, props.itemsPerPage * props.page),
    };
  } else {
    const max = api.length;
    return { max, body: api.slice(0, props.itemsPerPage * props.page) };
  }
};
