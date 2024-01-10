import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(1px);
  z-index: 150;
`;

export const ModalBody = styled.div`
  box-sizing: border-box;
  width: 600px;
  max-height: 100%;
  overflow-y: auto;
  position: relative;
  background-color: #fff;
  padding: 64px;
  border-radius: 30px;
  text-align: left;
  color: #121417;
`;

export const SvgCloseStyled = styled.button`
  position: absolute;
  background-color: transparent;
  border: none;
  top: 20px;
  right: 20px;
  cursor: pointer;
`;

export const Title = styled.h2`
  font-size: 40px;
  font-weight: 500;
  line-height: 1.2;
  letter-spacing: -0.8px;
  margin-bottom: 20px;
`;

export const Txt = styled.p`
  font-size: 16px;
  line-height: 1.375;
  font-weight: 400;
  margin-bottom: 20px;
`;

export const TeacherBlock = styled.div`
  display: flex;
  gap: 14px;
  align-items: center;
`;

export const Avatar = styled.img`
  width: 44px;
  height: 44px;
  border-radius: 100px;
`;

export const TeacherTxt = styled.p`
  color: #8a8a89;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.33;
  margin-bottom: 4px;
`;

export const TeachName = styled.p`
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5;
`;
