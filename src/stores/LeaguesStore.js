import { makeAutoObservable } from "mobx";
import { getGames, getLeague, getLeagues } from "../modules/leagues/api";

export class LeaguesStore {
  leagues = [];
  connectUrl = "";

  constructor() {
    makeAutoObservable(this);
  }

  async getLeagues() {
    const { data } = await getLeagues();
    console.log(data, "asdasd");
    this.leagues = data;
  }

  async getLeague(id) {
    const { data } = await getLeague(id);
    this.connectUrl = data.connectUrl;
  }

  async getGames(id) {
    const { data } = await getGames(id);
    this.connectUrl = data.connectUrl;
  }
}
