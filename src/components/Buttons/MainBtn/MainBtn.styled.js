import styled from "styled-components";

export const Btn = styled.button`
  width: ${(props) => props.width || "438px"};
  height: 60px;
  color: #121417;
  background-color: #f4c550;
  display: inline-block;
  border-radius: 12px;
  border: none;
  font-size: 18px;
  font-weight: 700;
  line-height: 1.555;
  cursor: pointer;
  margin-top: 22px;
  transition: background-color 250ms linear;

  &:hover,
  &:focus {
    position: relative;
    top: 3px;
    background-color: #fbe9ba;
  }
`;
