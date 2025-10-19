import { useMediaQuery } from "@App/Theme/media/MediaQueryContext";

// component
import Small from "./Small";
import MediumLarge from "@App/Layout/Header/MediumLarge";

// component
const Header = () => {
    const { jsMedia } = useMediaQuery();
    return <header>{jsMedia.isSmall ? <Small /> : <MediumLarge />}</header>;
};

export default Header;
