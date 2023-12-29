import { useNavigate } from "react-router-dom";
import { ReactComponent as LogoSvg } from "../images/logo.svg";
import { LogoTxt, Wrapp } from "./Logo.styled";

const Logo = () => {
  const navigate = useNavigate();

  return (
    <Wrapp onClick={() => navigate("/")}>
      <LogoSvg />
      <LogoTxt>LearnLingo</LogoTxt>
    </Wrapp>
  );
};

export default Logo;
