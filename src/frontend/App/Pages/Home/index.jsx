import styled from "styled-components";

//styles
const HomeStyled = styled.div`
    h1 {
        display: none;
    }
`;

// component
import Meta from "@App/Core/components/Meta";
import Inset from "@App/Layout/Inset";
import Slideshow from "./Slideshow";
import Tabbed from "./Tabbed";
import YouTubePlayer from "./YouTubePlayer";

// component
const Home = () => {
    return (
        <HomeStyled>
            <Slideshow />

            <main>
                <Inset>
                    <Meta />
                    <h1>Home</h1>
                    <Tabbed />
                    <YouTubePlayer />
                </Inset>
            </main>
        </HomeStyled>
    );
};

export default Home;
