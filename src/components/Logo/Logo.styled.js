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

export const LogoTxt = styled.p`
  color: #121417;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.2;
  letter-spacing: -0.4px;
`;
