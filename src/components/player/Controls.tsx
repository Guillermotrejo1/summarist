import React, { useEffect, useRef, useState } from "react";
import { RiForward10Fill } from "react-icons/ri";
import { GrBackTen } from "react-icons/gr";
import { FaCirclePlay } from "react-icons/fa6";
import { FaCirclePause } from "react-icons/fa6";
import axios from "axios";
import { useRouter } from "next/router";

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

export default function Controls() {
  const [data, setData] = useState<Book>();
  const router = useRouter();
  const { id } = router.query;
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

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

  const handlePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const skipForward = () => {
    if (audioRef.current) {
      audioRef.current.currentTime += 10;
    }
  };

  const skipBackward = () => {
    if (audioRef.current) {
      audioRef.current.currentTime -= 10;
      if (audioRef.current.currentTime < 0) {
        audioRef.current.currentTime = 0; 
      }
    }
  };

  return (
    <>
      <div className="flex gap-4 items-center">
        <button onClick={skipBackward}>
          <GrBackTen className="text-[28px]" />
        </button>
        <button onClick={handlePlayPause}>
          {isPlaying ? <FaCirclePause className="text-[40px]" /> : <FaCirclePlay className="text-[40px]" />}
          
        </button>
        <button onClick={skipForward}>
          <RiForward10Fill className="text-[28px]" />
        </button>
      </div>
      {/* created a dummy hidden element to avoid type error for data */}
      <h2 className="hidden">{data?.title}</h2>
      <audio ref={audioRef} />
    </>
  );
}