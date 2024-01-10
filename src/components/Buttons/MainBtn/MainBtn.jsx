import { useColor } from "../../Hero/ColorContext";
import { Btn } from "./MainBtn.styled";

const MainBtn = ({ type, text, width, onClick, color, marginTop }) => {
  const { currentColor } = useColor();

  return (
    <>
      <Btn
        style={{ backgroundColor: currentColor }}
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
