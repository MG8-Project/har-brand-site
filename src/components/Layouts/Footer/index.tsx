import styled from 'styled-components';
import { theme } from '../../../styles/theme';
import {
  iconDiscord,
  iconYoutube,
  megaLink,
  iconX,
} from '../../../assets/images';
import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-router-dom';

interface ScrollProps {
  scrollerState: boolean;
}

const snsLinks = [
  {
    href: 'https://discord.gg/megalink',
    src: iconDiscord,
    alt: 'Discord',
  },
  {
    href: 'https://www.youtube.com/@Megalink_MG8',
    src: iconYoutube,
    alt: 'YouTube',
  },
  {
    href: 'https://twitter.com/MegalinkMG8',
    src: iconX,
    alt: 'X',
  },
];

export default function Footer({ scrollerState }: ScrollProps) {
  const isMobile = useMediaQuery({
    query: '(max-width: 600px)',
  });

  const Responsive = useMediaQuery({
    query: '(min-width: 601px) and (max-width: 1024px)',
  });

  return (
    <FooterWrapper scrollerState={scrollerState}>
      <InnerWrapper>
        <LogoWrap>
          <img src={megaLink} alt="메가링크 로고" />
        </LogoWrap>
        <FooterInfoText>
          {!Responsive && (
            <PrivacyTextWrapper>
              <PrivacyText
                href="https://har.mega8.io/note/terms/personal/en_us/index.html"
                target="_blank"
              >
                Privacy Policy
              </PrivacyText>
              <Divider />
              <EmailText>CS@mega8.io</EmailText>
            </PrivacyTextWrapper>
          )}
          <CopyRight>ⓒ 2023 MEGALINK CO., LTD. All RIGHTS RESERVED</CopyRight>
          {isMobile && (
            <LinkSnsBox>
              {snsLinks.map((link, index) => (
                <LinkItem key={index}>
                  <Link to={link.href} target="_blank">
                    <img src={link.src} alt={link.alt} />
                  </Link>
                </LinkItem>
              ))}
            </LinkSnsBox>
          )}
        </FooterInfoText>

        {Responsive && (
          <LinkSns>
            <LinkSnsBox>
              {snsLinks.map((link, index) => (
                <LinkItem key={index}>
                  <Link to={link.href} target="_blank">
                    <img src={link.src} alt={link.alt} />
                  </Link>
                </LinkItem>
              ))}
            </LinkSnsBox>
            <PrivacyTextWrapper>
              <PrivacyText
                href="https://har.mega8.io/note/terms/personal/en_us/index.html"
                target="_blank"
              >
                Privacy Policy
              </PrivacyText>
              <Divider />
              <EmailText>CS@mega8.io</EmailText>
            </PrivacyTextWrapper>
          </LinkSns>
        )}
      </InnerWrapper>
    </FooterWrapper>
  );
}

const FooterWrapper = styled.footer<ScrollProps>`
  position: fixed;
  left: 0;
  bottom: ${({ scrollerState }) => (scrollerState ? '0' : '-114px')};
  width: 100%;
  height: 114px;
  padding: 32px 20px;
  background-color: #000;
  transition: bottom ease 0.2s;
  @media ${theme.mq.tablet} {
    position: static;
    height: 127px;
    padding: 32px 56px;
    @media ${theme.mq.mobile} {
      height: 186px;
      padding: 24px 49px 24px 36px;
    }
  }
`;
const InnerWrapper = styled.div`
  ${theme.positions.spaceBetween};
  align-items: center;
  max-width: 1400px;
  margin: 0 auto;
  @media ${theme.mq.tablet} {
    position: relative;
    align-items: flex-start;
    flex-direction: column;
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
  width: 139px;
  img {
    display: block;
    width: 208px;
    height: auto;
    @media ${theme.mq.tablet} {
      width: 194.6px;
    }
    @media ${theme.mq.mobile} {
      width: 138.75px;
    }
  }
`;
const LinkSns = styled.ul`
  position: absolute;
  right: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
  text-align: end;
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
const LinkSnsBox = styled.div`
  display: flex;
  gap: 12px;
  list-style-type: none;
  @media ${theme.mq.tablet} {
    justify-content: flex-end;
  }
  @media ${theme.mq.mobile} {
    justify-content: flex-start;
    margin-top: 12px;
  }
`;

const FooterInfoText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  text-align: end;
  color: #a0a0a0;
  @media ${theme.mq.mobile} {
    text-align: left;
    gap: 12px;
  }
`;
const PrivacyTextWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  @media ${theme.mq.mobile} {
    justify-content: flex-start;
  }
`;

const Divider = styled.span`
  background: #4a4a4a;
  width: 1px;
  height: 11px;
  margin: 0px 8px;
`;
const PrivacyText = styled.a`
  color: #a0a0a0;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.56px;
  cursor: pointer;
  &:hover {
    color: #cacaca;
  }
  @media ${theme.mq.mobile} {
    font-size: 12px;
  }
`;
const EmailText = styled.a`
  color: #a0a0a0;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.56px;

  @media ${theme.mq.mobile} {
    font-size: 12px;
  }
`;
