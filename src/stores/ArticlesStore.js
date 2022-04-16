import { makeAutoObservable } from "mobx";
import { getArticle, getArticles } from "../modules/news/api";

export class ArticlesStore {
  articles = [];
  article = "";

  constructor() {
    makeAutoObservable(this);
  }

  async getArticles() {
    try {
      const { data } = await getArticles();
      this.articles = data.results;
    } catch (e) {
      console.log(e);
    }
  }

  async getArticle(id) {
    try {
      const { data } = await getArticle(id);
      this.article = data;
    } catch (e) {
      console.log(e);
    }
  }
}
