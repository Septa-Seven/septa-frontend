import styled from "styled-components";
import { COLORS } from "../../shared/colors";

export const Background = styled.div`
  min-height: 100%;
  background: ${COLORS.pink};
  border-radius: 3px;
`;

export const Progress = styled.div`
  width: ${({ percent }) => (percent ? `${percent}%` : "50%")};
  background: ${COLORS.yellow};
  border-radius: 3px;
`;
