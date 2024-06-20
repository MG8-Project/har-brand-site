import styled from 'styled-components';
import { galleryBg } from '../../assets/images';
import { theme } from '../../styles/theme';
import Title from '../Common/Title';
import { useState } from 'react';
import useModal from '../../hooks/useModal';
import CommonModal from '../Common/CommonModal';
import GallerySlide from './GallerySlide';
import { useMediaQuery } from 'react-responsive';
import useViewPortSize from '../../hooks/useViewPortSize';

export default function Gallery() {
  const getImage = (imgName: string) => {
    return require(`../../assets/images/gallery/${imgName}.jpg`);
  };
  const screenshotsArray = Array.from({ length: 12 }, (_, index) => index + 1);
  const [selectedItem, setSelectedItem] = useState(0);
  const [isSlideModalOpen, openSlideModal, closeSlideModal] = useModal(false);
  const [isHover, setIsHover] = useState(false);
  const isTablet = useMediaQuery({
    query: '(max-width: 1024px)',
  });
  const isMobile = useMediaQuery({
    query: '(max-width: 600px)',
  });
  const handleClickItem = (index: number) => {
    setSelectedItem(index);
    openSlideModal();
  };
  const { viewHeight } = useViewPortSize();
  return (
    <GalleryWrapper id={'1'}>
      <Title>Screenshots</Title>
      <ScreenshotLists className={isHover && !isTablet ? 'dark' : ''}>
        {screenshotsArray.map((item, index) => (
          <ScreenshotItem
            key={index}
            onClick={() => handleClickItem(index)}
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
          >
            <img
              src={getImage(`gallery_img_${index + 1}`)}
              alt="gallery image"
            />
          </ScreenshotItem>
        ))}
      </ScreenshotLists>
      {isSlideModalOpen && (
        <CommonModal
          width={'100vw'}
          modalIsOpen={isSlideModalOpen}
          closeModal={closeSlideModal}
          closeIcon={true}
        >
          <GallerySlide selectedItem={selectedItem} />
        </CommonModal>
      )}
    </GalleryWrapper>
  );
}

const GalleryWrapper = styled.article`
  width: 100%;
  height: 100vh;
  min-height: 1080px;
  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url(${galleryBg});
  background-size: cover;
  ${theme.positions.flexColumnY};
  justify-content: center;
  row-gap: 68px;

  @media ${theme.mq.tablet} {
    height: fit-content;
    min-height: unset;
    max-height: 768px;
    padding-top: 7.4219vw;
    row-gap: 6.6406vw;
    justify-content: flex-start;
  }
  @media ${theme.mq.mobile} {
    max-height: unset;
    height: fit-content;
    padding-top: 64px;
    row-gap: 34px;
    background-position: 55% bottom;
  }
`;

const ScreenshotLists = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  padding: 0 20px;
  max-width: 1400px;

  &.dark {
    li {
      img {
        filter: brightness(0.7);
      }
    }
  }
  @media ${theme.mq.tablet} {
    width: 100%;
    padding: 0 56px 145px;
  }
  @media ${theme.mq.mobile} {
    grid-template-columns: repeat(2, 1fr);
    padding: 0 20px 40px;
    gap: 8px;
  }
`;
const ScreenshotItem = styled.li`
  transition: transform 0.5s ease;
  cursor: pointer;
  img {
    width: 100%;
    filter: brightness(1);
    transition: filter 0.5s ease;
    border: 0.5px solid #303843;
  }
  &:hover {
    transform: scale(1.05);
    img {
      filter: brightness(1) !important;
    }
  }
  @media ${theme.mq.tablet} {
    &:hover {
      transform: unset;
    }
  }
`;
