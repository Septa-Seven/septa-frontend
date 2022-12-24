import { Plate } from "../../../../components";
import * as s from "./styles";
import { Typography } from "@mui/material";
import { getDateString } from "../../../../utils/getDateString";
import { useMemo } from "react";
import { routes } from "../../../../shared/routes";

export const League = ({ league }) => {
  const { start, end, active } = league;
  const status = useMemo(() => {
    if (active && end && new Date(end) < new Date()) return "Прошло";
    if (active && new Date(start) < new Date()) return "Проходит";
    if (active && new Date(start) > new Date()) return "Будет";
    if (!active) return "Заблокировано";
    return "хуйня";
  }, [active, end, start]);

  return (
    <s.HoverContainer>
      <Plate noPadding>
        <s.LinkContainer to={routes.leagueDetail.replace(":id", league.id)}>
          <s.Container>
            <s.TitleContainer>
              <s.Name>{league.name}</s.Name>

              <Typography>{status}</Typography>
            </s.TitleContainer>

            <Typography>{league.description}</Typography>

            <Typography variant="caption">
              {getDateString(new Date(start))} -{" "}
              {end ? getDateString(new Date(end)) : "∞"}
            </Typography>
          </s.Container>
        </s.LinkContainer>
      </Plate>
    </s.HoverContainer>
  );
};
