import { Grid } from "@mui/material";
import { ReactElement } from "react";
import { Game } from "../types/Games.types";
import GameCard from "./GameCards";

interface Props {
  games?: Game[];
}

const GameListRender = ({ games }: Props): ReactElement => {
  return (
    <>
      <ul>
        <Grid
          container
          spacing={3}
          justifyContent={"center"}
          sx={{ marginTop: "1rem" }}
        >
          {games?.map((game) => {
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
    </>
  );
}

export default GameListRender;
