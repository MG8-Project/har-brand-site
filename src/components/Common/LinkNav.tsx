import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { theme } from '../../styles/theme';
import { iconDiscord, iconYoutube, iconX } from '../../assets/images';
interface ScrollProps {
  scrollerState: boolean;
}
export default function LinkNav({ scrollerState }: ScrollProps) {
  return (
    <LinkBar scrollerState={scrollerState}>
      <li>
        <Link to="https://discord.gg/megalink" target="_blank">
          <img src={iconDiscord} alt="" />
        </Link>
      </li>
      <li>
        <Link to="https://www.youtube.com/@Megalink_MG8" target="_blank">
          <img src={iconYoutube} alt="" />
        </Link>
      </li>
      <li>
        <Link to="https://twitter.com/MegalinkMG8" target="_blank">
          <img src={iconX} alt="" width={40} />
        </Link>
      </li>
    </LinkBar>
  );
}
const LinkBar = styled.ul<ScrollProps>`
  position: fixed;
  z-index: 2000;
  bottom: ${({ scrollerState }) => (scrollerState ? '162px' : '40px')};
  right: 80px;
  display: flex;
  transition: all ease 0.2s;
  li {
    a {
      display: block;
      img {
        display: block;
      }
    }
    &:not(:last-child) {
      margin-right: 12px;
    }
  }
  @media ${theme.mq.tablet} {
    display: none;
  }
`;
