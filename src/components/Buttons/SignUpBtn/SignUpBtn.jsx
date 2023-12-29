import { Btn } from "./SignUpBtn.styled";

const SignUpBtn = ({ onClick }) => {
  return (
    <>
      <Btn type="button" onClick={onClick}>
        Registration
      </Btn>
    </>
  );
};

export default SignUpBtn;
