import { Fragment, useEffect, useMemo } from "react";
import { useStores } from "../../StoreProvider";
import { observer } from "mobx-react-lite";
import { blockParser } from "../../services/blockParser";
import * as s from "./styles";

const ArticlesView = () => {
  const { articlesStore } = useStores();

  useEffect(() => {
    articlesStore.getArticles();
  }, [articlesStore]);

  const alticles = useMemo(() => {
    return articlesStore.articles.map((item) => {
      return item.body.blocks.map((block) => {
        if (blockParser.has(block.type)) {
          const parsedBlock = blockParser.get(block.type);
          return parsedBlock(block.data);
        }
      });
    });
  }, [articlesStore.articles]);

  return (
    <div>
      {alticles.map((article, index) => {
        return (
          <s.Article key={index}>
            {article.map((block, index) => (
              <Fragment key={index}>{block}</Fragment>
            ))}
          </s.Article>
        );
      })}
    </div>
  );
};

export const Articles = observer(ArticlesView);
