import styled from "styled-components";

export const Wrapp = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  position: relative;
  top: 0;
  cursor: pointer;
  transition: top 250ms linear;

  &:hover,
  &:focus {
    top: 2px;
  }
`;

export const LogInTxt = styled.p`
  color: #121417;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 1.25;
`;
