import { Grid } from "@mui/material";
import { ReactElement } from "react";
import { Game } from "../types/Games.types";
import GameCard from "./GameCards";

interface Props {
  err?: string;
  games: Game[];
}

function GameListRender({ err, games }: Props): ReactElement {
  err ? (
    <p>Unable to fetch games</p>
  ) : games?.length ? (
    <p>No games available</p>
  ) : (
    <></>
  );
  return (
    <ul>
      <Grid container spacing={3} justifyContent={"center"}>
        {games.map((game) => {
          return (
            <Grid item key={game.id}>
              <li>
                <GameCard content={game} />
              </li>
            </Grid>
          );
        })}
      </Grid>
    </ul>
  );
}

export default GameListRender;
