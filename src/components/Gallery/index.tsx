import styled from "styled-components";
import {galleryBg, iconDeco} from "../../assets/images";
import {theme} from "../../styles/theme";
import Title from "../Common/Title";
import {useState} from "react";
import useModal from "../../hooks/useModal";
import CommonModal from "../Common/CommonModal";
import GallerySlide from "./GallerySlide";

export default function Gallery() {
    const getImage = (imgName: string) => {
        return require(`../../assets/images/gallery/${imgName}.jpg`)
    };
    const screenshotsArray = Array.from({ length: 12 }, (_, index) => index + 1);
    const [selectedItem, setSelectedItem] = useState(0);
    const [isSlideModalOpen, openSlideModal, closeSlideModal] =
        useModal(false);
    const handleClickItem = (index: number) => {
        setSelectedItem(index);
        openSlideModal();
    }
    return (
        <GalleryWrapper id={"1"}>
            <img src={galleryBg} alt={"screen shots"} />
            <ContentWrap>
                <Title>Screenshots</Title>
                <ScreenshotLists>
                    {screenshotsArray.map((item, index) => (
                        <ScreenshotItem key={index} onClick={() =>handleClickItem(index)}>
                            <img src={getImage(`gallery_img_${index+1}`)} alt="gallery image"/>
                        </ScreenshotItem>
                    ))}
                </ScreenshotLists>
                {isSlideModalOpen && (
                    <CommonModal width={"100vw"} height={"100%"} modalIsOpen={isSlideModalOpen} closeModal={closeSlideModal} closeIcon={true}>
                        <GallerySlide selectedItem={selectedItem} />
                    </CommonModal>
                )}
            </ContentWrap>
        </GalleryWrapper>
    );
}

const GalleryWrapper = styled.article`
  width: 100%;
  height: 100vh;
  min-height: 1080px;
  position: relative;
  img {
    object-fit: cover;
    width: 100%;
    height: calc(100% + 1px);
  }
`;
const ContentWrap = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  ${theme.positions.flexColumnY};
  justify-content: center;
  row-gap: 68px;
`;

const ScreenshotLists = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  padding: 0 20px;
  width: 1400px;
`;
const ScreenshotItem = styled.li`
  position: relative;
  width: 328px;
  height: 184px;
  transition: transform .3s ease;
  cursor: pointer;
  img {
    width: 100%;
    filter: brightness(0.7);
    transition: filter .3s ease;
    
  }
  &:hover {
    transform: scale(1.1);
    img {
      filter: brightness(1);
    }
  }
  
`;
