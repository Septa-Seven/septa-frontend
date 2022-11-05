import { axiosInstance } from "../../shared/settings";

const apiUrls = {
  leagues: "/api/matchmaking/leagues/",
  league: "/api/matchmaking/leagues/:id/",
  games: "/api/matchmaking/games/",
  players: "/api/matchmaking/leagues/:id/top/",
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

export const getPlayers = async (id) => {
  return await axiosInstance.get(apiUrls.players.replace(":id", id));
};
