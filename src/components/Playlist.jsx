import React, { useState } from "react";
import PlaylistVideo from "./PlaylistVideo";
import {
  List,
  AutoSizer,
  CellMeasurerCache,
  CellMeasurer,
} from "react-virtualized";
import { FaPlay } from "react-icons/fa";

const Playlist = ({ videos, selectVideo, currentVideoIndex }) => {
  const renderer = ({ index, key, parent, style }) => {
    return (
      <CellMeasurer
        key={key}
        cache={cache}
        parent={parent}
        columnIndex={0}
        rowIndex={index}
      >
        {({ registerChild }) => (
          <div
            ref={registerChild}
            key={key}
            style={style}
            onClick={() => selectVideo(videos[index]?.id)}
            className={`flex gap-4 item-center py-2 cursor-pointer hover:scale-95 hover:bg-neutral-800 transition ease-in ${
              currentVideoIndex === videos[index]?.id && "bg-[#062125] p-2"
            }`}
          >
            <div className="flex items-center">
              {currentVideoIndex === videos[index]?.id && (
                <FaPlay className="mr-0.5" />
              )}
              <img
                className="rounded-lg shadow-md"
                src={videos[index].thumb}
                width={100}
                height={100}
                alt="Sample Video JPG"
              />
            </div>
            <div className="text-white">
              <p className="font-bold">{videos[index]?.title}</p>
              <p>{videos[index]?.subtitle}</p>
            </div>
          </div>
        )}
      </CellMeasurer>
    );
  };

  const cache = new CellMeasurerCache({
    fixedWidth: true,
    defaultHeight: 200,
  });

  return (
    <AutoSizer>
      {({ width, height }) => 
      {
        console.log(width,height)
        return (
        <List
          rowHeight={cache?.rowHeight}
          deferredMeasurementCache={cache}
          width={width}
          rowCount={videos?.length}
          height={height}
          rowRenderer={renderer}
          overscanRowCount={1}
        />
      )}}
    </AutoSizer>
  );
};

export default Playlist;
