export type HomeProps = {
  homeGames: {
    gameCategory: string;
    games: { gamesTitle: string; gamesImg: any; id: string }[];
  };
};
