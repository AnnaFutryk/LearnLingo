import Logo from "../../Logo/Logo";
import SignUpBtn from "../Buttons/SignUpBtn/SignUpBtn";

import LogIn from "../LogIn/LogIn";
import Navigation from "../Navigation/Navigation";
import { Container, HeaderWrap, LogInWrapp } from "./Header.styled";

const Header = () => {
  return (
    <Container>
      <HeaderWrap>
        <Logo />
        <Navigation />
        <LogInWrapp>
          <LogIn />
          <SignUpBtn />
        </LogInWrapp>
      </HeaderWrap>
    </Container>
  );
};

export default Header;
