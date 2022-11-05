import * as s from "./styles";
import { Button } from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

export const CopyText = ({ children }) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(children);
  };

  return (
    <s.Container>
      {children}
      <Button onClick={handleCopy}>
        <ContentCopyIcon sx={{ color: "#000" }} />
      </Button>
    </s.Container>
  );
};
