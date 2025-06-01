import Image from "next/image";
import { FaCirclePlay } from "react-icons/fa6";
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://us-central1-summaristt.cloudfunctions.net/getBooks?status=selected"
        );
        setBooks(response.data[0]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-[22px] font-bold text-[#032b41] mb-4">
        Selected just for you
      </h1>
      <Link href={`book/${books?.id}`}
        className="flex bg-[#fbefd6] p-6 mb-6 rounded-[6px] gap-6 w-[calc(66.66%)] h-50"
      >
        <div>
          <div className="flex w-[calc(66.66%)]">
            <h2 className="leading-5">
              {books?.subTitle}
            </h2>
            <div className="w-[1px] bg-[#bac8ce] mx-4 h-38"></div>
            <div>
              {books && (
                <div className="flex">
                  <Image
                    src={books.imageLink}
                    width={150}
                    height={150}
                    alt=""
                  />
                  <div className="flex flex-col ml-4">
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
        </div>
      </Link>
    </div>
  );
};

export default Selected;
