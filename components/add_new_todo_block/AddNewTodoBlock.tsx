import styled from "@emotion/styled";

const AddNewTodoBlock: React.FC = () => {
  return <AddNewBlockBtn type="button">Add new list</AddNewBlockBtn>;
};

export default AddNewTodoBlock;

const AddNewBlockBtn = styled.button`
  background-color: #0d3e6d;
  padding: 5px 10px;
  border-radius: 5px;
  color: #bfb7b7;
  font-weight: bold;
  :hover {
    color: white;
  }
`;
