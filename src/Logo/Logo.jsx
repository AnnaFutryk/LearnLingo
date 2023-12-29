import { ReactComponent as LogoSvg } from "../images/logo.svg";
import { LogoTxt, Wrapp } from "./Logo.styled";

const Logo = () => {
  return (
    <Wrapp>
      <LogoSvg />
      <LogoTxt>LearnLingo</LogoTxt>
    </Wrapp>
  );
};

export default Logo;
