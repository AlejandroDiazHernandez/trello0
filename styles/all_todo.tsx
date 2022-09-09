import styled from "@emotion/styled";

export const TodoBlockDiv = styled.div`
  background-color: red;
  width: 350px;
  border-radius: 5px;
  padding: 5px;
`;

export const TextArea = styled.textarea`
  height: 2rem;
  width: 80%;
  border-radius: 5px;
  background-color: red;
  color: black;
  cursor: pointer;
  :focus {
    background-color: white;
  }
`;

export const AddCardDiv = styled.div`
  width: 80%;
  cursor: pointer;
`;
