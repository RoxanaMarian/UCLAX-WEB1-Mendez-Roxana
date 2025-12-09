import PropTypes from "prop-types";

import styled from "styled-components";

//styles
const SlideStyled = styled.div``;

// component
const Slide = ({ slide }) => {
    const { src, title } = slide;

    return (
        <SlideStyled>
            <img src={src} alt={title} />
            <p className="legend">{title}</p>
        </SlideStyled>
    );
};

export default Slide;

// prop-types
Slide.propTypes = {
    slide: PropTypes.object.isRequired,
};
