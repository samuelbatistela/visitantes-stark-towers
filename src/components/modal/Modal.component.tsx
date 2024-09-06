/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { FC } from "react";
import styled from "styled-components";
import {
  Title as SharedTitle,
  Paragraph,
} from "@/components/typography/Typography.component";
import CardCSS from "@/components/card/Card.css";

const WrapperModal = styled.section`
  display: flex;
  width: 100vw;
  background: rgba(0, 0, 0, 0.7);
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  color: ${({ theme }) => theme.font.color.primary};
`;

const Wrapper = styled.div`
  position: absolute;
  inset: 50% auto auto 50%;
  border: 1px solid rgb(204, 204, 204);
  background: rgb(255, 255, 255) none repeat scroll 0% 0%;
  overflow: auto;
  border-radius: 4px;
  outline: currentcolor none medium;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  font: initial;
  background: rgba(0, 0, 0, 0.7);
  width: 536px;

  ${CardCSS}

  padding: 20px;

  @media (max-width: ${({ theme }) => `${theme.breakpoint.md}px`}) {
    width: 350px;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const WrapperCloseChat = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;
  font-size: 20px;
  cursor: pointer;
  color: ${({ theme }) => theme.font.color.primary};

  &:hover {
    opacity: 0.7;
  }
`;

const Title = styled(SharedTitle)`
  text-align: left;
  margin: 20px 0px;
`;

const ParagraphBody = styled(Paragraph).attrs(() => ({ color: "secondary" }))`
  text-align: left;
`;

const WrapperText = styled.div`
  margin-right: 30px;
  justify-content: center;
  align-items: center;
`;

type ModalProps = {
  message: string;
  title: string;
  children?: any;
};

const Modal: FC<ModalProps> = ({ message, title, children }) => {
  return (
    <WrapperModal>
      <Wrapper>
        <WrapperText>
          <Title>{title}</Title>
          <ParagraphBody>{message}</ParagraphBody>
        </WrapperText>
        {children && children}
      </Wrapper>
    </WrapperModal>
  );
};

export default Modal;
