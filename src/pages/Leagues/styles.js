import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2%;

  @media (max-width: 768px) {
    gap: 2%;
  }

  & > div {
    width: 32%;

    @media (max-width: 768px) {
      width: 49%;
    }

    @media (max-width: 500px) {
      width: 100%;
    }
  }
`;
