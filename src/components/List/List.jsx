import * as s from "./styles";
import { Item } from "./components";

export const List = ({ users, icon, onClick }) => {
  return (
    <s.Container>
      {users.map(({ id, username }) => (
        <s.ItemContainer key={id}>
          <Item icon={icon} onClick={onClick} id={id}>
            {username}
          </Item>
        </s.ItemContainer>
      ))}
    </s.Container>
  );
};
