import SvgIcons from "../Common/SvgIcons";
import styled from "styled-components";

export default function PrevArrow(props: any) {
    const { className, style, onClick } = props;
    return (
        <StyledSelf className={className} onClick={onClick}>
            <SvgIcons type={"next"} />
        </StyledSelf>
    );
}
const StyledSelf = styled.button`
  left: 0;
  width: 60px;
  height: 60px;
  padding: 0;
  &:before {
    display: none;
  }
  
  svg {
    transform: rotate(180deg);
    path {
      transition: fill .3s ease;
    }
  }

  &.slick-disabled {
    pointer-events: none;
    svg {
      path {
        &.path1 {
          fill: #363535;
        }
        &.path2 {
          fill: #aaa;
        }
      }
    }
  }
`;
