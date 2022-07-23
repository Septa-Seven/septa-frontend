import * as s from "./styles";

export const Plate = ({ children, inline = false, noPadding = false }) => {
  return (
    <s.Container inline={inline} noPadding={noPadding}>
      {children}
    </s.Container>
  );
};
