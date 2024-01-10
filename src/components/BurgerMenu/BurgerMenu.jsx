import {
  StyledBurgerBox,
  StyledBurgerContent,
  StyledBurgerList,
  StyledBurgerLink,
  StyledBurgerBtn,
} from "./BurgerMenu.styled";
import LogIn from "../Header/LogIn/LogIn";
import { useMediaQuery } from "react-responsive";
import { useSelector } from "react-redux";
import { selectIsAuth } from "../../redux/auth/auth-selectors";
import { useState } from "react";
import { ReactComponent as CloseSvg } from "../../images/x.svg";
import SignInModal from "../Modals/AuthModal/SignInModal";
import SignUpBtn from "../Buttons/SignUpBtn/SignUpBtn";
import SignUpModal from "../Modals/AuthModal/SignUpModal";
import { useColor } from "../Hero/ColorContext";

export const BurgerMenu = ({ isBrgOpen, setIsBrgOpen }) => {
  const [isSignInOpen, setSignInOpen] = useState(false);
  const [isSignUpOpen, setSignUpOpen] = useState(false);

  const isAuth = useSelector(selectIsAuth);
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  const { currentColor } = useColor();

  const handleSignInOpen = () => setSignInOpen(true);
  const handleSignInClose = () => setSignInOpen(false);

  const handleSignUpOpen = () => setSignUpOpen(true);
  const handleSignUpClose = () => setSignUpOpen(false);

  const handleLinkClick = () => {
    setIsBrgOpen(false);
  };

  return (
    <StyledBurgerBox
      className={isBrgOpen ? "active" : ""}
      onClick={() => setIsBrgOpen(false)}
    >
      <StyledBurgerContent
        style={{ backgroundColor: currentColor }}
        onClick={(e) => e.stopPropagation()}
      >
        {isMobile && !isAuth && <LogIn onClick={handleSignInOpen} />}
        {isSignInOpen && <SignInModal onClose={handleSignInClose} />}
        {isMobile && !isAuth && <SignUpBtn onClick={handleSignUpOpen} />}
        {isSignUpOpen && <SignUpModal onClose={handleSignUpClose} />}
        <StyledBurgerList>
          <StyledBurgerLink
            to="/"
            activeClassName="active"
            onClick={handleLinkClick}
          >
            Home
          </StyledBurgerLink>
          <StyledBurgerLink
            to="/teachers"
            activeClassName="active"
            onClick={handleLinkClick}
          >
            Teachers
          </StyledBurgerLink>
        </StyledBurgerList>
      </StyledBurgerContent>
      <StyledBurgerBtn type="button" onClick={() => setIsBrgOpen(false)}>
        <CloseSvg style={{ fill: currentColor }} />
      </StyledBurgerBtn>
    </StyledBurgerBox>
  );
};
