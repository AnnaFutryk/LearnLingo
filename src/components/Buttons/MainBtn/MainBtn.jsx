import { Btn } from "./MainBtn.styled";

const MainBtn = ({ text, width }) => {
  return (
    <>
      <Btn type="button" width={width}>
        {text}
      </Btn>
    </>
  );
};

export default MainBtn;
