import TrackInfo from "./TrackInfo";
import Controls from "./Controls";
import ProgressBar from "./ProgressBar";
import { useEffect, useRef, useState } from "react";

interface AudioPlayerProps {
  audioLink: string;
  title: string;
  author: string;
  imageLink: string; // Add imageLink here for TrackInfo
}

const AudioPlayer = ({ audioLink, title, author, imageLink }: AudioPlayerProps) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.src = audioLink;
      audioRef.current.load(); // Load the new audio source

      const handleTimeUpdate = () => {
        if (audioRef.current) {
          setCurrentTime(audioRef.current.currentTime);
        }
      };
      
      const handleLoadedMetadata = () => {
        setDuration(audioRef.current!.duration);
      };

      const handleEnded = () => {
        setIsPlaying(false);
        setCurrentTime(0); // Reset time when audio ends
      };

      audioRef.current.addEventListener("timeupdate", handleTimeUpdate);
      audioRef.current.addEventListener("loadedmetadata", handleLoadedMetadata);
      audioRef.current.addEventListener("ended", handleEnded);

      // Clean up event listeners on unmount or when audioLink changes
      return () => {
        audioRef.current?.removeEventListener("timeupdate", handleTimeUpdate);
        audioRef.current?.removeEventListener("loadedmetadata", handleLoadedMetadata);
        audioRef.current?.removeEventListener("ended", handleEnded);
      };
    }
  }, [audioLink]);

  // Handle play/pause logic
  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch((e) => console.error("Error playing audio:", e));
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  const togglePlayPause = () => {
    setIsPlaying((prev) => !prev);
  };

  const onSeek = (time: number) => {
    if (audioRef.current) {
      audioRef.current.currentTime = time;
      setCurrentTime(time);
      if (!isPlaying) {
        setIsPlaying(true); // If it was paused, start playing after seeking
      }
    }
  };

  const skipForward = (seconds: number) => {
    if (audioRef.current) {
      audioRef.current.currentTime = Math.min(audioRef.current.currentTime + seconds, duration);
      setCurrentTime(audioRef.current.currentTime); // Update state immediately
    }
  };

  const skipBackward = (seconds: number) => {
    if (audioRef.current) {
      audioRef.current.currentTime = Math.max(audioRef.current.currentTime - seconds, 0);
      setCurrentTime(audioRef.current.currentTime); // Update state immediately
    }
  };

  return (
    <div className="sticky bottom-0 left-0 w-full z-10">
      <div className="h-45 md:h-20 bg-[#042330] flex flex-col md:gap-15 md:flex-row justify-between items-center text-white p-[0.5rem_10px]">
        {/* Pass props to TrackInfo */}
        <TrackInfo title={title} author={author} imageLink={imageLink} />
        <div className="w-full flex justify-center items-center gap-1 m-auto flex-1 md:ml-32 flex-col md:flex-row">
          {/* Pass props and functions to Controls */}
          <Controls
            isPlaying={isPlaying}
            togglePlayPause={togglePlayPause}
            skipForward={skipForward}
            skipBackward={skipBackward}
          />
          {/* ProgressBar props are already correctly set up */}
          <ProgressBar
            currentTime={currentTime}
            duration={duration}
            onSeek={onSeek}
          />
        </div>
        <div className="flex items-center gap-2 text-gray-400"></div>
      </div>
      {/* The single audio element */}
      <audio ref={audioRef} className="hidden" controls={false} />
    </div>
  );
};

export default AudioPlayer;