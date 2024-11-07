import React from "react";
import "./Video.css";

const Video = ({ videoUrl }) => {
  const defaultUrl =
    "https://www.youtube.com/embed/0jcIf_X_498?si=qFRUjtrZivitZzzF";
  return (
    <div className="video-container">
      <iframe
        width="560"
        height="315"
        src={videoUrl || defaultUrl} // Use the passed URL or the default one
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="YouTube video"
      ></iframe>
    </div>
  );
};

export default Video;
