import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledBurgerBox = styled.div`
  position: fixed;
  z-index: 100;

  min-width: 300px;
  width: 100%;
  height: 100%;
  top: 88px;
  left: 0px;
  opacity: 0;

  pointer-events: none;

  &.active {
    opacity: 1;
    pointer-events: all;
    backdrop-filter: blur(1px);
  }
`;

export const StyledBurgerContent = styled.div`
  position: relative;
  padding: 36px;
  width: 100%;
  height: 100%;
  background: #fbe9ba;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

export const StyledBurgerList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

export const StyledBurgerLink = styled(NavLink)`
  color: var(--black);
  font-family: "Roboto", sans-serif;
  font-size: 20px;
  line-height: 1.25;
  transition: transform var(--time-dur-func);

  &:hover,
  &:focus {
    transform: scale(1.2);
  }

  &.active {
    text-decoration: underline;
  }
`;

export const StyledBurgerBtn = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background-color: transparent;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;

  width: 28px;
  height: 28px;
`;
