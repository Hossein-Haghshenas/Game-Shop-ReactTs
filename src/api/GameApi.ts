import axios from "axios";
import { API_HOST, API_KEY } from "../constants/api_key";

const options = {
  method: "GET",
  url: "https://free-to-play-games-database.p.rapidapi.com/api/games",
  params: { platform: "pc" },
  headers: {
    "X-RapidAPI-Key": API_KEY,
    "X-RapidAPI-Host": API_HOST,
  },
};

export const getData = () => {
  const data = axios.request(options).then((res) => res);
  return data;
};
