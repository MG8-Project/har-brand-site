import styled from 'styled-components';
import { iconEpic, mainLogo, iconSteam, dateText } from '../../assets/images';
import { theme } from '../../styles/theme';

interface BtnComingSoonProps {
  first: boolean;
}

const BTN_INFO = [
  {
    img: iconSteam,
    text: 'Steam',
    link: 'https://store.steampowered.com/app/3013930/Hunters_Arena_Revolution/',
    alt: 'steam game',
  },
  { img: iconEpic, text: 'Coming Soon', alt: 'epic game' },
];

export default function Intro() {
  return (
    <IntroWrapper id={'0'}>
      <ReactPlayerWrapper>
        <video autoPlay loop muted playsInline>
          <source src={'/static/media/har_intro_video.mp4'} type="video/mp4" />
        </video>
        <IntroOpacityBg />
      </ReactPlayerWrapper>
      <TitleWrap>
        <img src={mainLogo} alt="hunter's arena revolution logo" />
        <img src={dateText} alt="" />
        <ButtonWrapper>
          {BTN_INFO.map((item, index) => (
            <a href={item.link} key={index} target="_blank">
              <BtnComingSoon first={index === 0}>
                <img src={item.img} alt={item.alt} />
                <BtnText>{item.text}</BtnText>
              </BtnComingSoon>
            </a>
          ))}
        </ButtonWrapper>
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
  padding-bottom: 56.25%;

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
  /* gap: 60px; */
  position: absolute;
  top: 21.4%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;

  > img {
    display: block;
    width: 424px;
    &:nth-child(2) {
      width: 253px;
      height: 72px;
      margin: 70px 0px 40px;
    }
  }

  @media ${theme.mq.tablet} {
    top: 25.5%;
    > img {
      width: 32.0313vw;
      &:nth-child(2) {
        width: 253px;

        top: 50%;
        margin: 70px 0px 40px;
      }
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
const BtnComingSoon = styled.button<BtnComingSoonProps>`
  width: 240px;
  height: 56px;
  border-radius: 2px;
  background: rgba(0, 0, 0, 0.7);
  filter: brightness(0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  cursor: default;

  /* 조건부 스타일링 */
  ${(props) =>
    props.first &&
    `
    cursor: pointer;
    filter: brightness(1);
    border: 1px solid;
    border-image: 
      linear-gradient(to right, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0) 50%, rgba(255, 255, 255, 0.5) 100%);
    border-image-slice: 1;
    border-radius: 2px;
    &:hover {
      box-shadow: 0px 0px 6px 0px rgba(255, 255, 255, 0.3);
    }
  `}

  @media ${theme.mq.tablet} {
    width: 216px;
    height: 48px;
  }
  @media ${theme.mq.mobile} {
    width: 200px;
    height: 44px;
  }
`;
const BtnText = styled.p`
  ${theme.positions.flexCenterXY};
  font-size: 1.8rem;
  font-weight: 500;
  color: ${theme.colors.tx};

  @media ${theme.mq.tablet} {
    font-size: 16px;
  }
  @media ${theme.mq.mobile} {
    font-size: 14px;
  }
`;
const ButtonWrapper = styled.div`
  display: flex;
  gap: 20px;

  @media ${theme.mq.mobile} {
    position: absolute;
    flex-direction: column;
    bottom: 10%;
    gap: 8px;
  }
`;
