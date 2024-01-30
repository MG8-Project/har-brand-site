import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PrevArrow from "../Common/PrevArrow";
import NextArrow from "../Common/NextArrow";
import { theme } from "../../styles/theme";

export default function GallerySlide({
  selectedItem,
}: {
  selectedItem: number;
}) {
  const slidesArray = Array.from({ length: 12 }, (_, index) => index + 1);
  const getImage = (imgName: string) => {
    return require(`../../assets/images/gallery/${imgName}.jpg`);
  };
  const settingsSlider = {
    infinite: false,
    slidesToShow: 1,
    swipe: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    initialSlide: selectedItem,
    dots: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          infinite: true,
          arrows: false,
          swipeToSlide: true,
        },
      },
    ],
  };
  return (
    <GallerySlideWrapper>
      <Slider {...settingsSlider}>
        {slidesArray.map((list, index) => (
          <SlideItem key={index}>
            <img
              src={getImage(`gallery_img_${index + 1}`)}
              alt="gallery image"
            />
          </SlideItem>
        ))}
      </Slider>
    </GallerySlideWrapper>
  );
}

const GallerySlideWrapper = styled.div`
  width: 100%;
  height: 100%;
  .slick-slider {
    position: relative;
    width: 1584px;
    height: 788px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .slick-track {
    height: 100%;
  }
  .slick-list {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 1400px;
    height: auto;
    overflow: hidden;
  }
  .slick-dots {
    display: flex !important;
    justify-content: center;
    gap: 10px;
    height: auto;
    bottom: -68px;
    li {
      width: 12px;
      height: 12px;
      margin: 0;
    }
    button {
      width: 100%;
      height: 100%;
      background-color: ${theme.colors.bg.dots};
      border-radius: 50%;
      padding: 0;
      &:before {
        display: none;
      }
    }
    li.slick-active {
      button {
        background-color: ${theme.colors.tx};
      }
    }
  }
  @media ${theme.mq.tablet} {
    .slick-slider {
      width: 100%;
      height: 56.4453vw;
    }
    .slick-list {
      transform: translate(-50%, -50%);
      width: 100%;
    }

    .slick-dots {
      bottom: -44px;
      li {
        width: 8px;
        height: 8px;
      }
    }
  }
  @media ${theme.mq.mobile} {
    .slick-slider {
      height: 100vh;
    }
    .slick-dots {
      bottom: 62px;
      gap: 8px;
      li {
        width: 6px;
        height: 6px;
      }
    }
  }
`;

const SlideItem = styled.div`
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  @media ${theme.mq.tablet} {
    width: 100vw;
    height: 56.4453vw;
  }
`;
