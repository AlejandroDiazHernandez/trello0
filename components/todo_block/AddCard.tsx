import { useState } from "react";
import { AddCardDiv, TextAreaAddCard } from "../../styles/all_todo";
import ButtonsApp from "../buttons/ButtonsApp";

const AddCard: React.FC = () => {
  const [toggleShowAddNewCart, setToggleShowAddNewCart] = useState(true);

  const handleCloseAddNewCart = () => {
    setToggleShowAddNewCart(!toggleShowAddNewCart);
  };

  if (toggleShowAddNewCart)
    return (
      <AddCardDiv onClick={handleCloseAddNewCart}>Add new card</AddCardDiv>
    );
  else
    return (
      <div>
        <TextAreaAddCard placeholder="Add title for this card" />
        <div>
          <ButtonsApp>Add Card</ButtonsApp>
          <ButtonsApp secondary handleCloseAddNewCart={handleCloseAddNewCart}>
            Cancel
          </ButtonsApp>
        </div>
      </div>
    );
};

export default AddCard;
