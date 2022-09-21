import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { TodoBlockDiv, TextArea } from "../../styles/all_todo";
import AddNewTodoBlock from "../add_new_todo_block/AddNewTodoBlock";
import AddCard from "./AddCard";
import Card from "./Card";

interface CardItems {
  title: string;
}

const TodoBlock: React.FC = () => {
  const [cardItems, setCardItems] = useState<CardItems[]>([]);

  useEffect(() => {
    const fetchCardItems = async () => {
      const res = await fetch("/api/cardApi");
      const cardItemsRes: CardItems[] = await res.json();
      setCardItems(cardItemsRes);
    };
    fetchCardItems();
  }, []);

  const handlePostNewCard = async (enteredCard: string) => {
    const newCardItem = await fetch("/api/cardApi", {
      method: "POST",
      body: JSON.stringify({
        card: enteredCard,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => response.json());
    setCardItems([...cardItems, newCardItem]);
  };

  return (
    <TodosSection>
      <TodoBlockDiv>
        <TextArea placeholder="Add title" />
        <Card cardItems={cardItems} />
        <AddCard handlePostNewCard={handlePostNewCard} />
      </TodoBlockDiv>
      <div>
        <AddNewTodoBlock />
      </div>
    </TodosSection>
  );
};

export default TodoBlock;

const TodosSection = styled.section`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 30px;
`;
