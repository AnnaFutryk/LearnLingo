import styled from "styled-components";
import { ReactComponent as DotSvg } from "../../images/green-dot.svg";

export const TeacherCard = styled.li`
  box-sizing: border-box;
  width: 1184px;
  padding: 24px;
  display: flex;
  gap: 48px;
  background-color: #fff;
  border-radius: 24px;
  margin-top: 32px;
  margin-bottom: 32px;
`;

export const AvatarWrapper = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 100px;
  border: 3px solid #fbe9ba;
  position: relative;
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

export const FirstLineWrapp = styled.div`
  display: flex;
  justify-content: space-between;
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
