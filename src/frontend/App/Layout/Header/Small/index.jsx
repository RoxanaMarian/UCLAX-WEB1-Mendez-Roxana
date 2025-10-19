import { useState, useEffect } from "react";

// components
import Hamburger from "./Hamburger";
import Logo from "./Logo";
import PrimaryMenu from "./PrimaryMenu";

// component
const Small = () => {
    const [ShowMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!ShowMenu);
    };

    useEffect(() => {
        if (ShowMenu) {
            document.body.classList.add("modal-open");
        } else {
            document.body.classList.remove("modal-open");
        }

        //cleanup function
        return () => {
            document.body.classList.remove("modal-open");
        };
    }, [ShowMenu]);

    return (
        <div>
            <Hamburger onClick={toggleMenu} />
            <Logo />
            {ShowMenu && <PrimaryMenu setShowMenu={setShowMenu} />}
        </div>
    );
};

export default Small;
