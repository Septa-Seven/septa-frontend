import { useEffect } from "react";
import { useStores } from "../../StoreProvider";
import { observer } from "mobx-react-lite";
import { useParams } from "react-router";
import { Typography } from "@mui/material";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import * as s from "./styles";
import { CopyText, ProgressBar } from "../../components";
import { getLeagueProgressBarPercent } from "../../utils/getLeagueProgressBarPercent";
import { getDateString } from "../../utils/getDateString";
import AllInclusiveIcon from "@mui/icons-material/AllInclusive";
import PersonIcon from "@mui/icons-material/Person";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";

const LeagueDetailView = () => {
  const { leaguesStore } = useStores();
  const { id } = useParams();

  useEffect(() => {
    leaguesStore.getLeague(id);
    leaguesStore.getGames(id);
    leaguesStore.getPlayers(id);
  }, [id, leaguesStore]);

  return (
    <div>
      <s.HeaderContainer>
        <Typography variant="h4" fontWeight="bold">
          {leaguesStore.league?.name}
        </Typography>
        <s.IconsContainer>
          <s.IconContainer>
            <PlayArrowRoundedIcon fontSize="large" />
            <Typography fontWeight="bold">
              {leaguesStore.league?.gamesCount}
            </Typography>
          </s.IconContainer>

          <s.IconContainer>
            <PersonIcon fontSize="large" />
            <Typography fontWeight="bold">
              {leaguesStore.players.length}
            </Typography>
          </s.IconContainer>
        </s.IconsContainer>
      </s.HeaderContainer>
      <ProgressBar
        percent={getLeagueProgressBarPercent(
          leaguesStore.league?.start,
          leaguesStore.league?.end
        )}
      />

      <s.DateContainer>
        <Typography fontWeight="bold">
          {leaguesStore.league?.start &&
            getDateString(new Date(leaguesStore.league?.start))}
        </Typography>
        <Typography fontWeight="bold">
          {leaguesStore.league?.end ? (
            getDateString(new Date(leaguesStore.league?.end))
          ) : (
            <AllInclusiveIcon />
          )}
        </Typography>
      </s.DateContainer>

      <Typography marginBottom="30px">
        {leaguesStore.league?.description}
      </Typography>

      <s.ConnectToLeague>
        <Typography marginRight="10px" fontWeight="bold">
          Подключиться к лиге:
        </Typography>
        <CopyText>{leaguesStore.league?.connectUrl}</CopyText>
      </s.ConnectToLeague>

      <Typography variant="h4" fontWeight="bold" marginBottom="20px">
        Рейтинг команд
      </Typography>

      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableBody>
            {leaguesStore.players.map(({ id, name, rating }, count) => (
              <s.Row isEven={!(count % 2)} key={id}>
                <TableCell align="left">
                  <Typography fontWeight="bold">{count + 1}</Typography>
                </TableCell>
                <TableCell align="left">
                  <Typography fontWeight="bold">{name}</Typography>
                </TableCell>
                <TableCell align="center">
                  <Typography fontWeight="bold">{rating}</Typography>
                </TableCell>
              </s.Row>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export const LeagueDetail = observer(LeagueDetailView);
