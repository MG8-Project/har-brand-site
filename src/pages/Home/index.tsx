import styled from "styled-components";
import Footer from "../../components/Layouts/Footer";
import {useState} from "react";
import ReactPageScroller from "react-page-scroller";
import Intro from "../../components/Intro";
import Gallery from "../../components/Gallery";

interface ScrollProps {
    scrollerState: boolean
}


export default function Home(): JSX.Element {
    const [currentPage, setCurrentPage] = useState(0);
    const [scrollerState, setScrollerState] = useState(false)
    const handleBeforePageChange = (number: number) => {
        console.log("페이지 변경", number);
        setCurrentPage(number);
        setScrollerState(false)
    };
    const handleScrollUnavailable = () => {
        if (currentPage === 1) {
            setScrollerState(true)
        }
    }
    return (
        <BodyWrapper scrollerState={scrollerState}>
            <ReactPageScroller
                customPageNumber={currentPage}
                onBeforePageScroll={handleBeforePageChange}
                handleScrollUnavailable={handleScrollUnavailable}
                renderAllPagesOnFirstRender
            >
                <Intro />
                <Gallery />
            </ReactPageScroller>
            <Footer scrollerState={scrollerState} />
        </BodyWrapper>
    );
}

const BodyWrapper = styled.main<ScrollProps>`
  margin-top: ${({ scrollerState }) => (scrollerState ? '-80px' : '0')};
  transition: all ease 0.2s;
`;

const HomeWrapper = styled.main`
  width: 100%;
  overflow: hidden;
`;
