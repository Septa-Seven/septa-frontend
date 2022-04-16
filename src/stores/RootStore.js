import { ArticlesStore } from "./ArticlesStore";
import { AuthStore } from "./AuthStore";
import { TeamStore } from "./TeamStore";
import { UserProfile } from "./UserProfile";

export class RootStore {
  constructor() {
    this.profileStore = new UserProfile(this);
    this.articleStore = new ArticlesStore(this);
    this.authStore = new AuthStore(this);
    this.teamStore = new TeamStore(this);
  }
}
