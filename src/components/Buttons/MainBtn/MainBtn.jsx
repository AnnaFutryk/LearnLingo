import { Btn } from "./MainBtn.styled";

const MainBtn = ({ type, text, width, onClick }) => {
  return (
    <>
      <Btn onClick={onClick} type={type} width={width}>
        {text}
      </Btn>
    </>
  );
};

export default MainBtn;
