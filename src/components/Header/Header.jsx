import Logo from "../Logo/Logo";
import SignUpBtn from "../Buttons/SignUpBtn/SignUpBtn";

import LogIn from "../LogIn/LogIn";
import Navigation from "../Navigation/Navigation";
import { Container, HeaderWrap, LogInWrapp } from "./Header.styled";
import { useState } from "react";
import SignUpModal from "../Modals/SignUpModal/SignUpModal";

const Header = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Container>
      <HeaderWrap>
        <Logo />
        <Navigation />
        <LogInWrapp>
          <LogIn />
          <SignUpBtn onClick={handleOpen} />
          {open && <SignUpModal onClose={handleClose} />}
        </LogInWrapp>
      </HeaderWrap>
    </Container>
  );
};

export default Header;
