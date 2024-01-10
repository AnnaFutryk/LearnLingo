import styled from "styled-components";

export const HeroWrapper = styled.div`
  display: flex;
  gap: 24px;

  @media (max-width: 1439px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const TxtBlock = styled.div`
  box-sizing: border-box;
  width: 720px;
  border-radius: 30px;
  background-color: #f8f8f8;
  padding: 98px 64px;

  @media (max-width: 1439px) {
    width: 100%;
    padding: 64px 32px;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 32px 12px;
  }
`;

export const Title = styled.h1`
  color: #121417;
  font-size: 48px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.166;
  letter-spacing: -0.96px;
  margin-bottom: 32px;

  @media (max-width: 768px) {
    font-size: 36px;
    margin-bottom: 24px;
  }
`;

export const Span = styled.span`
  color: #121417;
  font-size: 48px;
  font-style: italic;
  font-weight: 400;
  line-height: 56px;
  letter-spacing: -0.96px;
  background-color: #fbe9ba;
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
      : "#8A8A89"};

  @media (max-width: 768px) {
    font-size: 36px;
  }
`;

export const Txt = styled.p`
  max-width: 471px;
  color: #121417;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.375;
  letter-spacing: -0.32px;
  margin-bottom: 42px;

  @media (max-width: 768px) {
    max-width: 100%;
    font-size: 14px;
    margin-bottom: 32px;
  }
`;

export const ImgBlock = styled.div`
  width: 100%;
  min-width: 320px;
  height: 530px;
  flex-shrink: 0;
  position: relative;
  border-radius: 30px;
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
      : "#FBE9BA"};
  overflow: hidden;
  z-index: 1;

  @media (min-width: 1440px) {
    align-items: flex-start;
    width: 568px;
    padding: 0;
  }
`;

export const Img = styled.img`
  @media (max-width: 1439px) {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
