import styled, { css } from "styled-components";
import { theme } from "../../assets/theme";

const textStyle = css`
  color: ${theme.colors.white};
  margin-bottom: 0.8rem;
  text-align: center;
`;

const isMozilla = () => navigator.userAgent.indexOf("Firefox") !== -1;

const fadeBg = css`
  background-color: rgb(0 0 0 / 97%);
`;

const blurBg = css`
  background-color: rgb(0 0 0 / 54%);
  backdrop-filter: blur(15px);
`;

export const Title = styled.span`
  ${textStyle}
  font-size: 1.6rem;
`;

export const SubTitle = styled.span`
  ${textStyle}
  font-size: 1.4rem;
`;

export const ModalOverlay = styled.div`
  ${isMozilla() ? fadeBg : blurBg}
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Modal = styled.div`
  color: ${theme.colors.white};
  background-color: ${theme.colors.black};
  border: 1px solid ${theme.colors.blue};
  padding: 10px 1rem 20px;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  box-sizing: border-box;
`;

export const RadioGroup = styled.div`
  display: flex;
  flex: 1;
  margin: 0 auto 1rem;
  > * {
    margin: 0 0.6rem;
  }
`;

export const ActionsGroup = styled(RadioGroup)`
  margin-top: 3rem;
`;

export const ClockArea = styled.div`
  text-align: right;
`;

export const Button = styled.button`
  display: block;
  color: ${theme.colors.white};
  text-align: center;
  font-size: 1rem;
  background-color: ${theme.colors.black};
  border: 1px solid ${theme.colors.blue};
  border-radius: 6px;
  padding: 4px 0;
  width: 5rem;
  cursor: pointer;

  &:active {
    background-color: ${theme.colors.white};
    border-color: ${theme.colors.white};
    color: ${theme.colors.blue};
  }
`;
