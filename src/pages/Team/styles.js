import styled from "styled-components";

export const TeamInfoContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 20px;

  & > div {
    width: 50%;
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
