import { Field, Form } from "formik";
import styled from "styled-components";

export const FormStyled = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-top: 40px;
`;
export const RadioBtnTitle = styled.h3`
  margin-bottom: 20px;
  color: #121417;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.333;
`;
export const RadioBtnContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

export const RadioLabel = styled.label`
  color: #121417;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.375;
  display: flex;
  gap: 8px;
  align-items: center;
  cursor: pointer;
`;
export const RadioField = styled(Field)`
  display: none;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

export const InputWrapper = styled.div`
  box-sizing: border-box;
  width: 472px;
  position: relative;
`;

export const InputField = styled(Field)`
  box-sizing: border-box;
  width: 100%;
  padding: 18px;
  border-radius: 12px;
  border: 1px solid rgba(18, 20, 23, 0.1);
  outline: none;
  color: #121417;
  &.valid {
    border-color: green;
  }

  &.invalid {
    border-color: red;
  }
`;

export const SubmitButtonStyled = styled.button`
  display: inline-flex;
  padding: 16px;
  width: 472px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  border-color: transparent;
  background-color: #f4c550;
  color: #121417;
  font-size: 18px;
  font-weight: 700;
  line-height: 1.555;
  outline: none;
`;
