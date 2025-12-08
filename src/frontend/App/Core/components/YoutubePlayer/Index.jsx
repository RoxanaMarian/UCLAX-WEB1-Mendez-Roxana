import React from "react";
import ReactPlayer from "react-player";

const YouTubePlayer = ({ videoUrl }) => {
    return (
        <div className="video-wrapper">
            <ReactPlayer
                src={videoUrl}
                controls={true}
                width="100%"
                height="450px"
            />
        </div>
    );
};

export default YouTubePlayer;
