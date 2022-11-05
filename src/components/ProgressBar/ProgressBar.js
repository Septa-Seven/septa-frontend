import * as s from "./styles";

export const ProgressBar = ({ percent }) => {
  return (
    <s.Background>
      <s.Progress percent={percent}>&nbsp;</s.Progress>
    </s.Background>
  );
};
