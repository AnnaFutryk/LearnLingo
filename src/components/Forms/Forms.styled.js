import { Form, Field } from "formik";
import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 438px;
  margin: 64px;
  @media (max-width: 768px) {
    width: 270px;
    margin: 20px;
  }
`;

export const Title = styled.h1`
  color: #121417;
  font-size: 40px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.2;
  letter-spacing: -0.8px;
  margin-bottom: 20px;
`;

export const Txt = styled.p`
  color: rgba(18, 20, 23, 0.8);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.375;
  margin-bottom: 40px;
`;

export const AuthForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 18px;
  max-width: 438px;
  @media (max-width: 768px) {
    gap: 10px;
  }
`;

export const Input = styled(Field)`
  width: 400px;
  display: block;
  padding: 16px 18px;
  border: 1px solid rgba(18, 20, 23, 0.1);
  border-radius: 12px;
  outline: none;
  font-size: 16px;
  line-height: 1.38;
  color: #121417;
  background-color: transparent;
  transition: border 250ms linear;

  &:focus,
  &:hover {
    border: 1px solid rgba(18, 20, 23, 0.1);
  }

  ${({ error }) =>
    error === "true" &&
    css`
      border: 1px solid red;
    `}
  ${({ success }) =>
    success === "true" &&
    css`
      border: 1px solid green;
    `}
     @media (max-width: 768px) {
    width: 240px;
    padding: 12px;
  }
`;

export const InputWrapper = styled.div`
  position: relative;
`;

export const ToggleButton = styled.button`
  background-color: transparent;
  width: 20px;
  height: 20px;
  z-index: 10;
  border: none;
  position: absolute;
  top: 17px;
  right: 18px;
  padding: 0;
`;

export const ErrorText = styled.p`
  position: ${({ absolute, select }) =>
    absolute === "true" || select === "true" ? "absolute" : "static"};
  left: ${({ select }) => (select === "true" ? "unset" : "25px")};
  right: ${({ select }) => (select === "true" ? "0" : "unset")};
  bottom: -24px;
  color: #da1414;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.16;
  margin-left: ${({ absolute, select }) =>
    absolute === "true" || select === "true" ? "0" : "25px"};
  margin-top: ${({ absolute, select }) =>
    absolute === "true" || select === "true" ? "0" : "8px"};
  /* width: ${({ select }) => (select === "true" ? "200px" : "100%")}; */
  white-space: nowrap;
  text-align: ${({ select }) => (select === "true" ? "right" : "left")};
`;

ErrorText.shouldForwardProp = (prop) => prop !== "error";
