import { Btn } from "./MainBtn.styled";

const MainBtn = ({ type, text, width, onClick, color }) => {
  return (
    <>
      <Btn onClick={onClick} type={type} width={width} color={color}>
        {text}
      </Btn>
    </>
  );
};

export default MainBtn;
