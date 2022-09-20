import styled from "@emotion/styled";

interface CardProps {
  cardItems: CardItems[];
}

interface CardItems {
  title: string;
}

const Card: React.FC<CardProps> = ({ cardItems }) => {
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
