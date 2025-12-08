import React from "react";
import ReusablePlayer from "../../Core/components/YoutubePlayer";

const HomeVideoSection = () => {
    const homeVideoLink = "https://www.youtube.com/watch?v=KudedLV0tP0";

    return (
        <div
            style={{
                marginTop: "50px",
                borderTop: "1px solid #ccc",
                paddingTop: "20px",
            }}
        >
            <h2>Check Out the Latest!</h2>
            <ReusablePlayer videoUrl={homeVideoLink} />
        </div>
    );
};

export default HomeVideoSection;
