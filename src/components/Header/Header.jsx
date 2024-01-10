// Зміни в Header.jsx
import Logo from "../Logo/Logo";
import SignUpBtn from "../Buttons/SignUpBtn/SignUpBtn";
import { BrgBtn, Container, HeaderWrap, LogInWrapp } from "./Header.styled";
import { useEffect, useState } from "react";
import { ReactComponent as MenuSvg } from "../../images/menu.svg";
import SignUpModal from "../Modals/AuthModal/SignUpModal";
import SignInModal from "../Modals/AuthModal/SignInModal";
import { useSelector } from "react-redux";
import { selectIsAuth, selectName } from "../../redux/auth/auth-selectors";
import { LogInTxt } from "./LogIn/LogIn.styled";
import { BurgerMenu } from "../BurgerMenu/BurgerMenu";
import LogIn from "./LogIn/LogIn";
import Navigation from "../Navigation/Navigation";
import { useMediaQuery } from "react-responsive";

const Header = () => {
  const [isSignInOpen, setSignInOpen] = useState(false);
  const [isSignUpOpen, setSignUpOpen] = useState(false);
  const [isBrgOpen, setIsBrgOpen] = useState(false);

  const isAuth = useSelector(selectIsAuth);
  const userName = useSelector(selectName);
  const isTablet = useMediaQuery({
    query: "(min-width: 768px)",
  });
  const isDesctop = useMediaQuery({
    query: "(min-width: 1440px)",
  });

  useEffect(() => {
    if (isBrgOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isBrgOpen]);

  const handleSignInOpen = () => setSignInOpen(true);
  const handleSignInClose = () => setSignInOpen(false);

  const handleSignUpOpen = () => setSignUpOpen(true);
  const handleSignUpClose = () => setSignUpOpen(false);

  return (
    <Container>
      <HeaderWrap>
        <Logo />
        <Navigation />
        {isTablet && (
          <LogInWrapp>
            {isAuth && <LogInTxt>Hello, {userName} </LogInTxt>}
            {!isAuth ? <LogIn onClick={handleSignInOpen} /> : <LogIn />}
            {isSignInOpen && <SignInModal onClose={handleSignInClose} />}
            {!isAuth && <SignUpBtn onClick={handleSignUpOpen} />}
            {isSignUpOpen && <SignUpModal onClose={handleSignUpClose} />}
          </LogInWrapp>
        )}
        {!isDesctop && (
          <BrgBtn
            onClick={() => {
              setIsBrgOpen(!isBrgOpen);
            }}
          >
            <MenuSvg />
          </BrgBtn>
        )}

        {isBrgOpen && (
          <BurgerMenu isBrgOpen={isBrgOpen} setIsBrgOpen={setIsBrgOpen} />
        )}
      </HeaderWrap>
    </Container>
  );
};

export default Header;
