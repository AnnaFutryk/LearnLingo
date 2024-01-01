import { ErrorMessage, Formik } from "formik";
import { ToastContainer, toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import * as Yup from "yup";
import {
  Container,
  Input,
  InputWrapper,
  AuthForm,
  Title,
  ToggleButton,
  ErrorText,
  Txt,
} from "./Forms.styled";
import { ReactComponent as ShowPassword } from "../../images/eye.svg";
import { ReactComponent as HidePassword } from "../../images/eye-off.svg";
import MainBtn from "../Buttons/MainBtn/MainBtn";
import { useDispatch } from "react-redux";
import { signUp } from "../../redux/auth/auth-operations";

const initialValues = { name: "", email: "", password: "" };
const schema = Yup.object().shape({
  name: Yup.string()
    .required("Name is required")
    .matches(/[A-Za-z]+/, "Name must contain at least one letter")
    .matches(/^[A-Za-z\s]+$/, "Name must contain only letters and spaces"),
  email: Yup.string()
    .matches(
      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
      "Emails: digits, letters, . - _ only, e.g., example@mail.com."
    )
    .email("Invalid email format, example@mail.com")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters long")
    .max(30, "Passwors must be shorter")
    .required("Password is required")
    .matches(/[a-zA-Z]/, "Password must contain at least one letter")
    .matches(/[0-9]/, "Password must contain at least one number"),
});

export default function SignUpForm({ onClose }) {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const dispatch = useDispatch();

  const handleSubmit = async (values) => {
    const { name, email, password } = values;
    try {
      await dispatch(signUp({ name, email, password })).unwrap();
      toast.success(`🦄 Your sign up was successful!`, {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 1500,
      });
      setTimeout(() => {
        onClose();
      }, 1500);
    } catch (error) {
      toast.error(`Something went wrong. Try again`, {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 2000,
      });
    }
  };

  return (
    <Container>
      <ToastContainer transition={Slide} />
      <Title>Registration</Title>
      <Txt>
        Thank you for your interest in our platform! In order to register, we
        need some information. Please provide us with the following information
      </Txt>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        {({ values, errors, touched }) => (
          <AuthForm>
            <>
              <InputWrapper>
                <Input
                  type="text"
                  name="name"
                  placeholder="Name"
                  error={errors.name && touched.name ? "true" : "false"}
                  success={values.name && !errors.name ? "true" : "false"}
                />
                <ErrorMessage
                  name="name"
                  render={(message) => <ErrorText>{message}</ErrorText>}
                />
              </InputWrapper>

              <InputWrapper>
                <Input
                  type="email"
                  name="email"
                  placeholder="Email"
                  error={errors.email && touched.email ? "true" : "false"}
                  success={values.email && !errors.email ? "true" : "false"}
                />
                <ErrorMessage
                  name="email"
                  render={(message) => <ErrorText>{message}</ErrorText>}
                />
              </InputWrapper>

              <InputWrapper>
                <Input
                  type={showPassword ? "text" : "password"}
                  value={values.password}
                  name="password"
                  placeholder="Password"
                  error={errors.password && touched.password ? "true" : "false"}
                  success={
                    values.password && !errors.password ? "true" : "false"
                  }
                />
                <ErrorMessage
                  name="password"
                  render={(message) => <ErrorText>{message}</ErrorText>}
                />

                <ToggleButton type="button" onClick={handleTogglePassword}>
                  {values.password ? (
                    showPassword ? (
                      <ShowPassword />
                    ) : (
                      <HidePassword />
                    )
                  ) : null}
                </ToggleButton>
              </InputWrapper>
            </>
            <MainBtn type={"submit"} text={"Sign Up"} />
          </AuthForm>
        )}
      </Formik>
    </Container>
  );
}
