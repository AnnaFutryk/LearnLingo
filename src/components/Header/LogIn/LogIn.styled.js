import styled from "styled-components";
import { ReactComponent as LogInSvg } from "../../../images/log-in.svg";
import { ReactComponent as LogOutSvg } from "../../../images/log-out.svg";

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

export const SvgLogIn = styled(LogInSvg)`
  fill: ${({ color }) =>
    color === "#F4C550"
      ? "#FBE9BA"
      : color === "#9FB7CE"
      ? "#BFD6EA"
      : color === "#9FBAAE"
      ? "#CBDED3"
      : color === "#E0A39A"
      ? "#F2C0BD"
      : color === "#F0AA8D"
      ? "#F4C8BA"
      : "#FBE9BA"};
  stroke: ${({ color }) =>
    color === "#F4C550"
      ? "#FBE9BA"
      : color === "#9FB7CE"
      ? "#BFD6EA"
      : color === "#9FBAAE"
      ? "#CBDED3"
      : color === "#E0A39A"
      ? "#F2C0BD"
      : color === "#F0AA8D"
      ? "#F4C8BA"
      : "#FBE9BA"};
`;

export const SvgLogOut = styled(LogOutSvg)`
  fill: ${({ color }) =>
    color === "#F4C550"
      ? "#FBE9BA"
      : color === "#9FB7CE"
      ? "#BFD6EA"
      : color === "#9FBAAE"
      ? "#CBDED3"
      : color === "#E0A39A"
      ? "#F2C0BD"
      : color === "#F0AA8D"
      ? "#F4C8BA"
      : "#FBE9BA"};
  stroke: ${({ color }) =>
    color === "#F4C550"
      ? "#FBE9BA"
      : color === "#9FB7CE"
      ? "#BFD6EA"
      : color === "#9FBAAE"
      ? "#CBDED3"
      : color === "#E0A39A"
      ? "#F2C0BD"
      : color === "#F0AA8D"
      ? "#F4C8BA"
      : "#FBE9BA"};
`;
