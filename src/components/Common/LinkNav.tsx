import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { theme } from '../../styles/theme';
import { iconDiscord, iconYoutube, iconX } from '../../assets/images';
interface ScrollProps {
  scrollerState: boolean;
}

const SNS_LINK = [
  { href: 'https://discord.gg/megalink', icon: iconDiscord },
  { href: 'https://www.youtube.com/@Megalink_MG8', icon: iconYoutube },
  { href: 'https://twitter.com/MegalinkMG8', icon: iconX, width: 40 },
];
export default function LinkNav({ scrollerState }: ScrollProps) {
  return (
    <LinkBar scrollerState={scrollerState}>
      {SNS_LINK.map((link, index) => (
        <li key={index}>
          <Link to={link.href} target="_blank">
            <img src={link.icon} alt="" width={link.width || 'auto'} />
          </Link>
        </li>
      ))}
    </LinkBar>
  );
}
const LinkBar = styled.ul<ScrollProps>`
  position: fixed;
  z-index: 2000;
  bottom: ${({ scrollerState }) => (scrollerState ? '154px' : '40px')};
  right: 80px;
  display: flex;
  gap: 16px;
  transition: all ease 0.2s;
  li {
    a {
      display: block;
      img {
        display: block;
      }
    }
  }
  @media ${theme.mq.tablet} {
    display: none;
  }
`;
