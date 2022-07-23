import { ArticlesStore } from "./ArticlesStore";
import { AuthStore } from "./AuthStore";
import { TeamStore } from "./TeamStore";
import { UserProfile } from "./UserProfile";
import { LeaguesStore } from "./LeaguesStore";

export class RootStore {
  constructor() {
    this.profileStore = new UserProfile(this);
    this.articlesStore = new ArticlesStore(this);
    this.authStore = new AuthStore(this);
    this.teamStore = new TeamStore(this);
    this.leaguesStore = new LeaguesStore(this);
  }
}
