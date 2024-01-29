import styled from "styled-components";
import { theme } from "../../../styles/theme";
import { iconDiscord, iconYoutube, mantiscoLogo } from "../../../assets/images";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";

interface ScrollProps {
  scrollerState: boolean;
}

export default function Footer({ scrollerState }: ScrollProps) {
  const isTablet = useMediaQuery({
    query: "(max-width: 1024px)",
  });
  return (
    <FooterWrapper scrollerState={scrollerState}>
      <InnerWrapper>
        <CopyRight>©2024 MANTISCO CO., LTD. ALL RIGHTS RESERVED</CopyRight>
        <LogoWrap>
          <img src={mantiscoLogo} alt="멘티스코 로고" />
        </LogoWrap>
        {isTablet && (
          <LinkSns>
            <LinkItem>
              <Link to="https://discord.gg/carrieverseofficial" target="_blank">
                <img src={iconDiscord} alt="" />
              </Link>
            </LinkItem>
            <LinkItem>
              <Link
                to="https://www.youtube.com/@CarrieVerseOfficial"
                target="_blank"
              >
                <img src={iconYoutube} alt="" />
              </Link>
            </LinkItem>
          </LinkSns>
        )}
      </InnerWrapper>
    </FooterWrapper>
  );
}

const FooterWrapper = styled.footer<ScrollProps>`
  position: fixed;
  left: 0;
  bottom: ${({ scrollerState }) => (scrollerState ? "0" : "-80px")};
  width: 100%;
  height: 80px;
  padding: 28px;
  background-color: #000;
  transition: bottom ease 0.2s;
  @media ${theme.mq.tablet} {
    position: static;
    height: 132px;
    padding: 32px 40px;
  }
`;
const InnerWrapper = styled.div`
  ${theme.positions.spaceBetween};
  align-items: center;
  max-width: 1400px;
  margin: 0 auto;
  @media ${theme.mq.tablet} {
    position: relative;
    padding-top: 12px;
    align-items: flex-start;
    flex-direction: column-reverse;
    gap: 16px;
  }
`;
const CopyRight = styled.p`
  font-size: 1.4rem;
  letter-spacing: -0.56px;
  color: ${theme.colors.txGray};
  @media ${theme.mq.tablet} {
    font-size: 14px;
  }
  @media ${theme.mq.mobile} {
    font-size: 12px;
  }
`;
const LogoWrap = styled.div`
  width: 80px;
  img {
    display: block;
    width: 100%;
    height: auto;
  }
`;
const LinkSns = styled.ul`
  position: absolute;
  right: 0;
  top: 0;
  display: flex;
  gap: 12px;
`;
const LinkItem = styled.li`
  width: 36px;
  height: 36px;
  a {
    display: block;
    img {
      display: block;
      width: 100%;
    }
  }
`;
