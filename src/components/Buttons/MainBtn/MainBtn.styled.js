import styled from "styled-components";

export const Btn = styled.button`
  width: ${(props) => props.width || "438px"};
  height: 60px;
  color: #121417;
  background-color: ${({ color }) =>
    color === "#F4C550"
      ? "#F4C550"
      : color === "#9FB7CE"
      ? "#9FB7CE"
      : color === "#9FBAAE"
      ? "#9FBAAE"
      : color === "#E0A39A"
      ? "#E0A39A"
      : color === "#F0AA8D"
      ? "#F0AA8D"
      : "#F4C550"};
  display: inline-block;
  border-radius: 12px;
  border: none;
  font-size: 18px;
  font-weight: 700;
  line-height: 1.555;
  cursor: pointer;
  margin-top: ${(props) => props.marginTop || "22px"};
  transition: background-color 250ms linear;

  &:hover,
  &:focus {
    position: relative;
    top: 3px;
    background-color: ${({ color }) =>
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
        : "#F4C550"};
  }
`;
