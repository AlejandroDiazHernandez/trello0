import { useState } from "react";
import { AddCardDiv } from "../../styles/all_todo";

const AddCard: React.FC = () => {
  const [toggleShowAddNewCart, setToggleShowAddNewCart] = useState(true);

  if (toggleShowAddNewCart)
    return (
      <AddCardDiv
        onClick={() => setToggleShowAddNewCart(!toggleShowAddNewCart)}
      >
        Add new card
      </AddCardDiv>
    );
  else return <p>hola</p>;
};

export default AddCard;
