import styled from "styled-components";
import { galleryBg, iconDeco } from "../../assets/images";
import { theme } from "../../styles/theme";
import Title from "../Common/Title";
import { useState } from "react";
import useModal from "../../hooks/useModal";
import CommonModal from "../Common/CommonModal";
import GallerySlide from "./GallerySlide";

export default function Gallery() {
  const getImage = (imgName: string) => {
    return require(`../../assets/images/gallery/${imgName}.jpg`);
  };
  const screenshotsArray = Array.from({ length: 12 }, (_, index) => index + 1);
  const [selectedItem, setSelectedItem] = useState(0);
  const [isSlideModalOpen, openSlideModal, closeSlideModal] = useModal(false);
  const handleClickItem = (index: number) => {
    setSelectedItem(index);
    openSlideModal();
  };
  return (
    <GalleryWrapper id={"1"}>
      <Title>Screenshots</Title>
      <ScreenshotLists>
        {screenshotsArray.map((item, index) => (
          <ScreenshotItem key={index} onClick={() => handleClickItem(index)}>
            <img
              src={getImage(`gallery_img_${index + 1}`)}
              alt="gallery image"
            />
          </ScreenshotItem>
        ))}
      </ScreenshotLists>
      {isSlideModalOpen && (
        <CommonModal
          width={"100vw"}
          height={"100%"}
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
  background: url(${galleryBg}) no-repeat center;
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
    padding-top: 64px;
    row-gap: 34px;
  }
`;

const ScreenshotLists = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  padding: 0 20px;
  width: 1400px;
  @media ${theme.mq.tablet} {
    width: 100%;
    padding: 0 20px 145px;
  }
  @media ${theme.mq.mobile} {
    grid-template-columns: repeat(2, 1fr);
    padding: 0 20px 40px;
  }
`;
const ScreenshotItem = styled.li`
  transition: transform 0.3s ease;
  cursor: pointer;
  img {
    width: 100%;
    filter: brightness(0.7);
    transition: filter 0.3s ease;
  }
  &:hover {
    transform: scale(1.1);
    img {
      filter: brightness(1);
    }
  }
`;
