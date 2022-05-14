import * as s from "./styles";
import { Item } from "./components";

export const List = ({ data, icon, onClick }) => {
  return (
    <s.Container>
      {data &&
        data.map(({ id, value }) => (
          <s.ItemContainer key={id}>
            <Item icon={icon} onClick={onClick} id={id}>
              {value}
            </Item>
          </s.ItemContainer>
        ))}
    </s.Container>
  );
};
