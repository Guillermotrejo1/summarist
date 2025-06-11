import React, { useRef } from "react"; // Removed unnecessary imports

interface ProgressBarProps {
  currentTime: number;
  duration: number;
  onSeek: (time: number) => void;
}

export const ProgressBar = ({
  currentTime,
  duration,
  onSeek,
}: ProgressBarProps) => {
  const progressBarRef = useRef<HTMLInputElement>(null);

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  const handleProgressChange = () => {
    if (progressBarRef.current) {
      const newTime = Number(progressBarRef.current.value);
      onSeek(newTime);
    }
  };

  const handleProgressClick = (event: React.MouseEvent) => {
    const bar = progressBarRef.current;
    if (!bar) return;

    const rect = bar.getBoundingClientRect();
    const clickX = event.clientX - rect.left;
    const barWidth = rect.width;

    const fraction = clickX / barWidth;
    const newTime = fraction * duration; // Use the passed duration

    onSeek(newTime);
  };

  return (
    <div className="flex items-center justify-center ml-32 w-1/3">
      <span className="mr-2">{formatTime(currentTime)}</span>
      <input
        className="max-w-[80%] bg-gray-300"
        type="range"
        ref={progressBarRef}
        value={currentTime} // Use value for controlled component
        min="0"
        max={duration}
        onChange={handleProgressChange}
        onClick={handleProgressClick}
      />
      <span className="ml-2">{formatTime(duration)}</span>
    </div>
  );
};

export default ProgressBar;