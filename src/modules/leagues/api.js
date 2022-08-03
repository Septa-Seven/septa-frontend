import { axiosInstance } from "../../shared/settings";

const apiUrls = {
  leagues: "/api/matchmaking/leagues/",
  league: "/api/matchmaking/leagues/:id/",
  games: "/api/matchmaking/games/",
};

export const getLeagues = async () => {
  return await axiosInstance.get(apiUrls.leagues);
};

export const getLeague = async (id) => {
  return await axiosInstance.get(apiUrls.league.replace(":id", id));
};

export const getGames = async (id) => {
  return await axiosInstance.get(apiUrls.games, { params: { league_id: id } });
};
