import { TodoBlockDiv, TextArea } from "../../styles/all_todo";
import AddCard from "./AddCard";

const TodoBlock: React.FC = () => {
  return (
    <TodoBlockDiv>
      <TextArea />
      <AddCard />
    </TodoBlockDiv>
  );
};

export default TodoBlock;
