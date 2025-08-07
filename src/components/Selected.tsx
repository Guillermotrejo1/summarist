import Image from "next/image";
import { FaCirclePlay } from "react-icons/fa6";
import { useEffect, useState } from "react";
import axios from "axios";
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

const Selected = () => {
  const [books, setBooks] = useState<Book | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          "https://us-central1-summaristt.cloudfunctions.net/getBooks?status=selected"
        );
        setBooks(response.data[0]);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <h1 className="text-[22px] font-bold text-[#032b41] mb-4">
        Selected just for you
      </h1>
      {isLoading ? (
        <>
          <div className="mr-2 mb-2">
            <Skeleton variant="rectangular" width={700} height={200} />
          </div>
        </>
      ) : (
        <Link
          href={`book/${books?.id}`}
          className="flex bg-[#fbefd6] p-6 mb-6 rounded-[4px] gap-6 md:max-w-2xl h-auto"
        >
          <div className="flex flex-col md:flex-row w-full">
            <h2 className="leading-5 mb-2 md:mb-0">{books?.subTitle}</h2>
            <div className="w-[1px] bg-[#bac8ce] mr-10 h-38 hidden md:block"></div>
            <div>
              {books && (
                <div className="flex mr-22">
                  <Image
                    src={books.imageLink}
                    width={140}
                    height={140}
                    alt=""
                  />
                  <div className="flex flex-col mr-8 px-6">
                    <h1 className="font-bold whitespace-nowrap">
                      {books.title}
                    </h1>
                    <h2>{books.author}</h2>
                    <div className="flex mt-6">
                      <FaCirclePlay className="text-4xl" />
                      <h3 className="flex ml-3 font-bold text-[14px] text-[#032b41] whitespace-nowrap items-center">
                        3 mins 23 secs
                      </h3>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </Link>
      )}
    </>
  );
};

export default Selected;
