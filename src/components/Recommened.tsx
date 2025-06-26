import { useEffect, useState } from "react";
import Image from "next/image";
import { CiClock2 } from "react-icons/ci";
import { IoMdStarOutline } from "react-icons/io";
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

const Recommended = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          "https://us-central1-summaristt.cloudfunctions.net/getBooks?status=recommended"
        );
        setBooks(response.data.slice(0, 5));
        setIsLoading(false)
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1 className="text-[22px] font-bold text-[#032b41] mb-4">
        Recommended For You
      </h1>
      <h4 className="font-light text-[#394547] mb-4">
        We Think you&apos;ll like this
      </h4>
      <div className="flex flex-wrap">
        {isLoading
          ? new Array(5).fill(0).map((_, index) => (
              <div className="p-2" key={index}>
                <Skeleton variant="rectangular" width={170} height={170} />
                <h2>
                  <Skeleton
                    variant="text"
                    width={170}
                    height={30}
                    sx={{ borderRadius: "0px" }}
                  />
                </h2>
                <h3>
                  <Skeleton
                    variant="text"
                    width={170}
                    height={30}
                    sx={{ borderRadius: "0px" }}
                  />
                </h3>
                <h4>
                  <Skeleton
                    variant="text"
                    width={150}
                    height={50}
                    sx={{ borderRadius: "0px" }}
                  />
                </h4>
                <h4>
                  <Skeleton
                    variant="text"
                    width={170}
                    height={30}
                    sx={{ borderRadius: "0px" }}
                  />
                </h4>
              </div>
            ))
          : books.map((book) => (
              <Link
                key={book.id}
                href={`book/${book.id}`}
                className="w-1/5 pt-[32px] pr-[12px] pb-[12px] pl-[12px] rounded-sm hover:bg-[#f4f5f5d4] flex items-center justify-center"
              >
                <div>
                  <Image
                    src={book.imageLink}
                    width={170}
                    height={100}
                    alt={book.title}
                  />
                  <h2 className="font-bold text-[#032b41] mb-2 line-clamp-2 w-[150px]">
                    {book.title}
                  </h2>
                  <h3 className="text-sm text-[#6b757b] font-light mb-2">
                    {book.author}
                  </h3>
                  <h4 className="text-sm text-[#394547] mb-2">
                    {book.subTitle}
                  </h4>
                  <div className="flex">
                    <div className="flex">
                      <CiClock2 className="text-lg font-light text-[#6b757b]" />
                      <h4 className="text-sm ml-1 font-light text-[#6b757b]">
                        4:24
                      </h4>
                    </div>
                    <div className="flex ml-2">
                      <IoMdStarOutline className="text-lg font-light text-[#6b757b]" />
                      <h4 className="text-sm ml-1 font-light text-[#6b757b]">
                        {book.averageRating}
                      </h4>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
      </div>
    </div>
  );
};

export default Recommended;
