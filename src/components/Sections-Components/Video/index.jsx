import React from "react";
import './styles.css';

const Video = ({source}) => {
    return (
        <div className="video">
            <video src={ source } controls></video>
        </div>
    )
}

export default Video