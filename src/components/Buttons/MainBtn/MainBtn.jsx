import { Btn } from "./MainBtn.styled";

const MainBtn = ({ type, text, width }) => {
  return (
    <>
      <Btn type={type} width={width}>
        {text}
      </Btn>
    </>
  );
};

export default MainBtn;
