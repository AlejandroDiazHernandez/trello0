import { useEffect, useState } from "react";
import { TodoBlockDiv, TextArea } from "../../styles/all_todo";
import AddCard from "./AddCard";
import Card from "./Card";

interface CardItems {
  title: string;
}

const TodoBlock: React.FC = () => {
  const [cardItems, setCardItems] = useState<CardItems[]>([]);
  const [reload, setReload] = useState(false);

  useEffect(() => {
    const fetchCardItems = async () => {
      const res = await fetch("/api/cardApi");
      const cardItemsRes: CardItems[] = await res.json();
      setCardItems(cardItemsRes);
    };
    fetchCardItems();
  }, [reload]);

  return (
    <TodoBlockDiv>
      <TextArea placeholder="Add title" />
      <Card cardItems={cardItems} />
      <AddCard reload={reload} setReload={setReload} />
    </TodoBlockDiv>
  );
};

export default TodoBlock;
