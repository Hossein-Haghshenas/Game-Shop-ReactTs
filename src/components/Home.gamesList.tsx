import { ReactElement } from "react";
import { Grid } from "@mui/material";
import Cards from "./Cards";
import { Typography } from "@mui/material";
import { Box } from "@mui/material";
import LocalFireDepartmentRoundedIcon from "@mui/icons-material/LocalFireDepartmentRounded";
import { HomeProps } from "../types/HomeGames.types";

const GamesList = ({ homeGames }: HomeProps): ReactElement => {
  return (
    <>
      <Grid container paddingX={{ xs: "1rem", sm: "7rem" }} paddingY={"1rem"}>
        <Typography
          variant="h6"
          marginY={"3rem"}
          color={"azure"}
          sx={{ display: "flex", alignItems: "center" }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "0.3rem",
              marginRight: "0.5rem",
              borderRadius: "50%",
              bgcolor: "magenta",
            }}
          >
            <LocalFireDepartmentRoundedIcon />
          </Box>

          {homeGames.gameCategory}
        </Typography>
        <Grid container justifyContent={"center"} spacing={3}>
          {homeGames.games.map((game) => {
            const { gamesTitle, gamesImg, id } = game;
            return (
              <Grid item key={id}>
                <Cards title={gamesTitle} img={gamesImg} genre={"action"} />
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </>
  );
};

export default GamesList;
