import { makeAutoObservable } from "mobx";
import { getArticle, getArticles } from "../modules/news/api";
import { toast } from "react-hot-toast";

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
      toast.error(e.response.data.detail, { position: "bottom-right" });
    }
  }

  async getArticle(id) {
    try {
      const { data } = await getArticle(id);
      this.article = data;
    } catch (e) {
      toast.error(e.response.data.detail, { position: "bottom-right" });
    }
  }
}
