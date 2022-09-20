import { useState } from "react";
import { AddCardDiv, TextAreaAddCard } from "../../styles/all_todo";
import ButtonsApp from "../buttons/ButtonsApp";

interface AddCardProps {
  handlePostNewCard: (enteredCard: string) => void;
}

const AddCard: React.FC<AddCardProps> = ({ handlePostNewCard }) => {
  const [toggleShowAddNewCart, setToggleShowAddNewCart] = useState(true);
  const [enteredCard, setEnteredCard] = useState<string>("");

  const handleCloseAddNewCart = () => {
    setToggleShowAddNewCart(!toggleShowAddNewCart);
    setEnteredCard("");
  };

  const onAddCard = () => {
    handlePostNewCard(enteredCard);
    handleCloseAddNewCart();
  };

  if (toggleShowAddNewCart)
    return (
      <AddCardDiv onClick={handleCloseAddNewCart}>Add new card</AddCardDiv>
    );
  else
    return (
      <div>
        <TextAreaAddCard
          placeholder="Add title for this card"
          value={enteredCard}
          onChange={(event) => setEnteredCard(event.target.value)}
        />
        <div>
          <ButtonsApp handlePostNewCard={onAddCard}>Add Card</ButtonsApp>
          <ButtonsApp secondary handleCloseAddNewCart={handleCloseAddNewCart}>
            Cancel
          </ButtonsApp>
        </div>
      </div>
    );
};

export default AddCard;
