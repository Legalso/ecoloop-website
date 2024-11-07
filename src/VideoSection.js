import React from "react";
import Video from "./Video"; 
import "./Video.css"; 

const VideoSection = () => {
  return (
    <div className="video-section">
      <div className="videos-container">
        <Video videoUrl="https://www.youtube.com/embed/0jcIf_X_498?si=qFRUjtrZivitZzzF" />
        <Video videoUrl="https://www.youtube.com/embed/XKDj9xHhSWM?si=UqzwJOqKNHdxZyil" />
      </div>
    </div>
  );
};

export default VideoSection;
