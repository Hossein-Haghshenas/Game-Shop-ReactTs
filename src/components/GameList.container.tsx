import { ReactElement, useEffect, useState } from "react";
import GameListRender from "./GameList.render";
import { Game } from "../types/Games.types";
import { getData } from "../api/GameApi";

const GameListContainer = (): ReactElement => {
  const [games, setGames] = useState<Game[]>([]);
  const [err, setErr] = useState<string>("");
  useEffect(() => {
    getData()
      .then((res) => setGames(res.data))
      .catch((e) => setErr(e.message));
  }, []);
  return <GameListRender err={err} games={games} />;
};

export default GameListContainer;
