import styled from "styled-components";

const Container = styled.p`
  a {
    color: #534ed9;
    text-decoration: underline;
  }
`;

export const LinkContainer = ({ children }) => {
  return <Container>{children}</Container>;
};
