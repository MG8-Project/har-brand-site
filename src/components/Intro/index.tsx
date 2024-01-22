import styled from "styled-components";
import {iconEpic, mainBg, mainLogo} from "../../assets/images";
import {theme} from "../../styles/theme";

export default function Intro() {
    return (
        <IntroWrapper>
            <img src={mainBg} alt="hunter's arena revolution background image"/>
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
const TitleWrap = styled.div`
  ${theme.positions.flexColumnY};
  gap: 64px;
  position: absolute;
  top: 320px;
  left: 50%;
  transform: translateX(-50%);
  
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
  background-color: #fff;
  border-radius: 2px;
  overflow: hidden;
`;
const BtnEpic = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
  padding: 0 8px;
  >img {
    width: 43px;
  }
  p {
    font-size: 1.8rem;
    font-weight: 500;
  }
`;
const BtnText = styled.p`
  ${theme.positions.flexCenterXY};
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(255, 255, 255, 0.75);
  backdrop-filter: blur(1px);
  font-size: 1.8rem;
  font-weight: 500;
`;