import { ErrorMessage, Formik } from "formik";
import * as Yup from "yup";
import {
  FormStyled,
  RadioBtnContainer,
  RadioBtnTitle,
  RadioLabel,
  StyledError,
  InputField,
  RadioField,
  SubmitButtonStyled,
  InputContainer,
  InputWrapper,
} from "./BookLessonForm.styled";
import { ReactComponent as CheckedSvg } from "../../../images/modal/checked.svg";
import { ReactComponent as UncheckedSvg } from "../../../images/modal/unchecked.svg";
import { ErrorText } from "../Forms.styled";

const initialValues = { picked: "", fullName: "", email: "", phoneNumber: "" };
const schema = Yup.object().shape({
  picked: Yup.string()
    .oneOf(
      [
        "careerAndBusiness",
        "lessonForKids",
        "livingAbroad",
        "examsAndCoursework",
        "cultureTravelHobby",
      ],
      "Please choose one option"
    )
    .required("Required"),
  fullName: Yup.string()
    .required("Name is required")
    .min(3)
    .matches(/[A-Za-z]+/, "Name must contain at least 3 letter")
    .matches(/^[A-Za-z\s]+$/, "Name must contain only letters and spaces"),
  email: Yup.string()
    .matches(
      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
      "Emails: digits, letters, . - _ only, e.g., example@mail.com."
    )
    .email("Invalid email format, example@mail.com")
    .required("Email is required"),
  phoneNumber: Yup.string().matches(
    /^\+\d{1,14}$/,
    "Phone number is not valid"
  ),
});

const BookLessonForm = ({ closeModal }) => {
  return (
    <div>
      <Formik
        initialValues={{
          initialValues,
        }}
        validationSchema={schema}
        onSubmit={(values, actions) => {
          console.log(values);
          actions.resetForm();
          closeModal();
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleSubmit,
          isSubmitting,
        }) => (
          <FormStyled onSubmit={handleSubmit}>
            <div>
              <RadioBtnTitle>
                What is your main reason for learning English?
              </RadioBtnTitle>
              <RadioBtnContainer
                role="group"
                aria-labelledby="radio buttons group"
              >
                <RadioLabel>
                  {values.picked === "careerAndBusiness" ? (
                    <CheckedSvg />
                  ) : (
                    <UncheckedSvg />
                  )}
                  <RadioField
                    type="radio"
                    name="picked"
                    value="careerAndBusiness"
                  />
                  Career and business
                </RadioLabel>
                <RadioLabel>
                  {values.picked === "lessonForKids" ? (
                    <CheckedSvg />
                  ) : (
                    <UncheckedSvg />
                  )}
                  <RadioField
                    type="radio"
                    name="picked"
                    value="lessonForKids"
                    as={RadioField}
                  />
                  Lesson for kids
                </RadioLabel>
                <RadioLabel>
                  {values.picked === "livingAbroad" ? (
                    <CheckedSvg />
                  ) : (
                    <UncheckedSvg />
                  )}
                  <RadioField type="radio" name="picked" value="livingAbroad" />
                  Living abroad
                </RadioLabel>
                <RadioLabel>
                  {values.picked === "examsAndCoursework" ? (
                    <CheckedSvg />
                  ) : (
                    <UncheckedSvg />
                  )}
                  <RadioField
                    type="radio"
                    name="picked"
                    value="examsAndCoursework"
                  />
                  Exams and coursework
                </RadioLabel>
                <RadioLabel>
                  {values.picked === "cultureTravelHobby" ? (
                    <CheckedSvg />
                  ) : (
                    <UncheckedSvg />
                  )}
                  <RadioField
                    type="radio"
                    name="picked"
                    value="cultureTravelHobby"
                  />
                  Culture, travel or hobby
                </RadioLabel>
                {errors.picked && (
                  <StyledError className="error">{errors.picked}</StyledError>
                )}
                <ErrorMessage
                  name="picked"
                  render={(message) => <ErrorText>{message}</ErrorText>}
                />
              </RadioBtnContainer>
            </div>
            <InputContainer>
              <InputWrapper>
                <InputField
                  name="fullName"
                  placeholder="Full Name"
                  type="text"
                  value={values.fullName}
                  onChange={handleChange}
                  className={
                    touched.fullName && !errors.fullName
                      ? "valid"
                      : touched.fullName && errors.fullName
                      ? "invalid"
                      : ""
                  }
                />
                {touched.fullName && errors.fullName && (
                  <StyledError className="error">{errors.fullName}</StyledError>
                )}
                <ErrorMessage
                  name="fullName"
                  render={(message) => <ErrorText>{message}</ErrorText>}
                />
              </InputWrapper>
              <InputWrapper>
                <InputField
                  name="email"
                  placeholder="Email"
                  type="email"
                  value={values.email}
                  onChange={handleChange}
                  className={
                    touched.email && !errors.email
                      ? "valid"
                      : touched.email && errors.email
                      ? "invalid"
                      : ""
                  }
                />
                {touched.email && errors.email && (
                  <StyledError className="error">{errors.email}</StyledError>
                )}
                <ErrorMessage
                  name="email"
                  render={(message) => <ErrorText>{message}</ErrorText>}
                />
              </InputWrapper>
              <InputWrapper>
                <InputField
                  name="phoneNumber"
                  placeholder="Phone number"
                  type="phone"
                  value={values.phoneNumber}
                  onChange={handleChange}
                  className={
                    touched.phoneNumber && !errors.phoneNumber
                      ? "valid"
                      : touched.phoneNumber && errors.phoneNumber
                      ? "invalid"
                      : ""
                  }
                />
                {touched.phoneNumber && errors.phoneNumber && (
                  <StyledError className="error">
                    {errors.phoneNumber}
                  </StyledError>
                )}
                <ErrorMessage
                  name="phoneNumber"
                  render={(message) => <ErrorText>{message}</ErrorText>}
                />
              </InputWrapper>
            </InputContainer>

            <SubmitButtonStyled
              disabled={
                isSubmitting ||
                values.picked === "" ||
                values.fullName === "" ||
                values.email === "" ||
                values.phoneNumber === ""
              }
              type="submit"
            >
              Book
            </SubmitButtonStyled>
          </FormStyled>
        )}
      </Formik>
    </div>
  );
};

export default BookLessonForm;
