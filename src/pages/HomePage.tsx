import { ReactElement } from "react";
import { Grid } from "@mui/material";
import Banner from "../components/Home.banner";
import { trendingGames, newGames } from "../constants/Home.games";
import GamesList from "./../components/Home.gamesList";

const HomePage = (): ReactElement => {
  return (
    <main>
      <Grid
        container
        justifyContent={"center"}
        alignItems={"center"}
        marginTop={"2rem"}
      >
        <Banner />
        <GamesList homeGames={trendingGames} />
        <GamesList homeGames={newGames} />
      </Grid>
    </main>
  );
};

export default HomePage;
