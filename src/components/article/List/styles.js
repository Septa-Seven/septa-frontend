import styled from "styled-components";

export const OrderedList = styled.ol`
  counter-reset: myCounter;
  padding: 0;
  margin: 0;

  li {
    &:before {
      font-family: "Roboto", "Helvetica", "Arial", sans-serif;
      counter-increment: myCounter;
      content: counter(myCounter);
      color: white;
      background: #2980b9;
      line-height: 30px;
      width: 30px;
      height: 30px;
      font-weight: bold;
    }
  }
`;

export const UnOrderedList = styled.ul`
  padding: 0;
  margin: 0;

  li {
    display: flex;
    align-items: center;

    &:before {
      content: "";
      top: 5px;
      left: 0;
      color: white;
      background: #2980b9;
      width: 10px;
      height: 10px;
      border-radius: 50%;
    }
  }
`;

export const ListItem = styled.li`
  margin-bottom: 16px;
  list-style: none;

  p {
    display: inline-block;
  }

  &:before {
    display: inline-block;
    text-align: center;
    margin: 5px 10px;
  }
`;
