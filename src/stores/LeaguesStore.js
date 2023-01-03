import { makeAutoObservable } from "mobx";
import {
  getGames,
  getLeague,
  getLeagues,
  getPlayers,
} from "../modules/leagues/api";
import { toast } from "react-hot-toast";

export class LeaguesStore {
  leagues = [];
  league = null;
  players = [];

  constructor() {
    makeAutoObservable(this);
  }

  async getLeagues() {
    try {
      const { data } = await getLeagues();
      this.leagues = data;
    } catch (e) {
      toast.error(e.response.data.detail, { position: "bottom-right" });
    }
  }

  async getLeague(id) {
    try {
      const { data } = await getLeague(id);
      this.league = data;
    } catch (e) {
      toast.error(e.response.data.detail, { position: "bottom-right" });
    }
  }

  async getGames(id) {
    try {
      const { data } = await getGames(id);
      this.connectUrl = data.connectUrl;
    } catch (e) {
      toast.error(e.response.data.detail, { position: "bottom-right" });
    }
  }

  async getPlayers(id) {
    try {
      const { data } = await getPlayers(id);
      this.players = data;
    } catch (e) {
      toast.error(e.response.data.detail, { position: "bottom-right" });
    }
  }
}
