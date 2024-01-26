import styled from "styled-components";
import {theme} from "../../../styles/theme";
import {mantiscoLogo} from "../../../assets/images";

interface ScrollProps {
    scrollerState : boolean;
}

export default function Footer({scrollerState} : ScrollProps) {
    return (
        <FooterWrapper scrollerState={scrollerState}>
            <InnerWrapper>
                <CopyRight>©2024 MANTISCO CO., LTD. ALL RIGHTS RESERVED</CopyRight>
                <LogoWrap>
                    <img src={mantiscoLogo} alt="멘티스코 로고"/>
                </LogoWrap>
            </InnerWrapper>
        </FooterWrapper>
    );
}

const FooterWrapper = styled.footer<ScrollProps>`
  position: fixed;
  left: 0;
  bottom:${({scrollerState}) => (scrollerState ?"0" : "-80px" )};
  width: 100%;
  height: 80px;
  padding: 28px;
  background-color: #000;
  transition: bottom ease 0.2s;
`;
const InnerWrapper = styled.div`
  ${theme.positions.spaceBetween};
  align-items: center;
  max-width: 1400px;
  margin: 0 auto;
`;
const CopyRight = styled.p`
  font-size: 1.4rem;
  letter-spacing: -0.56px;
  color: #A0A0A0;
`;
const LogoWrap = styled.div`
  width: 80px;
  img {
    display: block;
    width: 100%;
    height: auto;
  }
`;