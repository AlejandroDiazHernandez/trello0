import { useState } from "react";
import { AddCardDiv, TextAreaAddCard } from "../../styles/all_todo";
import ButtonsApp from "../buttons/ButtonsApp";

interface AddCardProps {
  reload: boolean;
  setReload: any;
}

const AddCard: React.FC<AddCardProps> = ({ setReload, reload }) => {
  const [toggleShowAddNewCart, setToggleShowAddNewCart] = useState(true);
  const [enteredCard, setEnteredCard] = useState<string>("");

  const handleCloseAddNewCart = () => {
    setToggleShowAddNewCart(!toggleShowAddNewCart);
    setEnteredCard("");
  };

  const handlePostNewCard = () => {
    fetch("/api/cardApi", {
      method: "POST",
      body: JSON.stringify({
        card: enteredCard,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    handleCloseAddNewCart();
    setReload(!reload);
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
          <ButtonsApp handlePostNewCard={handlePostNewCard}>
            Add Card
          </ButtonsApp>
          <ButtonsApp secondary handleCloseAddNewCart={handleCloseAddNewCart}>
            Cancel
          </ButtonsApp>
        </div>
      </div>
    );
};

export default AddCard;
