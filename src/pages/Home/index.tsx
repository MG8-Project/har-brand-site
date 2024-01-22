import styled from "styled-components";
import Footer from "../../components/Layouts/Footer";
import Body from "../../components/Layouts/Body";

export default function Home(): JSX.Element {
    return (
        <HomeWrapper>
            <Body />
            <Footer />
        </HomeWrapper>
    );
}

const HomeWrapper = styled.main`
  width: 100%;
  overflow: hidden;
`;
