import axios from "axios";

import { useRouter } from "next/router";

import { useEffect, useRef, useState } from "react";

interface Book {
  id: string;
  author: string;
  title: string;
  subTitle: string;
  imageLink: string;
  audioLink: string;
  totalRating: number;
  averageRating: number;
  keyIdeas: number;
  type: string;
  status: string;
  subscriptionRequired: boolean;
  summary: string;
  tags: string[];
  bookDescription: string;
  authorDescription: string;
}

export const ProgressBar = () => {
  const [data, setData] = useState<Book>();
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const router = useRouter();
  const { id } = router.query;
  const progressBarRef = useRef<HTMLInputElement>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      if (id) {
        try {
          const response = await axios.get(
            `https://us-central1-summaristt.cloudfunctions.net/getBook?id=${id}`
          );

          setData(response.data);

          if (audioRef.current) {
            audioRef.current.src = response.data.audioLink;

            audioRef.current.load();
          }
        } catch (error) {
          console.error("Error fetching data", error);
        }
      }
    };

    fetchData();
  }, [id]);

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) return;

    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime);

      if (progressBarRef.current) {
        progressBarRef.current.value = audio.currentTime.toString();
      }
    };

    const handleLoadedMetadata = () => {
      setDuration(audio.duration);

      if (progressBarRef.current) {
        progressBarRef.current.max = audio.duration.toString();
      }
    };

    audio.addEventListener("timeupdate", handleTimeUpdate);

    audio.addEventListener("loadedmetadata", handleLoadedMetadata);

    return () => {
      audio.removeEventListener("timeupdate", handleTimeUpdate);

      audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
    };
  }, [data]);

  const handleProgressChange = () => {
    if (audioRef.current && progressBarRef.current) {
      const newTime = Number(progressBarRef.current.value);

      audioRef.current.currentTime = newTime;

      setCurrentTime(newTime);
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);

    const seconds = Math.floor(time % 60);

    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <div className="flex items-center justify-center ml-32 w-1/3">
      <span className="mr-2">{formatTime(currentTime)}</span>

      <input
        className="max-w-[80%] bg-gray-300"
        type="range"
        ref={progressBarRef}
        defaultValue="0"
        min="0"
        max={duration}
        onChange={handleProgressChange}
      />

      <span className="ml-2">{formatTime(duration)}</span>

      <audio ref={audioRef} className="hidden" controls={false} />
    </div>
  );
};

export default ProgressBar;
