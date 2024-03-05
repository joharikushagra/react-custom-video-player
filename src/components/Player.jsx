import React, { useRef } from "react";
import {
  FaPlay,
  FaPause,
  FaStop,
  FaExpand,
  FaCompress,
  FaVolumeUp,
  FaVolumeMute,
  FaSpinner,
} from "react-icons/fa";
import usePlayerStore from "../custom/usePlayerStore";
import CustomButton from "./CustomButton";
import { timeFormatter } from "../utils/timeFormatter";

const Player = ({ src, thumbnail, playNext, title }) => {
  const playerRef = useRef(null);
  const containerRef = useRef();
  const timelineContainerRef = useRef(null);

  const {
    isPlaying,
    isFullScreen,
    progress,
    previewProgress,
    volume,
    isMuted,
    isWaiting,
    currentTime,
    duration,
    togglePlayPause,
    startProgressLoop,
    stopProgressLoop,
    startVideo,
    stopVideo,
    onWaiting,
    onLoadedData,
    handleVideoEnd,
    toggleMute,
    handleVolumeChange,
    changePlaybackSpeed,
    toggleFullScreen,
  } = usePlayerStore(playerRef, containerRef, timelineContainerRef);
  console.log(playerRef.current?.["clientHeight"]);
  return (
    <div className="flex flex-col justify-center h-max" ref={containerRef}>
      <video
        className=" w-full"
        ref={playerRef}
        src={src}
        poster={thumbnail}
        onClick={togglePlayPause}
        onPlay={startProgressLoop}
        onPause={stopProgressLoop}
        onWaiting={onWaiting}
        onPlaying={onLoadedData}
        onEnded={() => handleVideoEnd(playNext)}
        autoPlay
        autoFocus
      />
      <div
        className={`relative bottom-14 opacity-0 w-full h-max p-2 hover:opacity-80 transition ease-in} ${!isPlaying && 'opacity-80'}`}
      >
        <div
          className="px-1 h-2 flex  z-[1000] relative cursor-pointer items-center group/timeline"
          ref={timelineContainerRef}
        >
          <div
            style={{
              "--progress-position": Math.round(progress * 100) / 100 + "%",
              "--preview-position":
                Math.round(previewProgress * 100) / 100 + "%",
            }}
            className="timeline bg-neutral-400 h-1 w-full relative hover:h-2
             before:absolute before:left-0 before:bottom-0 before:top-0 before:bg-slate-300 before:hidden hover:before:block
             after:absolute after:left-0 after:top-0 after:bottom-0 after:bg-red-600 "
          >
            <div className="thumb-indicator absolute bg-red-600 -top-1/2 h-[200%] rounded-full  scale-0 group-hover/timeline:scale-100 -translate-x-2/4 aspect-square transition-all ease-in-out duration-75"></div>
          </div>
        </div>
        <div className="flex text-white items-center justify-between gap-2 px-4 mt-1">

          <div className="absolute w-full h-full bottom-0 left-0 bg-gray-900"></div>
          <CustomButton onClick={togglePlayPause}>
            {isPlaying ? <FaPause /> : <FaPlay />}
          </CustomButton>
          <CustomButton onClick={stopVideo}>
            <FaStop />
          </CustomButton>

          <div className="flex gap-1 z-[1000] flex-grow">
            {timeFormatter(currentTime)}
            {"/"}
            {timeFormatter(duration)}
          </div>

          <div className="flex flex-row gap-2 group/vol items-center">
            <input
              className=" w-[0] origin-right scale-x-0  group-hover/vol:translate-x-1  group-hover/vol:w-24 group-focus-within/vol:w-24 group-focus-within/vol:scale-100 group-hover/vol:scale-100 transition-all"
              type="range"
              min="0"
              max="1"
              step="any"
              value={volume}
              onChange={handleVolumeChange}
            />
            <CustomButton onClick={toggleMute}>
              {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
            </CustomButton>
          </div>
          <CustomButton
            className=" font-extralight text-sm w-10"
            onClick={changePlaybackSpeed}
          >
            1x
          </CustomButton>
          <CustomButton onClick={toggleFullScreen}>
            {isFullScreen ? <FaCompress /> : <FaExpand />}
          </CustomButton>
        </div>
      </div>
    </div>
  );
};

export default Player;
