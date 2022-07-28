import { nanoid } from "nanoid";
import Ghost from "./../assets/image/trending4.jpg";
import GTA from "./../assets/image/trending5.png";
import Dying from "./../assets/image/trending6.jpg";
import Halo from "./../assets/image/trending7.png";

import Subway from "./../assets/image/new1.jpg";
import Call from "./../assets/image/new2.jpg";
import Free from "./../assets/image/new3.jpg";
import Clash from "./../assets/image/new4.jpg";
import Mine from "./../assets/image/new5.png";
import Pubg from "./../assets/image/new6.png";
import Fortnite from "./../assets/image/new7.png";
import Avengers from "./../assets/image/new8.jpg";

export const trendingGames = {
  gameCategory: "Trending Games",
  games: [
    { gamesTitle: "Ghost of Tsushima", gamesImg: Ghost, id: nanoid() },
    { gamesTitle: "GTA V", gamesImg: GTA, id: nanoid() },
    { gamesTitle: "Dying Light 2", gamesImg: Dying, id: nanoid() },
    { gamesTitle: "Halo Infinit", gamesImg: Halo, id: nanoid() },
  ],
};

export const newGames = {
  gameCategory: "New Games",
  games: [
    { gamesTitle: "Subway Surfers", gamesImg: Subway, id: nanoid() },
    { gamesTitle: "Call of Duty:Mobile", gamesImg: Call, id: nanoid() },
    { gamesTitle: "Free Guy", gamesImg: Free, id: nanoid() },
    { gamesTitle: "Clash Royal", gamesImg: Clash, id: nanoid() },
    { gamesTitle: "Minecraft", gamesImg: Mine, id: nanoid() },
    { gamesTitle: "PUBG", gamesImg: Pubg, id: nanoid() },
    { gamesTitle: "Fortnite", gamesImg: Fortnite, id: nanoid() },
    { gamesTitle: "Marvel of Champions", gamesImg: Avengers, id: nanoid() },
  ],
};
