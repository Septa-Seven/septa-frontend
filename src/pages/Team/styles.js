import styled from "styled-components";

export const TeamInfoContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 20px;

  & > div {
    flex-grow: 1;
  }
`;

export const ListWrapper = styled.div`
  margin-top: 10px;
  height: 220px;
  overflow-y: scroll;
`;

export const InfoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TeamTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
