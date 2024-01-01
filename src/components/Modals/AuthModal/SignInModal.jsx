import { useEffect } from "react";
import { createPortal } from "react-dom";
import { ModalWindow, Overlay, SvgCloseStyled } from "./Modal.styled";
import { ReactComponent as SvgClose } from "../../../images/x.svg";
import SignInForm from "../../Forms/SignInForm";

const modalRoot = document.querySelector("#modal-login-root");

const SignInModal = ({ onClose }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const handleKeyDown = (event) => {
      if (event.code === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  const handleBackdropClick = (event) => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  return createPortal(
    <Overlay onClick={handleBackdropClick}>
      <ModalWindow style={{ height: "506px" }}>
        <SvgCloseStyled onClick={onClose}>
          <SvgClose />
        </SvgCloseStyled>
        <SignInForm onClose={onClose} />
      </ModalWindow>
    </Overlay>,
    modalRoot
  );
};

export default SignInModal;
