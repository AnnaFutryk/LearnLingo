import styled from "styled-components";

export const List = styled.ul`
  box-sizing: border-box;
  margin-top: 24px;
  padding: 40px 123px;
  border-radius: 30px;
  border: 1.5px dashed #f4c550;
  border-color: ${({ color }) =>
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
  max-width: 1440px;
  display: flex;
  flex-wrap: wrap;
  row-gap: 24px;
  column-gap: 100px;

  @media (max-width: 1439px) {
    padding: 28px 80px;
    column-gap: 60px;
    row-gap: 14px;
  }
  @media (max-width: 767px) {
    padding: 16px;
    column-gap: 20px;
  }
`;

export const Item = styled.li`
  display: flex;
  gap: 16px;
`;

export const Quantity = styled.p`
  color: #121417;
  font-size: 28px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.143;
  letter-spacing: -0.56px;
  @media (max-width: 767px) {
    font-size: 18px;
  }
`;

export const Discr = styled.p`
  width: 84px;
  color: rgba(18, 20, 23, 0.7);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.286;
  letter-spacing: -0.28px;
`;
