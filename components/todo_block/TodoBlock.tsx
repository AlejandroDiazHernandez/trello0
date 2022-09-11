import { TodoBlockDiv, TextArea } from "../../styles/all_todo";
import AddCard from "./AddCard";
import Card from "./Card";

const TodoBlock: React.FC = () => {
  return (
    <TodoBlockDiv>
      <TextArea placeholder="Add title" />
      <Card />
      <AddCard />
    </TodoBlockDiv>
  );
};

export default TodoBlock;
