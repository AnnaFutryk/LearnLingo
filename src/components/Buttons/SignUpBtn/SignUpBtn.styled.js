import styled from "styled-components";

export const Btn = styled.button`
  width: 166px;
  position: relative;
  top: 0;
  padding: 14px 38px;
  color: white;
  background-color: #121417;
  display: inline-block;
  border-radius: 12px;
  border: none;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 1.25;
  cursor: pointer;
  transition: top 250ms linear;

  &:hover,
  &:focus {
    top: 2px;
  }
`;
