import styled from "styled-components";

// components
import SharedLogo from "@App/Core/Components/Logo";

//styles
const LogoStyled = styled.div`
    display: flex;
    justify-content: center;

    > div {
        height: 300px;
        display: felx;
        align-items: center;
        padding: 20px;
        max-width: 330px;
    }
`;

// component
const Logo = () => {
    return (
        <LogoStyled>
            <div>
                <SharedLogo />
            </div>
        </LogoStyled>
    );
};

export default Logo;
