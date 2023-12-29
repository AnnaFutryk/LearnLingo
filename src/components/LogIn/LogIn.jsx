import { ReactComponent as LogInSvg } from "../../images/log-in.svg";
import { LogInTxt, Wrapp } from "./LogIn.styled";

const LogIn = () => {
  return (
    <Wrapp>
      <LogInSvg />
      <LogInTxt>Log in</LogInTxt>
    </Wrapp>
  );
};

export default LogIn;
