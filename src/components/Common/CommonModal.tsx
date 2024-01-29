import React, { useEffect } from "react";
import Modal from "react-modal";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";
import useViewPortSize from "../../hooks/useViewPortSize";
import SvgIcons from "./SvgIcons";
import { theme } from "../../styles/theme";
import { useModalStore } from "../../store/ModalStore";

interface ModalProps {
  width: string;
  maxWidth?: string;
  maxHeight?: string;
  height?: string;
  transform?: string;
  top?: string;
  left?: string;
  background?: string;
  children: React.ReactNode;
  modalIsOpen: boolean;
  closeModal: () => void;
  changePhase?: (str: string) => void;
  closeIcon?: boolean;
  closeText?: string;
}

const CommonModal = ({
  children,
  maxHeight,
  width,
  maxWidth,
  height,
  background,
  top,
  left,
  transform,
  closeModal,
  modalIsOpen,
  changePhase,
  closeIcon,
  closeText,
}: ModalProps) => {
  const { viewHeight } = useViewPortSize();
  const { setIsModalOpen } = useModalStore();
  useEffect(() => {
    if (modalIsOpen) {
      setIsModalOpen(true);
    }
  }, [modalIsOpen]);

  const handleClose = () => {
    if (changePhase) changePhase("");
    setIsModalOpen(false);
    closeModal();
  };
  const isTablet = useMediaQuery({
    query: "(max-width: 1024px)",
  });
  const isMobile = useMediaQuery({
    query: "(max-width: 600px)",
  });

  return (
    <ModalWrapper
      ariaHideApp={false}
      isOpen={modalIsOpen}
      onRequestClose={handleClose}
      onAfterOpen={() => {
        document.body.style.overflow = "hidden";
      }}
      onAfterClose={() => {
        document.body.style.overflow = "unset";
      }}
      style={{
        overlay: {
          zIndex: "9999",
          backgroundColor: "rgba(0,0,0,0.85)",
        },
        content: {
          position: "absolute",
          top: top ? top : "50%",
          left: left ? left : "50%",
          transform: transform ? transform : "translate(-50%, -50%)",
          display: "flex",
          flexDirection: "column",
          maxHeight: maxHeight,
          height: isMobile ? `${viewHeight}px` : height,
          width: width,
          maxWidth: maxWidth,
        },
      }}
    >
      <ChildrenArea>
        {children}
        {closeIcon && (
          <CloseButton onClick={handleClose}>
            <SvgIcons type={"close"} />
          </CloseButton>
        )}
      </ChildrenArea>
    </ModalWrapper>
  );
};
export default CommonModal;

const ModalWrapper = styled(Modal)`
  @media ${theme.mq.tablet} {
    width: 100%;
    height: 75vw !important;
  }
  @media ${theme.mq.mobile} {
    height: 100vh !important;
  }
`;

const ChildrenArea = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
  flex: 1;
`;

const CloseButton = styled.button`
  position: absolute;
  right: 40px;
  top: 40px;
  padding: 0;
  width: 60px;
  height: 60px;
  svg {
    width: 100%;
    height: 100%;
  }
  z-index: 9999;

  @media ${theme.mq.tablet} {
    right: 2.3438vw;
    top: 2.3438vw;
    width: 4.6875vw;
    height: 4.6875vw;
  }
  @media ${theme.mq.mobile} {
    right: 18px;
    top: 18px;
    width: 36px;
    height: 36px;
  }
`;
