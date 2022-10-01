import { observer } from "mobx-react-lite";
import { useParams } from "react-router";
import { useStores } from "../../StoreProvider";
import { useEffect, useMemo, Fragment } from "react";
import { blockParser } from "../../services/blockParser";
import * as s from "../Articles/styles";
import { Typography } from "@mui/material";
import { Plate } from "../../components";

export const ArticleView = () => {
  const { id } = useParams();
  const { articlesStore } = useStores();

  useEffect(() => {
    articlesStore.getArticle(id);
  }, [articlesStore, id]);

  const article = useMemo(() => {
    if (articlesStore.article) {
      const article = { title: articlesStore.article.title };
      article.blocks = articlesStore.article.body.blocks.map((block) => {
        if (blockParser.has(block.type)) {
          const parsedBlock = blockParser.get(block.type);
          return parsedBlock(block.data);
        }
      });
      return article;
    }
  }, [articlesStore.article]);

  return (
    <s.Container>
      <Plate>
        <s.Article>
          {article && (
            <>
              <Typography variant="h4" fontWeight="bold" marginBottom="24px">
                {article.title}
              </Typography>
              {article.blocks.map((block, index) => (
                <Fragment key={index}>{block}</Fragment>
              ))}
            </>
          )}
        </s.Article>
      </Plate>
    </s.Container>
  );
};

export const Article = observer(ArticleView);
