import { ReactElement } from "react";
import { useQuery } from 'react-query'
import { Game } from "../types/Games.types";
import GameListRender from "./GameList.render";
import { getAllGames } from "../api/GameApi";
import Loading from "./Loading";
import Error from "./Error";
import { Grid } from "@mui/material";

const GameListContainer = (): ReactElement => {
  const { data, error, isLoading, isError } = useQuery<Game[], Error>("games", () => getAllGames())

  if (isLoading) {
    return (
      <Loading />
    )
  }
  if (isError) {
    return (
      <Error errorMsg={error.message} />
    )
  }
  return <>
    <GameListRender games={data} />
  </>;
};

export default GameListContainer;
