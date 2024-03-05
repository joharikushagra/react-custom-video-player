import React, { useState } from "react";
import { videoData } from "../data";
import Playlist from "../components/Playlist";
import Player from "../components/Player";

const VideoPage = () => {
  const [videos, setVideos] = useState(videoData.categories[0]?.videos);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const video = videos[currentVideoIndex];
  const handleNextVideoPlay = () => {
    if (currentVideoIndex < videos.length - 1) {
      setCurrentVideoIndex((prevIndex) => prevIndex + 1);
    } else {
      setCurrentVideoIndex(0);
    }
  };
  const selectVideo = (id) => {
    setCurrentVideoIndex(id);
  };

  return (
    <div className="flex justify-center flex-row h-[calc(100%-56px)]">
      <div className="w-full max-w-[1280px] flex flex-col lg:flex-row mt-2 pt-2">
        <div className="flex flex-col lg:w-[calc(100%-400px)] xl:w-[calc(100%-400px)] px-4 py-3 lg:py-6 overflow-y-auto">
          <div className="w-full h-max">
          <div className="w-full h-max">
            <Player
              src={video?.sources}
              thumbnail={video?.thumb}
              title={video.title}
              playNext={handleNextVideoPlay}
            />
          </div>
            <div className="flex gap-2 flex-col px-2 md:px-4">
              <div className="text-white font-bold text-base md:text-xl mt-4 line-clamp-2">
                {video?.title}
              </div>
              <div className="text-white/[0.7] text-sm">{video?.subtitle}</div>
              <div className="text-white text-xs md:text-base  bg-neutral-800 rounded-md px-4 py-2">
                {video?.description}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start flex-1  h-max mt-6 mr-2 rounded-lg border-2 border-neutral-700">
          <div className="font-extrabold text-neutral-200 text-xl px-4 mb-3 py-2 bg-neutral-800 h-full w-full">My Mix</div>
          <div className="w-full h-[360px] px-4">
            <Playlist
              videos={videos}
              selectVideo={selectVideo}
              currentVideoIndex={currentVideoIndex}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPage;
