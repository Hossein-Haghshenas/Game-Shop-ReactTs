import axios from "axios";
import { Game } from "../types/Games.types";
import { API_HOST, API_KEY } from "../constants/api_key";


export const getAllGames = async (): Promise<Game[]> => {
  const baseURL: string = "https://free-to-play-games-database.p.rapidapi.com/api/games?pc" ?? ''
  const { data } = await axios.get(baseURL, {
    headers: {
      "X-RapidAPI-Key": API_KEY,
      "X-RapidAPI-Host": API_HOST,
    }
  });
  return data as Game[];
};

export const getGameDetails = async (): Promise<Game[]> => {
  const baseURL: string = `https://free-to-play-games-database.p.rapidapi.com/api/games?pc/id?517` ?? ''
  const { data } = await axios.get(baseURL, {
    headers: {
      "X-RapidAPI-Key": API_KEY,
      "X-RapidAPI-Host": API_HOST,
    }
  });
  return data as Game[];
};