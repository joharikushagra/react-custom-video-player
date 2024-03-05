import React, { useState } from "react";
import PlaylistVideo from "./PlaylistVideo";

const Playlist = ({ videos, selectVideo, currentVideoIndex }) => {
  
  
  return (
    
      videos.map((video, index) => (
        <PlaylistVideo 
          video={video}
          index={index}
          selectVideo={selectVideo}
          currentVideoIndex={currentVideoIndex}
        />
      ))
    
  );
};

export default Playlist;
