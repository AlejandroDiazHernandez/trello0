import styled from "@emotion/styled";

type ButtonsProps = {
  children?: React.ReactNode;
  secondary?: boolean;
  handleCloseAddNewCart?: () => void;
};

const ButtonsApp: React.FC<ButtonsProps> = (props) => {
  const { children, secondary, handleCloseAddNewCart } = props;

  if (secondary)
    return (
      <SecondaryButton type="button" onClick={handleCloseAddNewCart}>
        {children}
      </SecondaryButton>
    );
  else return <MainButton type="button">{children}</MainButton>;
};

export default ButtonsApp;

const BasicButton = styled.button`
  padding: 3px 10px;
  border-radius: 5px;
  font-weight: bold;
  margin: 5px;
`;

const MainButton = styled(BasicButton)`
  background-color: #3f8eda;
  color: white;
  :hover {
    background-color: green;
  }
`;

const SecondaryButton = styled(BasicButton)`
  background-color: white;
  color: red;
  :hover {
    background-color: red;
    color: white;
  }
`;
