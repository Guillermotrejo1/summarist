import SearchBar from "@/components/SearchBar";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { IoIosStarOutline } from "react-icons/io";
import { SlMicrophone } from "react-icons/sl";
import { GoClock } from "react-icons/go";
import { HiOutlineLightBulb } from "react-icons/hi";
import {} from "react-icons/ai";
import { BsBook, BsBookmark } from "react-icons/bs";
import axios from "axios";
import { useParams } from "next/navigation";
import Link from "next/link";
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
  const [bookInfo, setBookInfo] = useState<Book>();
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
      <Sidebar />
      <div className="w-[calc(100%-200px)] ml-50 h-screen py-10">
        <div className="max-w-[1070px] w-full mx-auto px-6">
          {isLoading ? (
            <>
              <div className="flex">
                <div className="px-2">
                  <Skeleton
                    width={600}
                    height={50}
                    sx={{ borderRadius: "0px" }}
                  />
                  <Skeleton
                    width={400}
                    height={50}
                    sx={{ borderRadius: "0px" }}
                  />
                  <Skeleton
                    width={700}
                    height={50}
                    sx={{ borderRadius: "0px" }}
                  />
                  <Skeleton
                    width={400}
                    height={100}
                    sx={{ borderRadius: "0px" }}
                  />
                  <Skeleton
                    width={500}
                    height={70}
                    sx={{ borderRadius: "0px" }}
                  />
                  <Skeleton
                    width={300}
                    height={70}
                    sx={{ borderRadius: "0px" }}
                  />
                  <Skeleton
                    width={500}
                    height={120}
                    sx={{ borderRadius: "0px" }}
                  />
                </div>
                <div className="flex items-center justify-center absolute top-7 right-7">
                  <Skeleton
                    width={400}
                    height={500}
                    sx={{ borderRadius: "0px" }}
                  />
                </div>
              </div>
              <div>
                <Skeleton
                  width={700}
                  height={400}
                  sx={{ borderRadius: "0px" }}
                />
              </div>
              <div>
                <Skeleton
                  width={700}
                  height={400}
                  sx={{ borderRadius: "0px" }}
                />
              </div>
            </>
          ) : (
            bookInfo && (
              <div className="flex">
                <div className="w-full">
                  <h1 className="text-[32px] font-bold text-[#032b41]">
                    {bookInfo.title}
                  </h1>
                  <p className="font-bold text-[#032b41] mb-4">
                    {bookInfo.author}
                  </p>
                  <h2 className="text-xl text-[#032b41] font-light mb-4">
                    {bookInfo.subTitle}
                  </h2>
                  <div className="border-t border-b border-[#e1e7ea] mb-4">
                    <div className="max-w-[400px] flex flex-wrap gap-y-3 py-4">
                      <div className="w-1/2 flex text-sm items-center font-medium">
                        <IoIosStarOutline className="text-lg" />{" "}
                        <span className="ml-2 text-sm">
                          {bookInfo.averageRating} ({bookInfo?.totalRating}{" "}
                          ratings){" "}
                        </span>{" "}
                      </div>
                      <div className="w-1/2 flex text-sm items-center font-medium">
                        <GoClock className="text-lg" />{" "}
                        <span className="ml-2 text-sm">03:24</span>
                      </div>
                      <div className="w-1/2 flex text-sm items-center font-medium">
                        <SlMicrophone className="text-lg" />{" "}
                        <span className="ml-2 text-sm">{bookInfo.type}</span>
                      </div>
                      <div className="w-1/2 flex text-sm items-center font-medium">
                        <HiOutlineLightBulb className="text-lg" />{" "}
                        <span className="ml-2 text-sm">
                          {bookInfo.keyIdeas} Key ideas
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2 mb-4">
                    <Link href={`/player/${bookInfo?.id}`}>
                      <button className="flex items-center justify-center w-36 h-12 !bg-[#032b41] text-[#fff] text-[16px] rounded-sm cursor-pointer gap-2 transition duration-200 ease-in-out">
                        <BsBook />
                        <span>Read</span>
                      </button>
                    </Link>
                    <Link href={`/player/${bookInfo?.id}`}>
                      <button className="flex items-center justify-center w-36 h-12 !bg-[#032b41] text-[#fff] text-[16px] rounded-sm cursor-pointer gap-2 transition duration-200 ease-in-out">
                        <SlMicrophone />
                        <span>Listen</span>
                      </button>
                    </Link>
                  </div>
                  <div className="flex items-center gap-2 mb-10">
                    <BsBookmark className="text-lg text-[#0365f2]" />
                    <p className="text-lg text-[#0365f2] font-bold">
                      Add title to My Library
                    </p>
                  </div>
                  <div className="text-lg text-[#032b41] mb-4 font-semibold">
                    What&apos;s it about?
                  </div>
                  <div className="flex gap-2 mb-4">
                    {bookInfo.tags.map((tag, index) => (
                      <div
                        key={index}
                        className="bg-[#f1f6f4] px-4 h-12 flex items-center cursor-not-allowed text-[#032b41] font-medium rounded-sm transition duration-200 ease-in-out"
                      >
                        {tag}
                      </div>
                    ))}
                  </div>
                  <div className="mb-4">{bookInfo.bookDescription}</div>
                  <div className="text-lg text-[#032b41] mb-4 font-semibold">
                    About the Author
                  </div>
                  <div className="mb-8">{bookInfo.authorDescription}</div>
                </div>
                <div className="h-screen w-lg ml-8">
                  <Image
                    src={bookInfo.imageLink}
                    width={100}
                    height={100}
                    alt=""
                    className="w-[300px] h-[300px] object-contain"
                  />
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </>
  );
};

export default Id;
