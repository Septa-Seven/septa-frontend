import { Fragment, useEffect, useMemo } from "react";
import { useStores } from "../../StoreProvider";
import { observer } from "mobx-react-lite";
import { blockParser } from "../../services/blockParser";
import * as s from "./styles";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { routes } from "../../shared/routes";
import { Plate } from "../../components";

const ArticlesView = () => {
  const { articlesStore } = useStores();

  useEffect(() => {
    articlesStore.getArticles();
  }, [articlesStore]);

  const articles = useMemo(() => {
    return articlesStore.articles.map((item) => {
      const article = { title: item.title, id: item.id };
      article.blocks = item.body.blocks.map((block) => {
        if (blockParser.has(block.type)) {
          const parsedBlock = blockParser.get(block.type);
          return parsedBlock(block.data);
        }
      });
      return article;
    });
  }, [articlesStore.articles]);

  return (
    <div>
      {articles.map((article, index) => {
        return (
          <Plate key={index}>
            <s.Article>
              <Typography variant="h2" fontWeight="bold" marginBottom="24px">
                <Link to={routes.article.replace(":id", article.id)}>
                  {article.title}
                </Link>
              </Typography>
              {article.blocks.map((block, index) => (
                <Fragment key={index}>{block}</Fragment>
              ))}
              <Typography variant="body1" fontWeight="bold" marginTop={1}>
                <Link to={routes.article.replace(":id", article.id)}>
                  Подробнее
                </Link>
              </Typography>
            </s.Article>
          </Plate>
        );
      })}
    </div>
  );
};

export const Articles = observer(ArticlesView);
