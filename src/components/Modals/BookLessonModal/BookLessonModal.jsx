import { useEffect } from "react";
import {
  ModalBody,
  Overlay,
  Title,
  SvgCloseStyled,
  Txt,
  TeacherBlock,
  Avatar,
  TeacherTxt,
  TeachName,
} from "./BookLessonModal.styled";
import { ReactComponent as SvgClose } from "../../../images/x.svg";
import BookLessonForm from "../../Forms/BookLessonForm/BookLessonForm";
import { createPortal } from "react-dom";

const modalRoot = document.querySelector("#modal-lesson-root");

const BookLessonModal = ({ teacher, onClose }) => {
  const { avatar_url, name, surname } = teacher;

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

  const handleInnerClick = (event) => {
    event.stopPropagation();
  };

  return createPortal(
    <Overlay onClick={onClose}>
      <ModalBody onClick={handleInnerClick}>
        <SvgCloseStyled onClick={onClose}>
          <SvgClose />
        </SvgCloseStyled>
        <Title>Book trial lesson</Title>
        <Txt>
          Our experienced tutor will assess your current language level, discuss
          your learning goals, and tailor the lesson to your specific needs.
        </Txt>
        <TeacherBlock>
          <Avatar src={avatar_url} alt="avatar" />

          <div>
            <TeacherTxt>Your teacher</TeacherTxt>
            <TeachName>
              {name} {surname}
            </TeachName>
          </div>
        </TeacherBlock>
        <BookLessonForm closeModal={onClose} />
      </ModalBody>
    </Overlay>,
    modalRoot
  );
};

export default BookLessonModal;
