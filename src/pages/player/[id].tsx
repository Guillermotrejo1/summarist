import SearchBar from "@/components/SearchBar";
import Sidebar from "@/components/Sidebar";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "next/navigation";
import AudioPlayer from "@/components/player/AudioPlayer";
import { ImSpinner8 } from "react-icons/im";
import Skeleton from "@mui/material/Skeleton";

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

const Id = () => {
  const [bookInfo, setBookInfo] = useState<Book | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(true);
  const params = useParams();
  const id = params?.id;

  useEffect(() => {
    if (!id) return;
    console.log("Fetching book with ID:", id);

    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          `https://us-central1-summaristt.cloudfunctions.net/getBook?id=${id}`
        );
        console.log("API Response:", response.data);
        setBookInfo(response.data);
      } catch (error) {
        console.error("Error fetching data", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [id]);

  return (
    <>
      <SearchBar />
      <div className="w-[200px] hidden md:block fixed top-0 left-0">
        <Sidebar />
      </div>
      <div className="w-[calc(100%-200px)] ml-[200px] px-6 pt-6">
        {isLoading ? (
          <>
            <div className="flex flex-col items-center justify-center h-screen">
              <ImSpinner8 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 spinner text-5xl" />
            </div>
          </>
        ) : (
          <div className="flex flex-col justify-center items-center max-w-[800px] w-full mx-auto">
            <div className="text-2xl text-[#032b41] border-b border-[#e1e7ea] mb-8 p-4 w-full">
              <strong>{bookInfo?.title}</strong>
            </div>
            <div className="whitespace-pre-line">{bookInfo?.summary}</div>
          </div>
        )}
      </div>
      {isLoading ? (
        <div className="absolute bottom-2 left-8 right-4 gap-4 flex">
          <Skeleton variant="rectangular" width={40} height={40} />
          <div>
            <Skeleton variant="text" width={200} height={30} />
            <Skeleton variant="text" width={200} height={30} />
          </div>
        </div>
      ) : (
        bookInfo && (
          <AudioPlayer
            audioLink={bookInfo.audioLink}
            title={bookInfo.title}
            author={bookInfo.author}
            imageLink={bookInfo.imageLink}
          />
        )
      )}
    </>
  );
};

export default Id;
