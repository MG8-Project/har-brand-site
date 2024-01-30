import styled from "styled-components";
import Footer from "../../components/Layouts/Footer";
import { useState } from "react";
import ReactPageScroller from "react-page-scroller";
import Intro from "../../components/Intro";
import Gallery from "../../components/Gallery";
import LinkNav from "../../components/Common/LinkNav";
import { useModalStore } from "../../store/ModalStore";
import { useMediaQuery } from "react-responsive";

interface ScrollProps {
  scrollerState: boolean;
}

export default function Home(): JSX.Element {
  const [currentPage, setCurrentPage] = useState(0);
  const [scrollerState, setScrollerState] = useState(false);
  const { isModalOpen } = useModalStore();
  const isTablet = useMediaQuery({
    query: "(max-width: 1024px)",
  });
  const handleBeforePageChange = (number: number) => {
    setCurrentPage(number);
    setScrollerState(false);
  };
  const handleScrollUnavailable = () => {
    if (currentPage === 1) {
      setScrollerState(true);
    }
  };
  return (
    <>
      <BodyWrapper scrollerState={scrollerState}>
        {isTablet ? (
          <>
            <Intro />
            <Gallery />
          </>
        ) : (
          <ReactPageScroller
            customPageNumber={currentPage}
            onBeforePageScroll={handleBeforePageChange}
            handleScrollUnavailable={handleScrollUnavailable}
            renderAllPagesOnFirstRender
            blockScrollDown={isModalOpen}
            blockScrollUp={isModalOpen}
          >
            <Intro />
            <Gallery />
          </ReactPageScroller>
        )}
      </BodyWrapper>
      <Footer scrollerState={scrollerState} />
      <LinkNav scrollerState={scrollerState} />
    </>
  );
}

const BodyWrapper = styled.main<ScrollProps>`
  width: 100%;
  overflow: hidden;
  margin-top: ${({ scrollerState }) => (scrollerState ? "-80px" : "0")};
  transition: all ease 0.2s;
  background-color: #000;
`;
