import { NavLink } from "react-router-dom";

// component
const PrimaryMenu = () => {
    return (
        <nav>
            <NavLink to="">Home</NavLink>
            <NavLink to="/staff">Eras</NavLink>
            <NavLink to="/contact">Fan Mail</NavLink>
            <NavLink to="/course-work">Course Work</NavLink>
        </nav>
    );
};

export default PrimaryMenu;
