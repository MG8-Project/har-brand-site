import styled from "styled-components";
import { iconEpic, mainLogo } from "../../assets/images";
import { theme } from "../../styles/theme";

export default function Intro() {
  return (
    <IntroWrapper id={"0"}>
      <ReactPlayerWrapper>
        <video autoPlay loop muted playsInline>
          <source
            src={"https://har.mega8.io/static/media/har_intro_video.mp4"}
            type="video/mp4"
          />
        </video>
        <IntroOpacityBg />
      </ReactPlayerWrapper>
      <TitleWrap>
        <img src={mainLogo} alt="hunter's arena revolution logo" />
        <BtnComingSoon>
          <BtnEpic>
            <img src={iconEpic} alt="epic game" />
            <p>Log in with Epic Games</p>
          </BtnEpic>
          <BtnText>Coming Soon</BtnText>
        </BtnComingSoon>
      </TitleWrap>
    </IntroWrapper>
  );
}
const IntroWrapper = styled.article`
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
  > img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    object-position: center center;
  }
  @media ${theme.mq.tablet} {
    width: 100%;
    height: 75vw;
    max-height: 768px;
  }
  @media ${theme.mq.mobile} {
    width: 100%;
    height: 100vh;
    max-height: unset;
  }
`;
const ReactPlayerWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */

  video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    object-fit: cover;

    @media ${theme.mq.tablet} {
      width: auto;
      height: auto;
    }
  }
  @media ${theme.mq.tablet} {
    height: 100%;
    overflow: hidden;
    video {
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      height: calc(100% + 1px);
    }
  }
`;
const IntroOpacityBg = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  background: linear-gradient(
    180deg,
    rgba(20, 20, 20, 0.1) 3.19%,
    rgba(20, 20, 20, 0.8) 100%
  );
  z-index: 1;
`;
const TitleWrap = styled.div`
  ${theme.positions.flexColumnY};
  gap: 64px;
  position: absolute;
  top: 35.4%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;

  > img {
    display: block;
    width: 536px;
  }

  @media ${theme.mq.tablet} {
    top: 25.5%;
    gap: 17.3828vw;
    > img {
      width: 32.0313vw;
    }
  }
  @media ${theme.mq.mobile} {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 50%;
    gap: unset;
    > img {
      position: absolute;
      top: 23.125%;
      width: 66.6667vw;
    }
  }
`;
const BtnComingSoon = styled.button`
  position: relative;
  width: 276px;
  height: 56px;
  padding: 0;
  border-radius: 2px;
  background-color: #2c2c2c;
  overflow: hidden;
  @media ${theme.mq.tablet} {
    width: 240px;
    height: 48px;
  }
  @media ${theme.mq.mobile} {
    position: absolute;
    bottom: 17.7778vw;
    width: 240px;
    height: 48px;
  }
`;
const BtnEpic = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
  padding: 0 8px;
  > img {
    display: block;
    width: 44px;
    padding: 0 11px;
    height: auto;
  }
  p {
    font-size: 1.8rem;
    font-weight: 500;
  }
  @media ${theme.mq.tablet} {
    padding: 0 6px;
    gap: 0;
    > img {
      width: 40px;
    }
    p {
      font-size: 16px;
    }
  }
`;
const BtnText = styled.p`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  backdrop-filter: blur(1.5px);
  ${theme.positions.flexCenterXY};
  font-size: 1.8rem;
  font-weight: 600;
  color: ${theme.colors.tx};

  @media ${theme.mq.tablet} {
    font-size: 16px;
  }
`;
