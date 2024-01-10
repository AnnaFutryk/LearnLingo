import styled from "styled-components";
import { ReactComponent as DotSvg } from "../../images/green-dot.svg";

export const TeacherCard = styled.li`
  position: relative;
  box-sizing: border-box;
  padding: 24px;
  display: flex;
  background-color: #fff;
  border-radius: 24px;
  margin-top: 32px;

  @media (max-width: 1224px) {
    padding: 12px;
  }

  @media (max-width: 1024px) {
    margin-left: 12px;
    margin-right: 12px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const AvatarWrapper = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 100px;
  border: 3px solid #fbe9ba;
  position: relative;
  margin-right: 48px;
`;

export const GreenSvg = styled(DotSvg)`
  position: absolute;
  top: 19px;
  right: 23px;
`;

export const Avatar = styled.img`
  width: 96px;
  height: 96px;
  border-radius: 100px;
  padding: 12px;
`;

export const TextContainer = styled.div`
  display: flex;
  width: 968px;
  flex-direction: column;
  gap: 32px;
  @media (max-width: 1224px) {
    width: 800px;
  }
  @media (max-width: 1024px) {
    width: 100%;
  }
`;

export const FirstLineWrapp = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  @media (max-width: 1224px) {
    flex-direction: column;
    gap: 8px;
  }
`;

export const Title = styled.h3`
  color: #8a8a89;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5;
  margin-bottom: 8px;
`;

export const Name = styled.h2`
  color: #121417;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 1;
`;

export const InfoList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  margin-right: 90px;
  :not(:last-child) {
    border-right: 1px solid rgba(18, 20, 23, 0.2);
    margin-right: 16px;
    padding-right: 16px;
  }
  @media (max-width: 1224px) {
    margin-right: 0;
  }
`;

export const InfoItem = styled.li`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
  color: #121417;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5;
  white-space: nowrap;
  height: 24px;
`;

export const Span = styled.span`
  color: #38cd3e;
  white-space: nowrap;
`;

export const HeartBtn = styled.button`
  position: absolute;
  top: 26px;
  right: 26px;
  display: inline-block;
  background-color: transparent;
  border: none;
`;

export const SecondLineWrapp = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SpeacksSpan = styled.span`
  color: #121417;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5;
  text-decoration-line: underline;
`;

export const SecondLineSpan = styled.span`
  color: #121417;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5;
`;

export const ReadMoreBtn = styled.button`
  display: inline-block;
  margin-right: auto;
  padding: 0;
  border: none;
  outline: none;
  background-color: transparent;
  color: #121417;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5;
  text-decoration-line: underline;
`;

export const ExperienceTxt = styled.p`
  color: #121417;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;
`;

export const BtnListWrp = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
  justify-content: flex-start;
`;
