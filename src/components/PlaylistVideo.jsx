import React from "react";
import { FaPlay } from "react-icons/fa";


// not used
const PlaylistVideo = ({ video, index, selectVideo, currentVideoIndex }) => {
  return (
    <div onClick={()=> selectVideo(video?.id)} className={`flex gap-4 item-center py-2 cursor-pointer hover:scale-95 hover:bg-neutral-800 transition ease-in ${(currentVideoIndex === video?.id) && 'bg-[#062125] p-2'}`}>
      <div className="flex items-center">
      {(currentVideoIndex === video?.id) && <FaPlay className="mr-0.5"/>}
        <img
          className="rounded-lg shadow-md"
          src={video.thumb}
          width={100}
          height={100}
          alt="Sample Video JPG"
        />
      </div>
      <div className="text-white">
        <p className="font-bold">{video?.title}</p>
        <p>{video?.subtitle}</p>
      </div>
    </div>
  );
};

export default PlaylistVideo;
