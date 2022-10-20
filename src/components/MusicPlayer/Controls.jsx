import React from "react";
import { FaForward, FaBackward } from "react-icons/fa";
import {
  BsArrowRepeat,
  BsFillPauseFill,
  BsFillPlayFill,
  BsShuffle,
} from "react-icons/bs";

const Controls = ({
  isPlaying,
  repeat,
  setRepeat,
  shuffle,
  setShuffle,
  currentSongs,
  handlePlayPause,
  handlePrevSong,
  handleNextSong,
}) => (
  <div className="flex items-center justify-around space-x-6">
    <BsArrowRepeat
      size={18}
      color={repeat ? "black" : "#5b5c61"}
      onClick={() => setRepeat((prev) => !prev)}
      className="hidden sm:block cursor-pointer hover:animate-spin"
    />
    <div className="relative w-[32px] h-[32px] bg-[#e8e8e8] rounded-full flex-shrink-0 border-2 border-gray-500/20 cursor-pointer hover:bg-gray-100/20">
      {currentSongs?.length && (
        <FaBackward
          size={15}
          color="#5b5c61"
          className="absolute top-[6px] left-[5px]"
          onClick={handlePrevSong}
        />
      )}
    </div>
    <div className="relative w-[40px] h-[40px] bg-[#e8e8e8] rounded-full flex-shrink-0 border-2 border-gray-500/20 cursor-pointer hover:bg-gray-100/20">
      {isPlaying ? (
        <BsFillPauseFill
          size={30}
          color="#5b5c61"
          onClick={handlePlayPause}
          className="absolute top-[3px] left-[3px]"
        />
      ) : (
        <BsFillPlayFill
          size={30}
          color="#5b5c61"
          onClick={handlePlayPause}
          className="absolute top-[3px] left-[5px]"
        />
      )}
    </div>
    <div className="relative w-[32px] h-[32px] bg-[#e8e8e8] rounded-full flex-shrink-0 border-2 border-gray-500/20 cursor-pointer hover:bg-gray-100/20">
      {currentSongs?.length && (
        <FaForward
          size={15}
          color="#5b5c61"
          className="absolute top-[6px] left-[8px]"
          onClick={handleNextSong}
        />
      )}
    </div>
    <BsShuffle
      size={15}
      color={shuffle ? "black" : "#5b5c61"}
      onClick={() => setShuffle((prev) => !prev)}
      className="hidden sm:block cursor-pointer hover:animate-pulse"
    />
  </div>
);

export default Controls;
