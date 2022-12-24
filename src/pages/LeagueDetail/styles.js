import TableRow from "@mui/material/TableRow";
import styled from "styled-components";

export const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
`;

export const HeaderContainer = styled.div`
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const IconsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ConnectToLeague = styled.div`
  margin-bottom: 30px;
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const Row = styled(TableRow)`
  background: ${(props) => (props.isEven ? "#f3acff" : "#fff")};
  transition: all 0.15s ease-in-out;
  cursor: pointer;

  td {
    border: none;
  }

  td:first-child {
    border-bottom-left-radius: 3px;
    border-top-left-radius: 3px;
  }

  td:last-child {
    border-bottom-right-radius: 3px;
    border-top-right-radius: 3px;
  }

  &:hover {
    background: rgba(243, 172, 255, 0.7);
  }
`;

export const DateContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;
