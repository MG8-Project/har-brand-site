import styled from "styled-components";
import {iconEpic, mainLogo} from "../../assets/images";
import {theme} from "../../styles/theme";

export default function Intro() {
    return (
        <IntroWrapper id={"0"}>
            <ReactPlayerWrapper>
                <video autoPlay loop muted playsInline>
                    <source src={"https://har.mega8.io/static/media/har_intro_video.mp4"} type="video/mp4"/>
                </video>
                <IntroOpacityBg/>
            </ReactPlayerWrapper>
            <TitleWrap>
                <img src={mainLogo} alt="hunter's arena revolution logo"/>
                <BtnComingSoon>
                    <BtnEpic>
                        <img src={iconEpic} alt="epic game"/>
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
  min-height: 1080px;
  position: relative;
    >img {
      object-fit: cover;
      width: 100%;
      height: 100%;
      object-position: center center;
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

    @media (max-width: 768px) {
      width: auto;
      height: auto;
    }
  }
  @media ${theme.mq.tablet}{
    height: 100%;
    overflow: hidden;
    video{
      top:50%;
      left:50%;
      transform: translate(-50%, -50%);
      height:calc(100% + 1px);
    }
  }
`;
const IntroOpacityBg = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  background: linear-gradient(180deg, rgba(20, 20, 20, 0.10) 3.19%, rgba(20, 20, 20, 0.80) 100%);
  z-index: 1;
`
const TitleWrap = styled.div`
  ${theme.positions.flexColumnY};
  gap: 64px;
  position: absolute;
  top: 320px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  
  >img {
    display: block;
    width: 536px;
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
`;
const BtnEpic = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
  padding: 0 8px;
  >img {
    display: block;
    width: 44px;
    padding: 0 11px;
    height: auto;
  }
  p {
    font-size: 1.8rem;
    font-weight: 500;
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
  color: #f5f5f5;
`;