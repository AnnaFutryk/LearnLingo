import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const List = styled.ul`
  display: flex;
  gap: 28px;
`;

export const Link = styled(NavLink)`
  position: relative;
  top: 0;
  display: inline-block;
  text-decoration: none;
  font-weight: 400;
  font-size: 16px;
  color: #121417;
  line-height: 1.25%;
  transition: top 250ms linear, color 250ms linear;

  &:hover {
    color: #f4c550;
    top: 2px;
  }
  &.active {
    color: #f4c550;
  }
`;
