import { Btn } from "./MainBtn.styled";

const MainBtn = ({ type, text, width, onClick, color, marginTop }) => {
  return (
    <>
      <Btn
        onClick={onClick}
        type={type}
        width={width}
        color={color}
        marginTop={marginTop}
      >
        {text}
      </Btn>
    </>
  );
};

export default MainBtn;
