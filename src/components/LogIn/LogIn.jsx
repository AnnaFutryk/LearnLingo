import { ReactComponent as LogInSvg } from "../../images/log-in.svg";
import { LogInTxt, Wrapp } from "./LogIn.styled";

const LogIn = ({ onClick }) => {
  return (
    <Wrapp onClick={onClick}>
      <LogInSvg />
      <LogInTxt>Log in</LogInTxt>
    </Wrapp>
  );
};

export default LogIn;
