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

const initialValues = { email: "", password: "" };
const schema = Yup.object().shape({
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

export default function SignInForm() {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Container>
      <ToastContainer transition={Slide} />
      <Title>Log In</Title>
      <Txt>
        Welcome back! Please enter your credentials to access your account and
        continue your search for an teacher.
      </Txt>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={() => {}}
      >
        {({ values, errors, touched }) => (
          <AuthForm>
            <>
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
            <MainBtn type="submit" text={"Log In"} />
          </AuthForm>
        )}
      </Formik>
    </Container>
  );
}
