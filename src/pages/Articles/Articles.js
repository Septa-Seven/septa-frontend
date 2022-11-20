import { Fragment, useEffect, useMemo } from "react";
import { useStores } from "../../StoreProvider";
import { observer } from "mobx-react-lite";
import { blockParser } from "../../services/blockParser";
import * as s from "./styles";
import { Link } from "react-router-dom";
import { routes } from "../../shared/routes";
import { Plate } from "../../components";
import { Button, Typography } from "@mui/material";
import { getDateString } from "../../utils/getDateString";

const ArticlesView = () => {
  const { articlesStore } = useStores();

  useEffect(() => {
    articlesStore.getArticles();
  }, [articlesStore]);

  const articles = useMemo(() => {
    return articlesStore.articles.map((item) => {
      const article = {
        title: item.title,
        id: item.id,
        createdAt: item.createdAt,
      };
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
    <s.Container>
      {articles.map((article, index) => {
        return (
          <Plate key={index}>
            <s.Article>
              <s.BlocksContainer>
                <s.LinkContainer
                  variant="h4"
                  fontWeight="bold"
                  marginBottom="24px"
                >
                  <Link to={routes.article.replace(":id", article.id)}>
                    {article.title}
                  </Link>
                </s.LinkContainer>

                {article.blocks.map((block, index) => (
                  <Fragment key={index}>{block}</Fragment>
                ))}
              </s.BlocksContainer>

              <s.BottomContainer>
                <Link to={routes.article.replace(":id", article.id)}>
                  <Button variant="contained" color="secondary">
                    Подробнее
                  </Button>
                </Link>
                <Typography fontWeight="bold">
                  {getDateString(new Date(article.createdAt))}
                </Typography>
              </s.BottomContainer>
            </s.Article>
          </Plate>
        );
      })}
    </s.Container>
  );
};

export const Articles = observer(ArticlesView);
