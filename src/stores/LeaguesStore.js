import { makeAutoObservable } from "mobx";
import { getLeagues } from "../modules/leagues/api";

export class LeaguesStore {
  leagues = [];

  constructor() {
    makeAutoObservable(this);
  }

  async getLeagues() {
    const { data } = await getLeagues();
    console.log(data, "asdasd");
    this.leagues = data;
  }
}
