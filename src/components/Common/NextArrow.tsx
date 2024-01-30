import styled from "styled-components";
import SvgIcons from "../Common/SvgIcons";

export default function NextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <StyledSelf className={className} onClick={onClick}>
      <SvgIcons type={"next"} />
    </StyledSelf>
  );
}
const StyledSelf = styled.button`
  right: 0;
  width: 60px;
  height: 60px;
  padding: 0;
  svg {
    path {
      transition: all 0.3s ease;
    }
  }
  &:hover {
    svg {
      .path1 {
        filter: drop-shadow(0px 0px 5px rgba(255, 255, 255, 0.9));
      }
    }
  }

  &:before {
    display: none;
  }
  &.slick-disabled {
    pointer-events: none;
    svg {
      path {
        &.path1 {
          fill: #363535;
        }
        &.path2 {
          fill: #4a4a4a;
        }
      }
    }
  }
`;
