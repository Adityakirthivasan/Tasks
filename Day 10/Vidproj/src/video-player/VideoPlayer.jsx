// src/video-player/VideoPlayer.jsx
import React, { useRef, useState } from "react";
import "./VideoPlayerStyle.css";

function VideoPlayer() {
  const videoRef = useRef(null); // Reference to the video element
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  const togglePlayPause = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <div className="video-player-container">
      <h1>React Video Player</h1>
      <div className="video-wrapper">
        <video
          ref={videoRef}
          className="video"
          src="https://www.w3schools.com/html/mov_bbb.mp4" // Sample video
          controls={false}
        />
      </div>
      <div className="controls">
        <button onClick={togglePlayPause} className="control-button">
          {isPlaying ? "Pause" : "Play"}
        </button>
        <button onClick={toggleMute} className="control-button">
          {isMuted ? "Unmute" : "Mute"}
        </button>
      </div>
    </div>
  );
}

export default VideoPlayer;
