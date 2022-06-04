import { Paragraph, Title, List, Delimiter } from "../components/article";

const createTextComponent = ({ text }) => {
  return <Paragraph text={text} />;
};

const createTitleComponent = ({ text, level }) => {
  return <Title title={text} level={level} />;
};
//
// const createImageComponent = ({file}) => {
//     return (
//         <Image src={file.url} />
//     )
// }
//
const createListComponent = ({ items }) => {
  return <List items={items} />;
};

const createDelimiterComponent = () => {
  return <Delimiter />;
};

export const blockParser = new Map([
  ["paragraph", createTextComponent],
  ["Header", createTitleComponent],
  // ['Image', createImageComponent],
  ["List", createListComponent],
  ["Delimiter", createDelimiterComponent],
]);
