import Image from "next/image";
import axios from "axios";

import { CiClock2 } from "react-icons/ci";
import { IoMdStarOutline } from "react-icons/io";
import { useEffect, useState } from "react";
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

const Suggested = () => {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://us-central1-summaristt.cloudfunctions.net/getBooks?status=suggested"
        );
        setBooks(response.data.slice(0, 5));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="py-16">
      <h1 className="text-[22px] font-bold text-[#032b41] mb-2">
        Suggested Books
      </h1>
      <h4 className="font-light text-[#394547] mb-4">Browse those books</h4>
      <div className="flex">
        {books.map((book) => (
          <Link key={book.id} href={`book/${book.id}`} className="w-1/5 pt-[32px] pr-[12px] pb-[12px] pl-[12px] rounded-sm hover:bg-[#f4f5f5d4] flex items-center justify-center">
          <div>
            <Image src={book.imageLink} width={170} height={100} alt="" />
            <h2 className="font-bold text-[#032b41] mb-2 line-clamp-2 w-[150px]">
              Zero to One
            </h2>
            <h3 className="text-sm text-[#6b757b] font-light mb-2">
              Peter Theil with Blake Masters
            </h3>
            <h4 className="text-sm text-[#394547] mb-2">
              Notes on Startups, or How to build The Future
            </h4>
            <div className="flex">
              <div className="flex">
                <CiClock2 className="text-lg font-light text-[#6b757b]" />
                <h4 className="text-sm ml-1 font-light text-[#6b757b]">
                  03:24
                </h4>
              </div>
              <div className="flex ml-2">
                <IoMdStarOutline className="text-lg font-light text-[#6b757b]" />
                <h4 className="text-sm ml-1 font-light text-[#6b757b]">4.3</h4>
              </div>
            </div>
          </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Suggested;
