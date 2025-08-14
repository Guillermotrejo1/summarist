import React from "react"; // Removed unnecessary imports: useEffect, useRef, useState, axios, useRouter
import { RiForward10Fill } from "react-icons/ri";
import { GrBackTen } from "react-icons/gr";
import { FaCirclePlay } from "react-icons/fa6";
import { FaCirclePause } from "react-icons/fa6";

interface ControlsProps {
  isPlaying: boolean;
  togglePlayPause: () => void;
  skipForward: (seconds: number) => void;
  skipBackward: (seconds: number) => void;
}

export default function Controls({
  isPlaying,
  togglePlayPause,
  skipForward,
  skipBackward,
}: ControlsProps) {
  return (
    <>
      <div className="flex gap-4 items-center xl:ml-32">
        <button onClick={() => skipBackward(10)}> {/* Call skipBackward with 10 seconds */}
          <GrBackTen className="text-[28px]" />
        </button>
        <button onClick={togglePlayPause}>
          {isPlaying ? (
            <FaCirclePause className="text-[40px]" />
          ) : (
            <FaCirclePlay className="text-[40px]" />
          )}
        </button>
        <button onClick={() => skipForward(10)}> {/* Call skipForward with 10 seconds */}
          <RiForward10Fill className="text-[28px]" />
        </button>
      </div>
      {/* Removed the dummy hidden element and the audio ref */}
    </>
  );
}