import { useState } from "react";
import styled from "styled-components";

//styles
const SunAndMoonStyled = styled.div`
    img {
        display: block;
        margin: 30px auto;
        padding: solid 20px teal;
        border: solid 20px teal;
        background-color: #014b4b;
    }
`;

const SunAndMoon = () => {
    const [srcState, setSrcState] = useState("/assets/sunAndMoon/moon.png");

    const changeToSun = () => {
        setSrcState("/assets/sunAndMoon/sun.png");
    };
    const changeToMoon = () => {
        setSrcState("/assets/sunAndMoon/moon.png");
    };

    return (
        <main>
            <SunAndMoonStyled>
                <h2>Sun and Moon</h2>
                <img
                    src={srcState}
                    alt="Sun and Moon"
                    onMouseEnter={changeToSun}
                    onMouseLeave={changeToMoon}
                />
            </SunAndMoonStyled>
        </main>
    );
};

export default SunAndMoon;
