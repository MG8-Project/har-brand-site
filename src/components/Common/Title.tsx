import { iconDeco } from "../../assets/images";
import styled from "styled-components";
import { theme } from "../../styles/theme";
import { ReactNode } from "react";

export default function Title({ children }: { children: ReactNode }) {
  return (
    <TitleWrap>
      <TitleText>{children}</TitleText>
      <TitleDeco>
        <img src={iconDeco} alt="decoration" />
      </TitleDeco>
    </TitleWrap>
  );
}
const TitleWrap = styled.div`
  width: auto;
`;
const TitleText = styled.h2`
  font-size: 3.6rem;
  font-weight: 700;
  color: ${theme.colors.tx};
  padding: 0 100px;
  line-height: normal;
  margin-bottom: 5px;
  @media ${theme.mq.tablet} {
    font-size: 28px;
    padding: 0 67px;
  }
`;
const TitleDeco = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  &:before {
    display: block;
    content: "";
    position: absolute;
    bottom: calc(50% - 2px);
    left: 50%;
    transform: translate(-50%, -50%);
    background: radial-gradient(
      50% 50% at 50% 50%,
      #f5f5f5 0%,
      rgba(245, 245, 245, 0) 100%
    );
    filter: blur(0.25px);
    width: 118%;
    height: 2px;
    border-radius: 100%;
  }
  > img {
    display: block;
    width: 27px !important;
    height: auto;
  }
`;
