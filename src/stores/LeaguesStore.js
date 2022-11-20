import { makeAutoObservable } from "mobx";
import {
  getGames,
  getLeague,
  getLeagues,
  getPlayers,
} from "../modules/leagues/api";

export class LeaguesStore {
  leagues = [];
  league = null;
  players = [];

  constructor() {
    makeAutoObservable(this);
  }

  async getLeagues() {
    const { data } = await getLeagues();
    this.leagues = data;
  }

  async getLeague(id) {
    const { data } = await getLeague(id);
    this.league = data;
  }

  async getGames(id) {
    const { data } = await getGames(id);
    this.connectUrl = data.connectUrl;
  }

  async getPlayers(id) {
    const { data } = await getPlayers(id);
    this.players = data;
  }
}
