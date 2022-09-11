import styled from "@emotion/styled";
import { GetServerSideProps } from "next";

interface CardProps {
  cardItems: CardItems[];
}

interface CardItems {
  title: string;
}

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch("/api/cardApi");
  const cardItems: CardItems[] = await res.json();

  return {
    props: { cardItems },
  };
};

const Card: React.FC<CardProps> = ({ cardItems }) => {
  console.log(cardItems);
  return (
    <ul>
      {cardItems?.map((card, index) => (
        <li key={index}>
          <CardDiv>{card.title}</CardDiv>
        </li>
      ))}
    </ul>
  );
};

export default Card;

const CardDiv = styled.div`
  background-color: white;
  border-radius: 5px;
  padding: 3px;
  margin: 5px 5px 5px 0;
  box-shadow: 2px 2px grey;
  cursor: pointer;
`;
