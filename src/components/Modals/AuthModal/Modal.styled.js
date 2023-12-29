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
  z-index: 100;
`;

export const ModalWindow = styled.div`
  position: relative;
  margin-top: 8px;
  width: 566px;
  height: 600px;
  border-radius: 30px;
  background-color: #fff;
`;

export const SvgCloseStyled = styled.button`
  position: absolute;
  background-color: transparent;
  border: none;
  top: 20px;
  right: 20px;
  cursor: pointer;
`;
