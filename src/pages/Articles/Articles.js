import { Fragment, useEffect, useMemo } from "react";
import { useStores } from "../../StoreProvider";
import { observer } from "mobx-react-lite";
import { blockParser } from "../../services/blockParser";
import * as s from "./styles";
import { Typography } from "@mui/material";

const ArticlesView = () => {
  const { articlesStore } = useStores();

  useEffect(() => {
    articlesStore.getArticles();
  }, [articlesStore]);

  const articles = useMemo(() => {
    return articlesStore.articles.map((item) => {
      const article = { title: item.title };
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
          <s.Article key={index}>
            <Typography variant="h2">{article.title}</Typography>
            {article.blocks.map((block, index) => (
              <Fragment key={index}>{block}</Fragment>
            ))}
          </s.Article>
        );
      })}
    </div>
  );
};

export const Articles = observer(ArticlesView);
