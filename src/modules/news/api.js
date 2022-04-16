import { axiosInstance } from "../../shared/settings";

const apiUrls = { getArticles: "/api/blog/articles/", getArticle: "/api/blog/articles/:id"};

export const getArticles = async () => {
    return await axiosInstance.get(apiUrls.getArticles);
};

export const getArticle = async (id) => {
    return await axiosInstance.get(apiUrls.getArticle.replace(":id", id));
};