import Logo from "../Logo/Logo";
import SignUpBtn from "../Buttons/SignUpBtn/SignUpBtn";
import LogIn from "./LogIn/LogIn";
import Navigation from "../Navigation/Navigation";
import { Container, HeaderWrap, LogInWrapp } from "./Header.styled";
import { useState } from "react";
import SignUpModal from "../Modals/AuthModal/SignUpModal";
import SignInModal from "../Modals/AuthModal/SignInModal";
import { useSelector } from "react-redux";
import { selectIsAuth, selectName } from "../../redux/auth/auth-selectors";
import { LogInTxt } from "./LogIn/LogIn.styled";

const Header = () => {
  const isAuth = useSelector(selectIsAuth);
  const userName = useSelector(selectName);

  const [isSignInOpen, setSignInOpen] = useState(false);
  const [isSignUpOpen, setSignUpOpen] = useState(false);

  const handleSignInOpen = () => setSignInOpen(true);
  const handleSignInClose = () => setSignInOpen(false);

  const handleSignUpOpen = () => setSignUpOpen(true);
  const handleSignUpClose = () => setSignUpOpen(false);

  return (
    <Container>
      <HeaderWrap>
        <Logo />
        <Navigation />
        <LogInWrapp>
          {isAuth && <LogInTxt>Hello, {userName} </LogInTxt>}
          {!isAuth ? <LogIn onClick={handleSignInOpen} /> : <LogIn />}
          {isSignInOpen && <SignInModal onClose={handleSignInClose} />}
          {!isAuth && <SignUpBtn onClick={handleSignUpOpen} />}
          {isSignUpOpen && <SignUpModal onClose={handleSignUpClose} />}
        </LogInWrapp>
      </HeaderWrap>
    </Container>
  );
};

export default Header;
