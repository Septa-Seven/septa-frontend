import ModalView from "@mui/material/Modal";
import { CenteredVH } from "../CenteredVH";
import * as s from "./styles";

export const Modal = ({ children, isShow, handleClose }) => {
  return (
    <ModalView open={isShow} onClose={handleClose}>
      <CenteredVH>
        <s.Wrapper>{children}</s.Wrapper>
      </CenteredVH>
    </ModalView>
  );
};
