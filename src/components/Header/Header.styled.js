import styled from "styled-components";

export const Container = styled.div`
  margin: 20px auto;
  max-width: 1184px;
  height: 48px;
`;

export const HeaderWrap = styled.header`
  max-width: 1184px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  margin-left: 20px;
  margin-right: 20px;

  @media (min-width: 768) {
    flex-wrap: wrap;
    flex-direction: row;
    gap: 16px;
    padding: 30px 64px;
  }
`;

export const LogInWrapp = styled.div`
  display: flex;
  gap: 16px;
`;

export const BrgBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  cursor: pointer;
  background-color: transparent;
  border: none;

  /* @media (min-width: 1440px) {
    display: none;
  } */

  &:hover,
  &:focus {
    transform: scale(1.1);
  }
`;
