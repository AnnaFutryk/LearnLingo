import { useEffect } from "react";
import { createPortal } from "react-dom";
import SignUpForm from "../../Forms/SignUpForm";
import { ModalWindow, Overlay, SvgCloseStyled } from "./Modal.styled";
import { ReactComponent as SvgClose } from "../../../images/x.svg";

const modalRoot = document.querySelector("#modal-root");

const SignUpModal = ({ onClose }) => {
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
      <ModalWindow>
        <SvgCloseStyled onClick={onClose}>
          <SvgClose />
        </SvgCloseStyled>
        <SignUpForm />
      </ModalWindow>
    </Overlay>,
    modalRoot
  );
};

export default SignUpModal;
